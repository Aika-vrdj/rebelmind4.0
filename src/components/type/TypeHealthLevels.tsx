"use client";

import { motion } from "framer-motion";

interface TypeHealthLevelsProps {
  healthLevels: {
    healthy: string[];
    average: string[];
    unhealthy: string[];
  };
}

export default function TypeHealthLevels({ healthLevels }: TypeHealthLevelsProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="bg-card rounded-lg p-6 col-span-2"
    >
      <h2 className="text-2xl font-semibold mb-4">Health Levels</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-accent">Healthy</h3>
          <ul className="list-disc list-inside space-y-2">
            {Array.isArray(healthLevels?.healthy) 
              ? healthLevels.healthy.map((level) => (
                  <li key={level ?? "unknown-level"}>{level ?? "Unknown Level"}</li>
                ))
              : <li>No healthy levels available</li>
            }
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Average</h3>
          <ul className="list-disc list-inside space-y-2">
            {healthLevels.average.map((level) => (
              <li key={level}>{level}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-destructive">Unhealthy</h3>
          <ul className="list-disc list-inside space-y-2">
            {healthLevels.unhealthy.map((level) => (
              <li key={level}>{level}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
