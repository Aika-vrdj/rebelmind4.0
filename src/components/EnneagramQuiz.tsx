"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import QuizProgress from "./quiz/QuizProgress";
import QuizQuestion from "./quiz/QuizQuestion";
import QuizResults from "./quiz/QuizResults";
import Button from "./ui/Button";

interface Question {
  id: number;
  text: string;
  answers: {
    text: string;
    scores: { [key: number]: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a challenging situation, I typically:",
    answers: [
      {
        text: "Strive for perfection and order",
        scores: { 1: 5, 3: 2, 5: 1 }
      },
      {
        text: "Focus on helping others involved",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Take charge and make things happen",
        scores: { 8: 5, 3: 2, 7: 1 }
      },
      {
        text: "Analyze the situation thoroughly",
        scores: { 5: 5, 1: 2, 6: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "I find the most satisfaction in:",
    answers: [
      {
        text: "Achieving my goals and being recognized",
        scores: { 3: 5, 8: 2, 1: 1 }
      },
      {
        text: "Understanding complex ideas and concepts",
        scores: { 5: 5, 1: 2, 4: 1 }
      },
      {
        text: "Creating harmony in my environment",
        scores: { 9: 5, 2: 2, 6: 1 }
      },
      {
        text: "Expressing my unique perspective",
        scores: { 4: 5, 7: 2, 3: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "My biggest fear is:",
    answers: [
      {
        text: "Being wrong or corrupt",
        scores: { 1: 5, 6: 2, 5: 1 }
      },
      {
        text: "Being unloved or unwanted",
        scores: { 2: 5, 4: 2, 9: 1 }
      },
      {
        text: "Being worthless or failing",
        scores: { 3: 5, 1: 2, 8: 1 }
      },
      {
        text: "Being vulnerable or controlled",
        scores: { 8: 5, 6: 2, 5: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "In group situations, I tend to:",
    answers: [
      {
        text: "Take the lead and organize others",
        scores: { 8: 5, 3: 2, 1: 1 }
      },
      {
        text: "Support and encourage others",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Observe and analyze the dynamics",
        scores: { 5: 5, 4: 2, 1: 1 }
      },
      {
        text: "Keep things fun and entertaining",
        scores: { 7: 5, 2: 2, 3: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "When making decisions, I primarily consider:",
    answers: [
      {
        text: "What's right and ethical",
        scores: { 1: 5, 6: 2, 8: 1 }
      },
      {
        text: "How it affects others",
        scores: { 2: 5, 9: 2, 4: 1 }
      },
      {
        text: "What's most efficient and successful",
        scores: { 3: 5, 1: 2, 8: 1 }
      },
      {
        text: "What feels authentic to me",
        scores: { 4: 5, 7: 2, 2: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "Under stress, I tend to:",
    answers: [
      {
        text: "Become more critical and judgmental",
        scores: { 1: 5, 8: 2, 3: 1 }
      },
      {
        text: "Withdraw and need space",
        scores: { 5: 5, 4: 2, 9: 1 }
      },
      {
        text: "Seek support and reassurance",
        scores: { 6: 5, 2: 2, 4: 1 }
      },
      {
        text: "Become more impulsive and scattered",
        scores: { 7: 5, 3: 2, 8: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "My core motivation is:",
    answers: [
      {
        text: "To be good and right",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "To be loved and needed",
        scores: { 2: 5, 4: 2, 9: 1 }
      },
      {
        text: "To be successful and admired",
        scores: { 3: 5, 7: 2, 8: 1 }
      },
      {
        text: "To be unique and authentic",
        scores: { 4: 5, 7: 2, 1: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "I feel most comfortable when:",
    answers: [
      {
        text: "Everything is organized and in order",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "I'm helping others",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "I'm learning and understanding",
        scores: { 5: 5, 1: 2, 4: 1 }
      },
      {
        text: "I'm in control of my environment",
        scores: { 8: 5, 3: 2, 1: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "Others might describe me as:",
    answers: [
      {
        text: "Responsible and principled",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "Caring and supportive",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Confident and ambitious",
        scores: { 3: 5, 8: 2, 7: 1 }
      },
      {
        text: "Creative and sensitive",
        scores: { 4: 5, 9: 2, 5: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "I value most highly:",
    answers: [
      {
        text: "Truth and justice",
        scores: { 1: 5, 5: 2, 8: 1 }
      },
      {
        text: "Love and connection",
        scores: { 2: 5, 4: 2, 9: 1 }
      },
      {
        text: "Success and efficiency",
        scores: { 3: 5, 8: 2, 1: 1 }
      },
      {
        text: "Peace and harmony",
        scores: { 9: 5, 2: 2, 7: 1 }
      }
    ]
  },
  {
    id: 11,
    text: "When conflicts arise, I typically:",
    answers: [
      {
        text: "Try to find the right solution",
        scores: { 1: 5, 5: 2, 6: 1 }
      },
      {
        text: "Seek to maintain harmony",
        scores: { 9: 5, 2: 2, 7: 1 }
      },
      {
        text: "Stand my ground firmly",
        scores: { 8: 5, 3: 2, 1: 1 }
      },
      {
        text: "Process my emotions deeply",
        scores: { 4: 5, 2: 2, 5: 1 }
      }
    ]
  },
  {
    id: 12,
    text: "I often find myself:",
    answers: [
      {
        text: "Seeking new experiences and possibilities",
        scores: { 7: 5, 3: 2, 4: 1 }
      },
      {
        text: "Analyzing and gathering information",
        scores: { 5: 5, 1: 2, 6: 1 }
      },
      {
        text: "Taking care of others' needs",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Working to improve things",
        scores: { 1: 5, 3: 2, 8: 1 }
      }
    ]
  },
  {
    id: 13,
    text: "My biggest strength is:",
    answers: [
      {
        text: "My integrity and discipline",
        scores: { 1: 5, 6: 2, 8: 1 }
      },
      {
        text: "My empathy and generosity",
        scores: { 2: 5, 9: 2, 4: 1 }
      },
      {
        text: "My wisdom and objectivity",
        scores: { 5: 5, 1: 2, 9: 1 }
      },
      {
        text: "My creativity and authenticity",
        scores: { 4: 5, 7: 2, 2: 1 }
      }
    ]
  },
  {
    id: 14,
    text: "I feel most threatened when:",
    answers: [
      {
        text: "My competence is questioned",
        scores: { 3: 5, 1: 2, 5: 1 }
      },
      {
        text: "My autonomy is challenged",
        scores: { 8: 5, 4: 2, 5: 1 }
      },
      {
        text: "My security is at risk",
        scores: { 6: 5, 9: 2, 1: 1 }
      },
      {
        text: "My uniqueness is dismissed",
        scores: { 4: 5, 2: 2, 7: 1 }
      }
    ]
  },
  {
    id: 15,
    text: "In relationships, I tend to be:",
    answers: [
      {
        text: "Supportive and nurturing",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Independent and strong",
        scores: { 8: 5, 5: 2, 3: 1 }
      },
      {
        text: "Romantic and idealistic",
        scores: { 4: 5, 2: 2, 7: 1 }
      },
      {
        text: "Loyal and dedicated",
        scores: { 6: 5, 1: 2, 2: 1 }
      }
    ]
  },
  {
    id: 16,
    text: "I'm most productive when:",
    answers: [
      {
        text: "I have clear guidelines",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "I'm inspired by possibilities",
        scores: { 7: 5, 4: 2, 3: 1 }
      },
      {
        text: "I'm in a peaceful environment",
        scores: { 9: 5, 5: 2, 4: 1 }
      },
      {
        text: "I'm working towards success",
        scores: { 3: 5, 1: 2, 8: 1 }
      }
    ]
  },
  {
    id: 17,
    text: "My approach to life is:",
    answers: [
      {
        text: "Systematic and organized",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "Spontaneous and optimistic",
        scores: { 7: 5, 2: 2, 9: 1 }
      },
      {
        text: "Cautious and prepared",
        scores: { 6: 5, 5: 2, 1: 1 }
      },
      {
        text: "Independent and direct",
        scores: { 8: 5, 3: 2, 5: 1 }
      }
    ]
  },
  {
    id: 18,
    text: "I often worry about:",
    answers: [
      {
        text: "Making mistakes",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "Being rejected",
        scores: { 2: 5, 4: 2, 6: 1 }
      },
      {
        text: "Missing out on experiences",
        scores: { 7: 5, 3: 2, 4: 1 }
      },
      {
        text: "Being controlled or violated",
        scores: { 8: 5, 6: 2, 4: 1 }
      }
    ]
  },
  {
    id: 19,
    text: "I gain energy from:",
    answers: [
      {
        text: "Accomplishing tasks",
        scores: { 3: 5, 1: 2, 8: 1 }
      },
      {
        text: "Connecting with others",
        scores: { 2: 5, 7: 2, 9: 1 }
      },
      {
        text: "Exploring ideas",
        scores: { 5: 5, 4: 2, 1: 1 }
      },
      {
        text: "Creating harmony",
        scores: { 9: 5, 2: 2, 4: 1 }
      }
    ]
  },
  {
    id: 20,
    text: "My leadership style is:",
    answers: [
      {
        text: "Authoritative and direct",
        scores: { 8: 5, 3: 2, 1: 1 }
      },
      {
        text: "Democratic and supportive",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Visionary and inspiring",
        scores: { 3: 5, 7: 2, 4: 1 }
      },
      {
        text: "Analytical and strategic",
        scores: { 5: 5, 1: 2, 6: 1 }
      }
    ]
  },
  {
    id: 21,
    text: "When things go wrong, I typically:",
    answers: [
      {
        text: "Analyze what could have been done better",
        scores: { 1: 5, 5: 2, 3: 1 }
      },
      {
        text: "Focus on staying positive",
        scores: { 7: 5, 9: 2, 2: 1 }
      },
      {
        text: "Take immediate action to fix it",
        scores: { 8: 5, 3: 2, 1: 1 }
      },
      {
        text: "Seek support from others",
        scores: { 6: 5, 2: 2, 9: 1 }
      }
    ]
  },
  {
    id: 22,
    text: "I feel most alive when:",
    answers: [
      {
        text: "Everything is in perfect order",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "I'm helping others succeed",
        scores: { 2: 5, 9: 2, 3: 1 }
      },
      {
        text: "I'm experiencing something new",
        scores: { 7: 5, 4: 2, 8: 1 }
      },
      {
        text: "I'm deeply understanding something",
        scores: { 5: 5, 1: 2, 4: 1 }
      }
    ]
  },
  {
    id: 23,
    text: "My biggest challenge is:",
    answers: [
      {
        text: "Accepting imperfection",
        scores: { 1: 5, 3: 2, 6: 1 }
      },
      {
        text: "Setting boundaries",
        scores: { 2: 5, 9: 2, 6: 1 }
      },
      {
        text: "Showing vulnerability",
        scores: { 8: 5, 3: 2, 5: 1 }
      },
      {
        text: "Staying grounded in reality",
        scores: { 4: 5, 7: 2, 9: 1 }
      }
    ]
  },
  {
    id: 24,
    text: "I primarily seek:",
    answers: [
      {
        text: "Knowledge and understanding",
        scores: { 5: 5, 1: 2, 6: 1 }
      },
      {
        text: "Peace and harmony",
        scores: { 9: 5, 2: 2, 7: 1 }
      },
      {
        text: "Success and achievement",
        scores: { 3: 5, 8: 2, 1: 1 }
      },
      {
        text: "Authenticity and meaning",
        scores: { 4: 5, 1: 2, 7: 1 }
      }
    ]
  },
  {
    id: 25,
    text: "In social situations, I tend to:",
    answers: [
      {
        text: "Observe from the sidelines",
        scores: { 5: 5, 4: 2, 9: 1 }
      },
      {
        text: "Take center stage",
        scores: { 3: 5, 7: 2, 8: 1 }
      },
      {
        text: "Connect one-on-one",
        scores: { 2: 5, 6: 2, 9: 1 }
      },
      {
        text: "Maintain group harmony",
        scores: { 9: 5, 2: 2, 6: 1 }
      }
    ]
  },
  {
    id: 26,
    text: "I'm most criticized for:",
    answers: [
      {
        text: "Being too perfectionistic",
        scores: { 1: 5, 3: 2, 6: 1 }
      },
      {
        text: "Being too emotional",
        scores: { 4: 5, 2: 2, 6: 1 }
      },
      {
        text: "Being too detached",
        scores: { 5: 5, 9: 2, 3: 1 }
      },
      {
        text: "Being too controlling",
        scores: { 8: 5, 1: 2, 6: 1 }
      }
    ]
  },
  {
    id: 27,
    text: "My default response to stress is:",
    answers: [
      {
        text: "Become more organized and controlled",
        scores: { 1: 5, 6: 2, 3: 1 }
      },
      {
        text: "Seek distractions and pleasure",
        scores: { 7: 5, 9: 2, 3: 1 }
      },
      {
        text: "Withdraw and process alone",
        scores: { 4: 5, 5: 2, 9: 1 }
      },
      {
        text: "Take charge and act quickly",
        scores: { 8: 5, 3: 2, 6: 1 }
      }
    ]
  },
  {
    id: 28,
    text: "I feel most connected to others when:",
    answers: [
      {
        text: "We're working together on goals",
        scores: { 3: 5, 1: 2, 8: 1 }
      },
      {
        text: "We're sharing deep conversations",
        scores: { 4: 5, 5: 2, 9: 1 }
      },
      {
        text: "We're having fun experiences",
        scores: { 7: 5, 2: 2, 3: 1 }
      },
      {
        text: "We're supporting each other",
        scores: { 2: 5, 6: 2, 9: 1 }
      }
    ]
  },
  {
    id: 29,
    text: "My inner critic often says:",
    answers: [
      {
        text: "You're not good enough",
        scores: { 1: 5, 3: 2, 4: 1 }
      },
      {
        text: "You're not loved enough",
        scores: { 2: 5, 4: 2, 6: 1 }
      },
      {
        text: "You're not strong enough",
        scores: { 8: 5, 6: 2, 3: 1 }
      },
      {
        text: "You're not smart enough",
        scores: { 5: 5, 1: 2, 3: 1 }
      }
    ]
  },
  {
    id: 30,
    text: "My life's purpose feels most aligned with:",
    answers: [
      {
        text: "Making the world a better place",
        scores: { 1: 5, 2: 2, 8: 1 }
      },
      {
        text: "Understanding life's mysteries",
        scores: { 5: 5, 4: 2, 9: 1 }
      },
      {
        text: "Achieving greatness",
        scores: { 3: 5, 8: 2, 7: 1 }
      },
      {
        text: "Creating beauty and meaning",
        scores: { 4: 5, 2: 2, 7: 1 }
      }
    ]
  }
];

export default function EnneagramQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key: number]: number }>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [topTypes, setTopTypes] = useState<[number, number][]>([]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const answer = questions[currentQuestion].answers[selectedAnswer];
    const newScores = { ...scores };
    
    Object.entries(answer.scores).forEach(([type, score]) => {
      const typeNum = parseInt(type);
      if (!isNaN(typeNum)) {
        newScores[typeNum] = (newScores[typeNum] ?? 0) + (score ?? 0);
      }
    });

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      const sortedTypes = Object.entries(newScores)
        .map(([type, score]) => [parseInt(type), score] as [number, number])
        .sort((a, b) => b[1] - a[1]);
      setTopTypes(sortedTypes.slice(0, 3));
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
    });
    setSelectedAnswer(null);
    setShowResults(false);
    setTopTypes([]);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                      selectedAnswer === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-card hover:bg-secondary"
                    }`}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className={`mt-8 px-6 py-3 rounded-lg flex items-center ${
                  selectedAnswer === null
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-accent"
                }`}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        ) : (
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
                  className={`p-6 rounded-lg ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-card"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {index === 0 ? "Primary Type" : `Match ${index + 1}`}
                  </h3>
                  <p className="text-2xl font-bold mb-4">Type {type}</p>
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
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Quiz
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-card text-foreground rounded-lg hover:bg-secondary transition-colors inline-flex items-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
