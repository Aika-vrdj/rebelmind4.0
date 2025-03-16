"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface TypeHeaderProps {
  typeNumber: number;
  name: string;
  summary: string;
  color: string;
}

export default function TypeHeader({ typeNumber, name, summary, color }: TypeHeaderProps) {
  return (
    <>
      <Link 
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Overview
      </Link>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`${color} rounded-lg p-8 mb-8`}
      >
        <h1 className="text-4xl font-bold mb-2">
          Type {typeNumber}: {name}
        </h1>
        <p className="text-xl opacity-90">{summary}</p>
      </motion.div>
    </>
  );
}
