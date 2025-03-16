"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { typeData } from "@/lib/typeData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=800&fit=crop&q=80"
              alt="Sacred geometry background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Enneagram Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover the ancient wisdom of the Enneagram, a powerful tool for
                personal growth and understanding. Explore all nine personality types
                and uncover insights about yourself and others.
              </p>
            </div>
          </div>
          <Link 
            to="/quiz"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Take the Enneagram Quiz
          </Link>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {Object.entries(typeData).map(([num, type]) => (
            <Link
              key={num}
              to={`/type/${num}`}
              className="block bg-card hover:bg-card/90 transition-colors rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2">
                Type {num}: {type.name}
              </h2>
              <p className="text-sm opacity-90">
                {type.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
