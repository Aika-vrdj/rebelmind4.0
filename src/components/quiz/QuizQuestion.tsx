"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

interface QuizQuestionProps {
  question: {
    text: string;
    answers: {
      text: string;
      scores: { [key: number]: number };
    }[];
  };
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}

export default function QuizQuestion({ question, selectedAnswer, onAnswer }: QuizQuestionProps) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>

      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
              selectedAnswer === index
                ? "bg-accent text-accent-foreground"
                : "bg-card hover:bg-card/90 border border-accent/20"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
