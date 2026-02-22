import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServiceClient, createSupabaseServerClient } from "@/lib/supabase/server";
import { createMailTransport } from "@/lib/email/transporter";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, comments } = await request.json();

    if (!name || !email || !subject || !comments) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const supabase = await createSupabaseServerClient();
    const service = createSupabaseServiceClient();
    const { data: authData } = await supabase.auth.getUser();

    await service.from("inquiries").insert({
      user_id: authData.user?.id ?? null,
      name,
      email,
      subject,
      message: comments,
      status: "new",
    });

    try {
      const { transporter, fromAddress } = createMailTransport();

      const mailOptions = {
        from: `"ZENCORP Website" <${fromAddress}>`,
        replyTo: email,
        to: process.env.EMAIL_TO || "dewdigitalgr@gmail.com",
        subject,
        text: comments,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Comments:</strong></p>
               <p>${comments}</p>`,
      };

      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error("Contact email delivery failed:", mailError);
      return NextResponse.json({ error: "Message saved but email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
