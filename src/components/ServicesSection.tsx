import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, LineChart, Workflow, LayoutDashboard, ShoppingCart, ArrowRight } from "lucide-react";

import BusinessAnalysisVideo from "./Business Analysis.mp4";
import Coding1Video from "./Coding (1).mp4";
import TiltCard from "./ui/TiltCard";

const FEATURED_SERVICES = [
  {
    title: "AI-Powered Solutions",
    icon: MessageSquare,
    video: BusinessAnalysisVideo,
    description: "Custom AI chatbots, automation pipelines, and intelligent systems that integrate directly into your business workflow.",
    highlights: ["Chatbot development", "AI automation pipelines", "LLM integrations"],
  },
  {
    title: "Full-Stack Web Development",
    icon: LayoutTemplate,
    video: Coding1Video,
    description: "Fast, modern, conversion-focused web applications built with production-grade architecture.",
    highlights: ["SaaS platforms", "Landing pages & web apps", "API design & backend systems"],
  },
];

const OTHER_SERVICES = [
  { title: "SEO & Performance", icon: LineChart, description: "Technical SEO, site speed optimization, and on-page improvements for better organic reach." },
  { title: "Business Automation", icon: Workflow, description: "Automate repetitive tasks — lead handling, email workflows, data processing pipelines." },
  { title: "Analytics Dashboards", icon: LayoutDashboard, description: "KPI dashboards and reporting interfaces for data-driven decision making." },
  { title: "E-commerce Platforms", icon: ShoppingCart, description: "Storefronts, admin panels, payment integrations, and operational tools." },
];

/**
 * SERVICES SECTION — Editorial Layout (Enhanced)
 *
 * 2 featured services (large cards with gradient borders, top row)
 * 4 compact services (bottom row with animated bottom border)
 * Service numbering for editorial feel.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20">
      {/* Header */}
      <div className="grid-header-bar">
        <div>
          <span className="section-eyebrow">What I Offer</span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight section-title-underline">
            What I <span className="gradient-text-animated">Build</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm mt-3">
            I help businesses grow with AI, websites, and automation — from concept to production.
          </p>
        </div>
      </div>

      {/* Featured services — 2 large cards with gradient borders */}
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

            <TiltCard intensity={8} className="flex flex-col h-full w-full p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.15), hsla(32, 80%, 55%, 0.05))",
                    border: "1px solid hsla(32, 80%, 55%, 0.2)",
                    boxShadow: "0 0 12px -4px hsla(32, 80%, 55%, 0.2)",
                  }}
                >
                  <service.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
              </div>

              {service.video && (
                <div className="relative w-full max-w-[260px] mx-auto aspect-video rounded-xl overflow-hidden mb-5 border border-border/50 shadow-sm bg-white">
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

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              <div className="grid-divider-h mb-4" />

              <div className="flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <span key={h} className="skill-chip text-[11px] tag-float">{h}</span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Compact services — 4 items with enhanced hover */}
      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {OTHER_SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="grid-cell-enhanced group"
          >
            <span className="card-index">0{index + 3}</span>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsla(32, 80%, 55%, 0.1), hsla(32, 80%, 55%, 0.03))",
                  border: "1px solid hsla(32, 80%, 55%, 0.15)",
                }}
              >
                <service.icon size={15} className="text-accent/70" />
              </div>
              <h3 className="font-semibold text-foreground text-sm tracking-tight group-hover:text-accent transition-colors duration-200">
                {service.title}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="grid-cell flex justify-center py-6">
        <a
          href="#contact"
          className="skeuo-btn skeuo-btn-primary btn-shimmer px-6 py-3 rounded-lg text-sm group flex items-center gap-2"
        >
          Let's Discuss Your Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
