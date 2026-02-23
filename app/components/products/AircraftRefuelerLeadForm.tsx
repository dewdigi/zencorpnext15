"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  companyName: string;
  country: string;
  industryType: string;
  email: string;
  phone: string;
  timeline: string;
  message: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const initialState: FormState = {
  fullName: "",
  companyName: "",
  country: "",
  industryType: "",
  email: "",
  phone: "",
  timeline: "",
  message: "",
};

export default function AircraftRefuelerLeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const trackEvent = (action: string, label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: "aircraft_refueler_landing",
        event_label: label,
      });
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    trackEvent("cta_click", "request_offer_submit_attempt");

    const subject = `Refueler Inquiry - ${form.country} - ${form.timeline}`;
    const message = [
      "Aircraft Refueler Inquiry (18,000L)",
      `Industry Type: ${form.industryType}`,
      `Country: ${form.country}`,
      `Purchase Timeline: ${form.timeline}`,
      "",
      "Buyer Message:",
      form.message,
    ].join("\n");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.companyName,
          service: "Aircraft Refueling Truck - 18,000L",
          subject,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setStatus(data.error || "Failed to submit. Please try again.");
        return;
      }

      trackEvent("form_submit_success", "request_offer");
      setStatus("Request submitted. Our team will contact you within 2 hours.");
      setForm(initialState);
    } catch {
      setStatus("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-[#d2dae0] bg-white p-6 shadow-[0_24px_40px_-30px_rgba(0,0,0,0.4)] lg:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f6070]">Request Commercial Offer</p>
        <h3 className="mt-2 text-2xl font-semibold text-[#0b1828]">Get Technical Specs and Pricing</h3>
        <p className="mt-2 text-sm text-[#42576b]">
          Submit your requirement and our aviation equipment team will respond with a formal offer and inspection options.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
          <input
            type="text"
            required
            placeholder="Company Name"
            value={form.companyName}
            onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            required
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
          <input
            type="text"
            required
            placeholder="Industry Type"
            value={form.industryType}
            onChange={(e) => setForm((prev) => ({ ...prev, industryType: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
          <input
            type="text"
            required
            placeholder="Phone / WhatsApp"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className="h-11 rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
          />
        </div>

        <select
          required
          value={form.timeline}
          onChange={(e) => setForm((prev) => ({ ...prev, timeline: e.target.value }))}
          className="h-11 w-full rounded-xl border border-[#d4dce2] px-3 text-sm outline-none transition focus:border-[#14532d]"
        >
          <option value="">Purchase Timeline</option>
          <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
          <option value="Near-term (1-3 months)">Near-term (1-3 months)</option>
          <option value="Planned (3-6 months)">Planned (3-6 months)</option>
          <option value="Long-term (6+ months)">Long-term (6+ months)</option>
        </select>

        <textarea
          required
          rows={5}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full rounded-xl border border-[#d4dce2] px-3 py-2 text-sm outline-none transition focus:border-[#14532d]"
        />

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-[#14532d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3f22] disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Send Inquiry"}
          </button>
        </div>

        {status ? <p className="text-sm text-[#1f3c58]">{status}</p> : null}
      </form>
    </div>
  );
}
