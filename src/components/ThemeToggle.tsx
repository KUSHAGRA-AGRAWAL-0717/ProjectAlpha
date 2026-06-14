import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * SKEUOMORPHIC THEME TOGGLE
 *
 * Physical Inspiration: Premium rotary power switch / desk lamp toggle.
 * A solid mechanical button with realistic depth and press feedback.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center group"
      aria-label="Toggle theme"
      style={{
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: `linear-gradient(
          180deg,
          hsl(var(--surface-3)) 0%,
          hsl(var(--surface-1)) 100%
        )`,
        border: "1px solid hsl(var(--border))",
        boxShadow: `
          inset 0 1px 0 0 var(--bevel-light),
          inset 0 -1px 0 0 var(--bevel-dark),
          2px 3px 8px -2px hsla(var(--shadow-color), 0.5),
          4px 6px 16px -4px hsla(var(--shadow-color), 0.3)
        `,
        transition: "all 0.15s ease",
      }}
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          style={{
            color: "hsl(var(--muted-foreground))",
            transition: "color 0.15s ease",
          }}
          className="group-hover:text-amber-400"
        />
      ) : (
        <Moon
          size={20}
          style={{
            color: "hsl(var(--muted-foreground))",
            transition: "color 0.15s ease",
          }}
          className="group-hover:text-blue-400"
        />
      )}
    </button>
  );
}
