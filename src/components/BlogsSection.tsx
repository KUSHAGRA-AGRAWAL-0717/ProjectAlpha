import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronRight, AlertCircle } from "lucide-react";
import BlogCard, { type BlogPost } from "./BlogCard";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Skeleton } from "./ui/skeleton";

const MEDIUM_API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2F%40kushagraagrawal.9672%2Ffeed";
const MEDIUM_PROFILE_URL = "https://medium.com/@kushagraagrawal.9672";

export default function BlogsSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch(MEDIUM_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok" && data.items) {
          // Add a simple deduplication or validation if needed
          setPosts(data.items);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching Medium articles:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const displayedPosts = posts.slice(0, visibleCount);

  return (
    <section id="blogs" className="scroll-mt-20">
      {/* Header bar */}
      <div className="grid-header-bar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <span className="section-eyebrow">Articles, Learnings & Insights</span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-2 tracking-tight section-title-underline">
            Latest <span className="gradient-text-animated">Blogs</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-xl text-sm mt-3">
            A collection of articles covering software engineering, AI, startups, system design, interview preparation, and lessons learned while building products.
          </p>
        </div>
      </div>

      <div className="grid-section-inner grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          // Loading Skeletons
          Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="grid-cell p-0 flex flex-col group h-full w-full">
              <div className="flex flex-col h-full w-full bg-card rounded-xl border border-border/50 overflow-hidden">
                <div className="flex flex-col flex-1 p-4 pb-3 gap-3">
                  <div className="flex justify-between items-center mb-1">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <div className="grid-divider-h" />
                <div className="p-4 py-3 flex gap-2">
                  <Skeleton className="h-5 w-16 rounded" />
                  <Skeleton className="h-5 w-20 rounded" />
                </div>
                <div className="grid-divider-h" />
                <div className="p-3 flex justify-center">
                   <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          ))
        ) : error ? (
          // Error State
          <div className="col-span-1 sm:col-span-2 md:col-span-3 grid-cell py-8">
            <Alert variant="default" className="max-w-xl mx-auto border-border/50 bg-surface-0">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="text-foreground">Unable to load articles</AlertTitle>
              <AlertDescription className="text-muted-foreground mt-2">
                We couldn't fetch the latest articles from Medium at this time.
                <div className="mt-4">
                  <a
                    href={MEDIUM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skeuo-btn skeuo-btn-secondary px-4 py-2 text-xs gap-1.5 inline-flex items-center"
                  >
                    Visit My Medium
                    <ChevronRight size={13} />
                  </a>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          // Loaded Posts
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, idx) => (
              <BlogCard key={post.guid || post.link} post={post} index={idx} />
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Load More / Medium Profile Link row */}
      {!loading && !error && (
        <div className="grid-cell flex flex-col sm:flex-row items-center justify-center gap-6 py-6">
          {posts.length > 3 && (
            <button
              onClick={() => setVisibleCount(visibleCount >= posts.length ? 3 : posts.length)}
              className="skeuo-btn skeuo-btn-secondary px-6 py-2.5 text-sm font-semibold"
            >
              {visibleCount >= posts.length ? "Show Less" : "Load More"}
            </button>
          )}
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors link-underline"
          >
            Read all articles on Medium
            <ChevronRight size={15} />
          </a>
        </div>
      )}
    </section>
  );
}
