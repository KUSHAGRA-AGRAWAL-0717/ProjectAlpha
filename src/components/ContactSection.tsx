import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import emailjs from "@emailjs/browser";
import SceneVideo from "./Scene.mp4";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "kushagraagrawal.9672@gmail.com", href: "mailto:kushagraagrawal.9672@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9672048846", href: "tel:+919672048846" },
  { icon: MapPin, label: "Location", value: "India", href: null },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

/**
 * CONTACT SECTION — Clean Split: Info + Form
 */
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;
    setSending(true);
    setStatus("idle");
    try {
      const form = formRef.current;
      const name = (form.elements.namedItem("user_name") as HTMLInputElement)?.value;
      const email = (form.elements.namedItem("user_email") as HTMLInputElement)?.value;
      const phone = (form.elements.namedItem("user_phone") as HTMLInputElement)?.value;
      const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
      const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject}\n\nMessage:\n${message}`;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gmail",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact",
        {
          from_name: name,
          reply_to: email,
          subject,
          message: fullMessage,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Split: Info | Form */}
      <div className="grid-section-inner grid-cols-1 lg:grid-cols-[2fr_3fr]">

        {/* ── LEFT: Contact info ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid-cell flex flex-col relative overflow-hidden group"
        >
          {/* Full Left Column Background Video */}
          <div className="absolute inset-0 z-0">
             <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 mix-blend-screen">
               <source src={SceneVideo} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/30" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Availability card */}
            <div className="skeuo-panel rounded-lg p-4 mb-4 relative overflow-hidden bg-background/50 backdrop-blur-md border border-border/50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: "hsl(150, 60%, 50%)", boxShadow: "0 0 6px hsla(150, 60%, 50%, 0.3)" }} />
                <span className="text-sm font-bold text-foreground">Available for Work</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Currently accepting freelance projects and full-time opportunities.
              </p>
            </div>

            <div className="grid-divider-h mb-4 opacity-50" />

            {/* Contact details */}
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 drop-shadow-sm">
              Contact Information
            </h3>

            <div className="space-y-4 mb-4">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="icon-btn w-9 h-9 shrink-0 bg-background/50 backdrop-blur-sm">
                    <c.icon size={15} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-semibold text-foreground hover:text-accent transition-colors link-underline drop-shadow-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground drop-shadow-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-divider-h mb-4 opacity-50" />

            {/* Social links */}
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 drop-shadow-sm">
              Connect With Me
            </h3>
            <div className="flex gap-2 mt-auto">
              {SOCIAL_LINKS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="icon-btn w-10 h-10 bg-background/50 backdrop-blur-sm"
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid-cell"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="user_name" className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="input-field input-focus-ripple"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="input-field input-focus-ripple"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="user_phone" className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                Phone
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className="input-field input-focus-ripple"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                Subject <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="input-field input-focus-ripple"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="input-field input-focus-ripple resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="skeuo-btn skeuo-btn-primary w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-emerald-400 text-sm text-center font-medium mt-2">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-destructive text-sm text-center font-medium mt-2">
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
