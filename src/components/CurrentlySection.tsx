import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

/**
 * CURRENTLY SECTION — Premium Amazon Role Card
 *
 * Glassmorphism card with left accent border, pulsing active indicator,
 * and authentic engineering description.
 */
export default function CurrentlySection() {
  return (
    <section className="scroll-mt-20">
      <div className="grid-section-inner grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid-cell-enhanced p-0 overflow-hidden"
        >
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 relative"
            style={{
              borderLeft: "3px solid #FF9900",
            }}
          >
            {/* Left: icon + text */}
            <div className="flex items-start gap-4 flex-1">
              {/* Amazon-style icon */}
              <div
                className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsla(36, 100%, 50%, 0.12), hsla(36, 100%, 50%, 0.04))",
                  border: "1px solid hsla(36, 100%, 50%, 0.2)",
                  boxShadow: "0 0 16px -4px hsla(36, 100%, 50%, 0.15)",
                }}
              >
                <Building2 size={22} style={{ color: "#FF9900" }} />
              </div>

              <div className="flex-1 min-w-0">
                {/* Label */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Currently
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow"
                    />
                    Active
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-0.5">
                  Software Development Engineer Intern
                </h3>

                {/* Company + Team */}
                <p className="text-sm font-semibold mb-2" style={{ color: "#FF9900" }}>
                  Amazon
                  <span className="text-muted-foreground font-normal mx-2">·</span>
                  <span className="text-muted-foreground font-medium">Prime Tech Team</span>
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Working on backend systems within Amazon Prime Tech using Java, Spring Boot, AWS, and distributed systems.
                </p>
              </div>
            </div>

            {/* Right: location */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0">
              <MapPin size={12} className="text-accent/60" />
              On-site
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
