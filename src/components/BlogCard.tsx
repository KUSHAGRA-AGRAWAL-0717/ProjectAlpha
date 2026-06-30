import { forwardRef, type ForwardedRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import TiltCard from "./ui/TiltCard";

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
  guid?: string;
}

/**
 * BLOG CARD — Enhanced, Content-Focused
 *
 * Image → Title + Excerpt + Reading Time → Categories → Links
 * Inherits ProjectCard design language with reading time badge.
 */
function BlogCardInner(
  { post, index }: { post: BlogPost; index: number },
  ref: ForwardedRef<HTMLDivElement>,
) {
  // Format date to be more readable
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Strip HTML tags from description for a clean excerpt
  const cleanExcerpt = post.description.replace(/<[^>]*>?/gm, "");

  // Estimate reading time (avg 200 words per minute)
  const wordCount = cleanExcerpt.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="grid-cell-enhanced p-0 flex flex-col group"
    >
      <TiltCard intensity={5} scaleOnHover={1.01} className="flex flex-col h-full w-full">
        {/* ── Image viewport ── */}
        <div
          className="relative aspect-video overflow-hidden flex-shrink-0"
          style={{
            background: "hsl(var(--surface-0))",
          }}
        >
          <div className="relative w-full h-full">
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-1 to-background border-b border-border/50">
                <span className="text-6xl font-extrabold text-foreground/20 tracking-tighter mix-blend-overlay">
                  {post.title.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border badge-webapp">
                Article
              </span>
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-2">
              {/* Reading time */}
              <span className="reading-time-badge">
                <Clock size={9} />
                {readingTime} min
              </span>
              {/* Date */}
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground"
                   style={{
                     background: "hsl(var(--surface-0))",
                     border: "1px solid hsl(var(--border))",
                   }}>
                <Calendar size={10} className="text-accent/60" />
                {formattedDate}
              </span>
            </div>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="flex flex-col flex-1">
          {/* Title + Excerpt */}
          <div className="p-4 pb-3">
            <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1.5 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
              {cleanExcerpt}
            </p>
          </div>

          <div className="grid-divider-h" />

          {/* Categories */}
          <div className="p-4 py-3 flex flex-wrap gap-1.5 flex-1">
            {post.categories && post.categories.length > 0 ? (
              post.categories.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md uppercase tag-float"
                  style={{
                    background: "hsl(var(--surface-0))",
                    border: "1px solid hsl(var(--border))",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {c}
                </span>
              ))
            ) : (
              <span className="text-[11px] text-muted-foreground">General</span>
            )}
            {post.categories && post.categories.length > 4 && (
              <span
                className="px-2.5 py-1 text-[11px] font-medium rounded-md"
                style={{
                  background: "hsl(var(--surface-0))",
                  border: "1px solid hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                +{post.categories.length - 4}
              </span>
            )}
          </div>

          <div className="grid-divider-h" />

          {/* Action links */}
          <div className="flex gap-0">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
            >
              <ExternalLink size={13} />
              Read on Medium
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default forwardRef(BlogCardInner);
