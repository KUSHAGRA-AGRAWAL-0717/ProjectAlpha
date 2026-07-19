import { motion } from "framer-motion";
import { Server, LayoutTemplate, Cloud, Workflow, Terminal, Cpu, ArrowRight } from "lucide-react";

import BusinessAnalysisVideo from "./Business Analysis.mp4";
import Coding1Video from "./Coding (1).mp4";
import TiltCard from "./ui/TiltCard";

const FEATURED_SERVICES = [
  {
    title: "Backend & Distributed Systems",
    icon: Server,
    video: BusinessAnalysisVideo,
    description: "Designing and building scalable backend services, microservices architectures, and event-driven systems for production workloads.",
    highlights: ["API Engineering", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "AI-Powered Applications",
    icon: Cpu,
    video: Coding1Video,
    description: "Building intelligent applications with LLM integrations, automation pipelines, and ML-powered features that solve real problems.",
    highlights: ["LLM Integrations", "Automation Pipelines", "ML Applications"],
  },
];

const OTHER_SERVICES = [
  { title: "Cloud Infrastructure", icon: Cloud, description: "AWS services, containerization, and infrastructure automation for reliable deployments." },
  { title: "API Engineering", icon: Terminal, description: "RESTful and event-driven APIs with authentication, rate limiting, and monitoring." },
  { title: "Automation Systems", icon: Workflow, description: "Data processing pipelines, CI/CD workflows, and infrastructure automation." },
  { title: "Full-Stack Development", icon: LayoutTemplate, description: "Modern web applications with React, Next.js, and production-grade architecture." },
];

/**
 * AREAS OF EXPERTISE SECTION — Engineering-Focused
 *
 * 2 featured areas (large cards with gradient borders, top row)
 * 4 compact areas (bottom row with animated bottom border)
 */
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20">
      {/* Header */}
      <div className="grid-header-bar">
        <div>
          <span className="section-eyebrow">Engineering Expertise</span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight section-title-underline">
            Areas of <span className="gradient-text-animated">Expertise</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm mt-3">
            Building production-grade systems across the stack — from distributed backends to AI-powered applications.
          </p>
        </div>
      </div>

      {/* Featured areas — 2 large cards with gradient borders */}
      <div className="grid-section-inner grid-cols-1 md:grid-cols-2">
        {FEATURED_SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="grid-cell-enhanced p-0 group relative"
          >
            {/* Card index number */}
            <span className="card-index">0{index + 1}</span>

            <TiltCard intensity={8} className="flex flex-col h-full w-full p-4 sm:p-4">
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.15), hsla(32, 80%, 55%, 0.05))",
                    border: "1px solid hsla(32, 80%, 55%, 0.2)",
                    boxShadow: "0 0 12px -4px hsla(32, 80%, 55%, 0.2)",
                  }}
                >
                  <service.icon size={18} className="text-accent" />
                </div>
                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
              </div>

              {service.video && (
                <div className="relative w-full max-w-[200px] mx-auto aspect-video rounded-xl overflow-hidden mb-3.5 border border-border/50 shadow-sm bg-white">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                </div>
              )}

              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              <div className="grid-divider-h mb-3.5" />

              <div className="flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <span key={h} className="skill-chip text-[11px] tag-float">{h}</span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Compact areas — 4 items with enhanced hover */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {OTHER_SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="grid-cell-enhanced group p-4 sm:p-4"
          >
            <span className="card-index">0{index + 3}</span>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.1), hsla(32, 80%, 55%, 0.03))",
                  border: "1px solid hsla(32, 80%, 55%, 0.15)",
                }}
              >
                <service.icon size={13} className="text-accent/70" />
              </div>
              <h3 className="font-semibold text-foreground text-[13px] tracking-tight group-hover:text-accent transition-colors duration-200">
                {service.title}
              </h3>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="grid-cell flex justify-center py-6">
        <a
          href="#projects"
          className="skeuo-btn skeuo-btn-primary btn-shimmer px-6 py-3 rounded-lg text-sm group flex items-center gap-2"
        >
          View My Projects
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
