"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ReactNode , useState } from "react";



interface StatisticCardProps {
  icon: ReactNode;
  number: number;
  suffix?: string;
  title: string;
  description?: string;
}

export default function StatisticCard({
  icon,
  number,
  suffix = "",
  title,
  description,
}: StatisticCardProps) {

    const [startCount, setStartCount] = useState(false);

  return (
    


    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStartCount(true)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-soft transition-all duration-300 hover:shadow-xl"
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
        {icon}
      </div>

      {/* Number */}
      <h3 className="text-4xl font-heading font-bold text-brand-navy">
        {startCount ? (
  <CountUp
    end={number}
    duration={2.5}
    decimals={number % 1 !== 0 ? 1 : 0}
  />
) : (
  0
)}
        {suffix}
      </h3>

      {/* Title */}
      <p className="mt-3 font-semibold text-brand-dark">
        {title}
      </p>

      {/* Optional Description */}
      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}
    </motion.div>
  );
}