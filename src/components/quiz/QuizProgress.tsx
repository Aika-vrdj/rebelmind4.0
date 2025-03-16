"use client";

import { motion } from "framer-motion";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="mb-8">
      <div className="h-2 w-full bg-secondary rounded-full">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Question {current + 1} of {total}
      </p>
    </div>
  );
}
