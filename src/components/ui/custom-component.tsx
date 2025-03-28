import React from "react";
import { cn } from "../../lib/utils";

interface CustomComponentProps {
  className?: string;
  variant?: "primary" | "secondary";
  // other props
}

export function CustomComponent({
  className,
  variant = "primary",
  ...props
}: CustomComponentProps) {
  return (
    <div
      className={cn(
        "base-styles-with-tailwind",
        variant === "primary" && "primary-specific-tailwind-classes",
        variant === "secondary" && "secondary-specific-tailwind-classes",
        className
      )}
      {...props}
    />
  );
}
