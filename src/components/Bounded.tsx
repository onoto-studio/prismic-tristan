import type { ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: "div" | "section" | "header";
  yPadding?: "sm" | "base" | "lg";
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
  "px-4", // Marge horizontale plus petite
  yPadding === "sm" && "py-4 md:py-6", // Marge verticale petite pour 'sm'
  yPadding === "base" && "py-6 md:py-8", // Marge verticale encore plus petite pour 'base'
  yPadding === "lg" && "py-8 md:py-12", // Marge verticale encore plus petite pour 'lg'
  className,
)}
      
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
