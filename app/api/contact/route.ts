import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, comments } = await request.json();

    // Validate input fields
    if (!name || !email || !subject || !comments) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // App Password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: "dewdigitalgr@gmail.com", // Receiver's email
      subject: subject,
      text: comments,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Comments:</strong></p>
             <p>${comments}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
