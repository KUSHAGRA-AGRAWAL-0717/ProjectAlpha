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
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const cleanExcerpt = post.description.replace(/<[^>]*>?/gm, "");
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
      <TiltCard intensity={3} scaleOnHover={1.01} className="flex flex-col h-full w-full">
        <div className="flex flex-col flex-1 p-4 pb-3">
          {/* Header Metadata */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border badge-webapp">
              Article
            </span>
            <div className="flex items-center gap-2">
              <span className="reading-time-badge">
                <Clock size={9} />
                {readingTime} min
              </span>
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

          {/* Title + Excerpt */}
          <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1.5 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-2 flex-1">
            {cleanExcerpt}
          </p>
        </div>

        <div className="grid-divider-h" />

        {/* Categories */}
        <div className="p-4 py-2.5 flex flex-wrap content-start items-start gap-1.5">
          {post.categories && post.categories.length > 0 ? (
            post.categories.slice(0, 4).map((c) => (
              <span
                key={c}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md uppercase tag-float"
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
            <span className="text-[10px] text-muted-foreground">General</span>
          )}
          {post.categories && post.categories.length > 4 && (
            <span
              className="px-2 py-0.5 text-[10px] font-medium rounded-md"
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
            className="flex-1 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 text-accent hover:text-foreground transition-colors"
          >
            <ExternalLink size={13} />
            Read on Medium
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default forwardRef(BlogCardInner);
