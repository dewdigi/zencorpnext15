"use client";

import React, { useState } from "react";

export default function GetInTuch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    subject: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | string>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
        const payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          subject: formData.subject,
          message: formData.comments,
        };

        const response = await fetch("/api/inquiries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
            setFormStatus("Message sent successfully!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              subject: "",
              comments: "",
            });
          } else {
            const errorData = await response.json();
            setFormStatus(errorData.error || "Failed to send message. Please try again.");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setFormStatus("An error occurred. Please try again later.");
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <>
      <div className="w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          <h3 className="mb-2 text-2xl font-semibold text-[#0f261b]">Get in touch</h3>
          <p className="mb-6 text-sm text-[#4b6054]">
            Share your requirement and our relevant service team will contact you.
          </p>

              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5">
                    <label htmlFor="name" className="form-label font-medium">
                      Full Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <label htmlFor="email" className="form-label font-medium">
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-4 mb-5">
                    <label htmlFor="phone" className="form-label font-medium">
                      Phone
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                      placeholder="+971..."
                    />
                  </div>

                  <div className="lg:col-span-4 mb-5">
                    <label htmlFor="company" className="form-label font-medium">
                      Company
                    </label>
                    <input
                      name="company"
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="lg:col-span-4 mb-5">
                    <label htmlFor="service" className="form-label font-medium">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                    >
                      <option value="" disabled>
                        Select service
                      </option>
                      <option value="Copper Ecosystem">Copper Ecosystem</option>
                      <option value="Shipping & Logistics">Shipping & Logistics</option>
                      <option value="Healthcare Accessibility">Healthcare Accessibility</option>
                      <option value="Building Materials">Building Materials</option>
                      <option value="Hospitality Supplies">Hospitality Supplies</option>
                      <option value="FMCG">FMCG</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <label htmlFor="subject" className="form-label font-medium">
                      Subject
                    </label>
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input mt-2 h-11 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 outline-none focus:border-[#165029]/60"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="comments" className="form-label font-medium">
                      Message
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      required
                      value={formData.comments}
                      onChange={handleChange}
                      className="form-input mt-2 h-32 w-full rounded-xl border border-[#d4ddd6] bg-[#f9fbfa] px-3 py-2 outline-none focus:border-[#165029]/60"
                      placeholder="Tell us about your requirement..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  disabled={isSubmitting}
                  className={`inline-flex h-11 items-center rounded-xl px-6 text-base font-medium text-white transition ${
                    isSubmitting ? "bg-gray-400" : "bg-[#165029] hover:bg-[#0f3b1e]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {formStatus && <p className="mt-4 text-sm">{formStatus}</p>}
        </div>
      </div>
    </>
  );
}
