"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";
import Button from "../ui/Button";

interface QuizResultsProps {
  topTypes: [number, number][];
  onReset: () => void;
}

export default function QuizResults({ topTypes, onReset }: QuizResultsProps) {
  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Your Enneagram Results</h2>
      
      <div className="space-y-6">
        {topTypes.map(([type, score], index) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`p-6 rounded-lg border ${
              index === 0 
                ? "bg-accent text-accent-foreground border-accent" 
                : "bg-card border-accent/20 hover:bg-card/90"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              {index === 0 ? "Primary Type" : `Match ${index + 1}`}
            </h3>
            <p className="text-2xl font-bold mb-4">Type {type ?? "Unknown"}</p>
            {index === 0 && (
              <Link
                href={`/type/${type}`}
                className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Learn More About Type {type}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <Button onClick={onReset} variant="secondary">
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake Quiz
        </Button>
        <Link href="/">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
