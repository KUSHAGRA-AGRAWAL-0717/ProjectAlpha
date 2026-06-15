import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, LineChart, Workflow, LayoutDashboard, ShoppingCart, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "AI Chatbot Development",
    icon: MessageSquare,
    description: "Custom AI chatbots for websites to answer questions, capture leads, and improve customer support.",
    points: ["Website chat integration", "Lead capture workflows", "FAQ and customer query automation"],
    outcome: "Best for businesses that want 24/7 automated customer support."
  },
  {
    title: "Website Development & Redesign",
    icon: LayoutTemplate,
    description: "Fast, modern, conversion-focused websites for businesses, startups, and personal brands.",
    points: ["Responsive design", "Landing pages or full websites", "Performance and UI improvements"],
    outcome: "Best for businesses that want a high-converting digital presence."
  },
  {
    title: "SEO & Website Optimization",
    icon: LineChart,
    description: "Improve visibility, site structure, and on-page performance so businesses can get more organic traffic.",
    points: ["On-page SEO improvements", "Technical performance optimization", "Content and structure recommendations"],
    outcome: "Best for businesses that want more leads from search engines."
  },
  {
    title: "Business Automation",
    icon: Workflow,
    description: "Automate repetitive business tasks to save time and reduce manual work.",
    points: ["Lead handling workflows", "Email and follow-up automation", "Internal business process automation"],
    outcome: "Best for businesses that want to scale operations efficiently."
  },
  {
    title: "Analytics Dashboards",
    icon: LayoutDashboard,
    description: "Build dashboards and reporting systems so clients can track leads, traffic, sales, or operations clearly.",
    points: ["KPI dashboard setup", "Data visualization", "Reporting interface development"],
    outcome: "Best for businesses that want data-driven decision making."
  },
  {
    title: "E-commerce / Business Platforms",
    icon: ShoppingCart,
    description: "Build or improve platforms for selling products, managing users, or handling online business operations.",
    points: ["Storefront or admin panel development", "Payment and workflow integration", "Custom business features"],
    outcome: "Best for businesses that want a robust online operational platform."
  }
];

/**
 * SERVICES SECTION — 3×2 Bordered Grid
 *
 * ┌──────────────────────────────────────────────┐
 * │ [002 — SERVICES]  Services I Offer           │
 * ├──────────────┬──────────────┬────────────────┤
 * │ Chatbot Dev  │ Website Dev  │ SEO            │
 * ├──────────────┼──────────────┼────────────────┤
 * │ Automation   │ Dashboards   │ E-commerce     │
 * ├──────────────┴──────────────┴────────────────┤
 * │ [Let's Discuss Your Project →]               │
 * └──────────────────────────────────────────────┘
 */
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar">
        <span className="grid-section-label">002 — Services</span>
        <div>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg text-sm">
            I help businesses grow with AI, websites, and automation.
          </p>
        </div>
      </div>

      {/* 3×2 Grid */}
      <div className="grid-section-inner grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.3 }}
            className="grid-cell flex flex-col h-full group"
          >
            <div className="w-10 h-10 rounded-lg icon-btn flex items-center justify-center mb-5 shrink-0">
              <service.icon size={20} className="text-accent" />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors duration-200">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
              {service.description}
            </p>

            <div className="space-y-2.5 mb-6">
              {service.points.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                  <span className="text-sm text-muted-foreground/90">{point}</span>
                </div>
              ))}
            </div>

            <div className="grid-divider-h mb-4" />

            <p className="text-[13px] font-medium text-accent italic">
              {service.outcome}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="grid-cell flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="skeuo-btn skeuo-btn-primary px-6 py-3 rounded-lg text-sm group flex items-center gap-2"
          >
            Let's Discuss Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
