"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  className?: string;
}

export default function GalleryCard({
  image,
  title,
  className = "",
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-90" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-heading font-semibold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}