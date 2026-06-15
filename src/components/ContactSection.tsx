import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "kushagraagrawal.9672@gmail.com", href: "mailto:kushagraagrawal.9672@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9672048846", href: "tel:+919672048846" },
  { icon: MapPin, label: "Location", value: "India", href: null },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

/**
 * CONTACT SECTION — 40/60 Split
 *
 * ┌──────────────────────────────────────────────┐
 * │ [006 — CONTACT]  Let's Work Together         │
 * ├─────────────────────┬────────────────────────┤
 * │  Available Badge    │  Contact Form          │
 * │  Contact Info       │  ┌──────┬──────┐       │
 * │  Social Links       │  │ Name │Email │       │
 * │                     │  ├──────┴──────┤       │
 * │                     │  │ Phone       │       │
 * │                     │  ├─────────────┤       │
 * │                     │  │ Subject     │       │
 * │                     │  ├─────────────┤       │
 * │                     │  │ Message     │       │
 * │                     │  ├─────────────┤       │
 * │                     │  │ [Send]      │       │
 * │                     │  └─────────────┘       │
 * └─────────────────────┴────────────────────────┘
 */
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    const form = formRef.current;
    if (!form) return;

    const name = (form.querySelector('input[name="user_name"]') as HTMLInputElement)?.value || "";
    const email = (form.querySelector('input[name="user_email"]') as HTMLInputElement)?.value || "";
    const phone = (form.querySelector('input[name="user_phone"]') as HTMLInputElement)?.value || "";
    const subject = (form.querySelector('input[name="user_subject"]') as HTMLInputElement)?.value || "";
    const message = (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value || "";

    const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

    const injectHidden = (fieldName: string, value: string) => {
      let el = form.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
      if (!el) {
        el = document.createElement("input");
        el.type = "hidden";
        el.name = fieldName;
        form.appendChild(el);
      }
      el.value = value;
    };

    injectHidden("hidden_phone", phone);
    injectHidden("hidden_email", email);
    injectHidden("hidden_subject", subject);

    const msgField = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (msgField) msgField.value = fullMessage;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        setSending(false);
        setError("Failed to send. Please try again or email me directly.");
        console.error("FAILED...", err?.text || err);
      });
  };

  return (
    <section id="contact" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <span className="grid-section-label">006 — Contact</span>
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
      </div>

      {/* 40/60 Split */}
      <div className="grid-section-inner grid-cols-1 md:grid-cols-[2fr_3fr]">

        {/* ── LEFT: Contact info ── */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          className="grid-cell flex flex-col gap-6"
        >
          {/* Available badge */}
          <div
            className="p-4 rounded-lg"
            style={{
              background: "hsl(var(--surface-0))",
              border: "1px solid hsl(var(--border))",
              boxShadow: "inset 2px 2px 6px -1px var(--inset-dark), inset -1px -1px 3px 0 var(--inset-light)",
            }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span className="text-sm font-bold text-foreground">Available for Work</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Currently accepting freelance projects and full-time opportunities.
            </p>
          </div>

          <div className="grid-divider-h" />

          {/* Contact details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="icon-btn w-9 h-9 rounded-lg flex-shrink-0 group-hover:border-accent/40">
                    <item.icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid-divider-h" />

          {/* Social links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="icon-btn w-10 h-10 rounded-lg"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Contact form ── */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.7, type: "spring", bounce: 0.2 }}
          className="grid-cell"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  name="user_name"
                  required
                  className="input-field input-focus-ripple skeuo-pressed-plate"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="input-field input-focus-ripple skeuo-pressed-plate"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Phone
              </label>
              <input
                name="user_phone"
                type="tel"
                className="input-field input-focus-ripple skeuo-pressed-plate"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Subject <span className="text-accent">*</span>
              </label>
              <input
                name="user_subject"
                required
                className="input-field input-focus-ripple skeuo-pressed-plate"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="input-field input-focus-ripple resize-none skeuo-pressed-plate"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.008 }}
              whileTap={{ scale: 0.995 }}
              className="btn-primary btn-stamp w-full rounded-lg py-3.5 text-sm gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                >
                  <CheckCircle size={15} />
                  Message sent! I'll reply within 24 hours.
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-destructive text-sm py-2 rounded-lg bg-destructive/10 border border-destructive/20"
                >
                  <AlertCircle size={15} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
