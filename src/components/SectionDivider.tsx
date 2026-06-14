import React from "react";

type DividerVariant = "default" | "bolted" | "stitched" | "ridge" | "channel" | "plate";

interface SectionDividerProps {
  variant?: DividerVariant;
  className?: string;
}

export default function SectionDivider({ variant = "default", className = "" }: SectionDividerProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "bolted":
        return "skeuo-divider-bolted";
      case "stitched":
        return "skeuo-divider-stitched";
      case "ridge":
        return "skeuo-divider-ridge";
      case "channel":
        return "skeuo-divider-channel";
      case "plate":
        return "skeuo-divider-plate";
      case "default":
      default:
        return "skeuo-divider";
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <hr className={`${getVariantClass()} w-full m-0`} />
    </div>
  );
}
