"use client";

import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const contactInfo: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}> = [
  {
    icon: Mail,
    label: "Email",
    value: "maniamarthi@gmail.com",
    href: "mailto:maniamarthi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9502728137",
    href: "tel:+919502728137",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "East Godavari, Andhra Pradesh",
  },
];

const socialLinks: Array<{
  icon: LucideIcon;
  label: string;
  href: string;
}> = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manikrishna-amarthi-001427217/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/manikrishnaamarthi",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:maniamarthi@gmail.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3500);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-3 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12"
    >
      {submitStatus === "success" ? (
        <div
          aria-live="polite"
          className="fixed left-4 right-4 top-5 z-[90] rounded-2xl border border-emerald-400/20 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-100 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(16,185,129,0.75)] sm:left-auto sm:right-5 sm:max-w-sm"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
            <p>Message sent successfully. I&apos;ll get back to you soon.</p>
          </div>
        </div>
      ) : null}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <Reveal variant="left">
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-2xl">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                Get In Touch
              </p>
              <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
                Let&apos;s build something{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
                  worth shipping
                </span>
                .
              </h2>
              <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-300">
                I&apos;m open to meaningful product work, full-stack collaborations,
                and opportunities where strong engineering and thoughtful delivery
                both matter.
              </p>

              <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 sm:gap-4 rounded-lg sm:rounded-xl md:rounded-[1.5rem] border border-white/10 bg-black/25 p-4 sm:p-5"
                    >
                      <div className="inline-flex h-10 sm:h-12 w-10 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                        <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 sm:mt-2 block text-sm sm:text-base text-slate-200 transition-colors duration-300 hover:text-white"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-200">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                  Find Me Online
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a
                href="/Manikrishna_EXP_Resume.pdf"
                download="Amarthi_Manikrishna_Resume.pdf"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 w-full sm:w-auto justify-center sm:justify-start"
              >
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  <Field
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <Field
                  id="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs sm:text-sm font-medium text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-lg sm:rounded-xl md:rounded-[1.5rem] border border-white/10 bg-black/25 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-black/35"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    submitStatus === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-linear-to-r from-sky-500 to-violet-500 text-white hover:-translate-y-1 hover:opacity-95"
                  } disabled:cursor-not-allowed disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span className="hidden sm:inline">Send Message</span>
                      <span className="sm:hidden">Send</span>
                    </>
                  )}
                </button>

                <div aria-live="polite" className="min-h-6 text-sm">
                  {submitStatus === "success" ? (
                    <p className="text-emerald-300">
                      Thank you for your message. I&apos;ll get back to you soon.
                    </p>
                  ) : null}
                  {submitStatus === "error" ? (
                    <p className="text-rose-300">
                      Failed to send message. Please try again later.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4 text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-black/35"
      />
    </div>
  );
}
