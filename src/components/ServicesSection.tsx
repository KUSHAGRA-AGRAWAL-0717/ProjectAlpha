import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, LineChart, Workflow, LayoutDashboard, ShoppingCart, ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

const SERVICES = [
  {
    title: "AI Chatbot Development",
    icon: MessageSquare,
    description: "Custom AI chatbots for websites to answer questions, capture leads, and improve customer support.",
    points: [
      "Website chat integration",
      "Lead capture workflows",
      "FAQ and customer query automation"
    ],
    outcome: "Best for businesses that want 24/7 automated customer support."
  },
  {
    title: "Website Development & Redesign",
    icon: LayoutTemplate,
    description: "Fast, modern, conversion-focused websites for businesses, startups, and personal brands.",
    points: [
      "Responsive design",
      "Landing pages or full websites",
      "Performance and UI improvements"
    ],
    outcome: "Best for businesses that want a high-converting digital presence."
  },
  {
    title: "SEO & Website Optimization",
    icon: LineChart,
    description: "Improve visibility, site structure, and on-page performance so businesses can get more organic traffic.",
    points: [
      "On-page SEO improvements",
      "Technical performance optimization",
      "Content and structure recommendations"
    ],
    outcome: "Best for businesses that want more leads from search engines."
  },
  {
    title: "Business Automation",
    icon: Workflow,
    description: "Automate repetitive business tasks to save time and reduce manual work.",
    points: [
      "Lead handling workflows",
      "Email and follow-up automation",
      "Internal business process automation"
    ],
    outcome: "Best for businesses that want to scale operations efficiently."
  },
  {
    title: "Analytics Dashboards",
    icon: LayoutDashboard,
    description: "Build dashboards and reporting systems so clients can track leads, traffic, sales, or operations clearly.",
    points: [
      "KPI dashboard setup",
      "Data visualization",
      "Reporting interface development"
    ],
    outcome: "Best for businesses that want data-driven decision making."
  },
  {
    title: "E-commerce / Business Platforms",
    icon: ShoppingCart,
    description: "Build or improve platforms for selling products, managing users, or handling online business operations.",
    points: [
      "Storefront or admin panel development",
      "Payment and workflow integration",
      "Custom business features"
    ],
    outcome: "Best for businesses that want a robust online operational platform."
  }
];

export default function ServicesSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const displayedServices = SERVICES.slice(0, visibleCount);

  return (
    <section id="services" className="relative py-16 px-4 sm:px-6 scroll-mt-20">
      {/* Blueprint grid background — architect's drafting table */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-60" />
      {/* Precision-machined groove divider at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl">
        <SectionDivider variant="channel" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            <LayoutTemplate size={13} />
            What I Do
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-3 tracking-tight">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-sm">
            I help businesses grow with AI, websites, and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-hover skeuo-3d-platform rounded-xl p-6 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-lg icon-btn flex items-center justify-center mb-5 shrink-0">
                <service.icon size={20} className="text-accent" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
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
              
              <div className="pt-4 border-t border-border/40 mt-auto">
                <p className="text-[13px] font-medium text-accent italic">
                  {service.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {SERVICES.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <button
              onClick={() => setVisibleCount(visibleCount >= SERVICES.length ? 3 : SERVICES.length)}
              className="btn-ghost px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-secondary"
            >
              {visibleCount >= SERVICES.length ? "Show Less" : "Load More"}
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="btn-primary px-6 py-3 rounded-lg text-sm group"
          >
            Let's Discuss Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
