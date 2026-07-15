"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded text-sm font-semibold transition-colors duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-hover shadow-md",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-light",
    ghost: "text-brand-blue hover:bg-brand-light/50",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}