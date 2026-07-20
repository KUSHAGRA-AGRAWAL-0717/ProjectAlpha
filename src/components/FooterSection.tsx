import { motion } from "framer-motion";
import { Github, Linkedin, Code, Mail, ArrowUp, Heart, Twitter } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Twitter, href: "https://x.com/KushagraAg0717", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:kushagraagrawal655@gmail.com", label: "Email" },
];

/**
 * FOOTER — Enhanced 3-Column Grid
 *
 * Gradient top bar, enhanced social hover, better hierarchy.
 */
export default function FooterSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      {/* Gradient top bar */}
      <div className="footer-gradient-bar" />

      {/* 3-column grid */}
      <div className="grid-section-inner grid-cols-1 md:grid-cols-3">
        {/* Brand */}
        <div className="grid-cell">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-xl tracking-tight text-foreground inline-block px-2 py-1 rounded-md"
          >
            KA<span className="gradient-text-animated">.</span>
          </motion.span>
          <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed max-w-xs">
            Building software that scales — from AI-powered applications to distributed backend systems.
          </p>
          <div className="flex gap-2 mt-5">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="icon-btn w-9 h-9 rounded-lg"
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

       
        {/* Contact */}
        <div className="grid-cell">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Get In Touch
          </h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <a
              href="mailto:kushagraagrawal655@gmail.com"
              className="block hover:text-foreground transition-colors link-underline w-fit"
            >
              kushagraagrawal655@gmail.com
            </a>
            <a
              href="tel:+919672048846"
              className="block hover:text-foreground transition-colors"
            >
              +91 9672048846
            </a>
            <p>Jalandhar, India</p>
          </div>
        </div>


         {/* Thanks */}
        <div className="grid-cell">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Thank You
          </h4>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            Thanks for visiting! Feel free to reach out if you have any questions or just want to say hi. Please visit again!
          </p>
        </div>

      </div>

      {/* Bottom row */}
      <div className="grid-cell flex flex-col md:flex-row justify-between items-center gap-4 py-4 text-center md:text-left">
        <p className="text-[11px] text-muted-foreground flex flex-wrap justify-center md:justify-start items-center gap-1.5">
          © {new Date().getFullYear()} All credit goes to TypeScript, AI, and a little to Kushagra Agrawal (that's me) 😁😛
          <Heart size={11} className="text-accent" style={{ fill: "currentColor" }} />
        </p>
        <div className="flex items-center justify-center gap-4">
          <p className="text-[11px] text-muted-foreground font-mono">
            Still building...
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn w-8 h-8 rounded-lg bg-surface-0 border border-border"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
