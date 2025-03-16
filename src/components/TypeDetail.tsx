import { useParams } from 'react-router-dom'

import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Link from "next/link";
import Tooltip from "@/components/ui/Tooltip";
import { TypeData, WingData } from "@/lib/typeData";

interface TypeDetailProps {
  typeNumber: number;
  isWing?: boolean;
  wingKey?: string;
}


const typeData: Record<number, TypeData> = {
  1: {
    name: "The Reformer",
    summary: "Ethical, dedicated and self-controlled, seeking to improve themselves and their world.",
    traits: ["Principled", "Purposeful", "Self-Controlled", "Perfectionistic"],
    wings: {
      "1w9": {
        name: "The Idealist",
        traits: ["More introverted", "Calmer", "Less confrontational", "More philosophical"],
        description: "Combines One's perfectionism with Nine's desire for peace and harmony."
      },
      "1w2": {
        name: "The Advocate",
        traits: ["More extroverted", "People-oriented", "More emotional", "Service-focused"],
        description: "Combines One's idealism with Two's desire to help others."
      }
    },
    integration: "Moves to Type 7 in growth",
    disintegration: "Moves to Type 4 in stress",
    healthLevels: {
      healthy: [
        "Becomes accepting and patient with self and others",
        "Develops wisdom about human nature",
        "Strives for personal growth and improvement"
      ],
      average: [
        "Focuses on maintaining high standards",
        "Becomes critical of self and others",
        "Struggles with perfectionism"
      ],
      unhealthy: [
        "Becomes obsessed with imperfection",
        "Develops rigid, judgmental attitudes",
        "Experiences intense self-criticism"
      ]
    },
    strengths: ["Honest", "Responsible", "Improvement-oriented", "Ethical"],
    challenges: ["Criticality", "Rigidity", "Impatience", "Self-criticism"],
    examples: ["Nelson Mandela", "Michelle Obama", "Mahatma Gandhi"],
    subtypes: {
      selfPreservation: "Focused on personal security and maintaining order in their environment",
      sexual: "Intense about personal relationships and maintaining high standards in partnerships",
      social: "Dedicated to improving social systems and institutions"
    },
    coreBelief: "The world is imperfect and needs to be improved",
    commonLie: "I must be perfect to be worthy of love",
    color: "bg-primary"
  },
  2: {
    name: "The Helper",
    summary: "Empathetic, sincere and warm-hearted, they are motivated by a need to be loved and needed.",
    traits: ["Caring", "Generous", "Empathetic", "People-Pleasing"],
    wings: {
      "2w1": {
        name: "The Servant",
        traits: ["More organized", "Principled", "Dutiful", "Service-oriented"],
        description: "Combines Two's caring nature with One's sense of duty and ethics."
      },
      "2w3": {
        name: "The Host/Hostess",
        traits: ["More outgoing", "Image-conscious", "Ambitious", "Charming"],
        description: "Combines Two's helpfulness with Three's charm and social adaptability."
      }
    },
    integration: "Moves to Type 4 in growth",
    disintegration: "Moves to Type 8 in stress",
    healthLevels: {
      healthy: [
        "Becomes genuinely caring and altruistic",
        "Develops emotional intelligence and boundaries",
        "Shows unconditional love without expecting return"
      ],
      average: [
        "Needs to be needed by others",
        "Struggles with setting boundaries",
        "Represses own needs and feelings"
      ],
      unhealthy: [
        "Becomes manipulative and controlling",
        "Develops martyr-like behavior",
        "Shows extreme neediness and dependency"
      ]
    },
    strengths: ["Empathy", "Generosity", "Emotional Intelligence", "Nurturing"],
    challenges: ["Dependency", "People-pleasing", "Boundary issues", "Pride"],
    examples: ["Mother Teresa", "Desmond Tutu", "Princess Diana"],
    subtypes: {
      selfPreservation: "Focused on meeting their own needs through helping others",
      sexual: "Intense in relationships, seeking intimate connections through giving",
      social: "Creates networks of support and friendship through service"
    },
    coreBelief: "I must help others to be worthy of love",
    commonLie: "I must earn love through giving and helping",
    color: "bg-[#991B1B]"
  },
  3: {
    name: "The Achiever",
    summary: "Ambitious, adaptable and success-oriented, driven by a need to be admired and to achieve success.",
    traits: ["Ambitious", "Efficient", "Image-conscious", "Adaptable"],
    wings: {
      "3w2": {
        name: "The Charmer",
        traits: ["More people-oriented", "Helpful", "Diplomatic", "Engaging"],
        description: "Combines Three's ambition with Two's desire to be liked and helpful."
      },
      "3w4": {
        name: "The Professional",
        traits: ["More introspective", "Creative", "Distinguished", "Refined"],
        description: "Combines Three's drive for success with Four's creativity and authenticity."
      }
    },
    integration: "Moves to Type 6 in growth",
    disintegration: "Moves to Type 9 in stress",
    healthLevels: {
      healthy: [
        "Becomes self-accepting and authentic",
        "Uses talents to contribute meaningfully",
        "Inspires and motivates others genuinely"
      ],
      average: [
        "Focuses intensely on achievement",
        "Becomes competitive and image-conscious",
        "Struggles with authenticity"
      ],
      unhealthy: [
        "Becomes deceptive and manipulative",
        "Develops narcissistic tendencies",
        "Experiences deep feelings of emptiness"
      ]
    },
    strengths: ["Drive", "Efficiency", "Adaptability", "Leadership"],
    challenges: ["Workaholism", "Image-focus", "Authenticity issues", "Validation-seeking"],
    examples: ["Tony Robbins", "Taylor Swift", "Tom Cruise"],
    subtypes: {
      selfPreservation: "Focused on security through personal achievement and material success",
      sexual: "Seeks to be the best and most attractive in relationships",
      social: "Strives for status and recognition in groups"
    },
    coreBelief: "I must succeed and appear successful to be worthy",
    commonLie: "My value depends on my achievements and image",
    color: "bg-[#854D0E]"
  },
  4: {
    name: "The Individualist",
    summary: "Creative, sensitive, and expressive, driven by a need to be unique and find meaning in life.",
    traits: ["Authentic", "Creative", "Sensitive", "Expressive"],
    wings: {
      "4w3": {
        name: "The Aristocrat",
        traits: ["More ambitious", "Image-conscious", "Success-oriented", "Competitive"],
        description: "Combines Four's creativity with Three's drive for achievement and recognition."
      },
      "4w5": {
        name: "The Bohemian",
        traits: ["More introspective", "Intellectual", "Reserved", "Philosophical"],
        description: "Combines Four's emotional depth with Five's analytical nature and wisdom."
      }
    },
    integration: "Moves to Type 1 in growth",
    disintegration: "Moves to Type 2 in stress",
    healthLevels: {
      healthy: [
        "Becomes inspired and creative",
        "Transforms personal experiences into universal art",
        "Develops emotional depth and authenticity"
      ],
      average: [
        "Focuses on what's missing or unavailable",
        "Becomes melancholic and self-conscious",
        "Struggles with envy and comparison"
      ],
      unhealthy: [
        "Becomes self-destructive",
        "Develops chronic depression",
        "Experiences extreme alienation"
      ]
    },
    strengths: ["Creativity", "Empathy", "Authenticity", "Emotional depth"],
    challenges: ["Melancholy", "Self-absorption", "Envy", "Mood fluctuations"],
    examples: ["Vincent van Gogh", "Virginia Woolf", "Johnny Depp"],
    subtypes: {
      selfPreservation: "Focused on enduring suffering and finding personal meaning through hardship",
      sexual: "Seeks intense, passionate connections and dramatic emotional experiences",
      social: "Expresses uniqueness through cultural or artistic contributions"
    },
    coreBelief: "I must be unique and special to be worthy",
    commonLie: "Something essential is missing in my life",
    color: "bg-[#064E3B]"
  },
  5: {
    name: "The Investigator",
    summary: "Perceptive, innovative, and private, driven by a need to understand and master the world around them.",
    traits: ["Analytical", "Perceptive", "Private", "Innovative"],
    wings: {
      "5w4": {
        name: "The Iconoclast",
        traits: ["More creative", "Emotionally aware", "Artistic", "Unconventional"],
        description: "Combines Five's intellect with Four's creativity and emotional depth."
      },
      "5w6": {
        name: "The Problem Solver",
        traits: ["More practical", "Security-oriented", "Systematic", "Loyal"],
        description: "Combines Five's knowledge-seeking with Six's need for security and structure."
      }
    },
    integration: "Moves to Type 8 in growth",
    disintegration: "Moves to Type 7 in stress",
    healthLevels: {
      healthy: [
        "Becomes visionary and pioneering",
        "Uses knowledge to benefit others",
        "Develops groundbreaking insights"
      ],
      average: [
        "Focuses on accumulating knowledge",
        "Becomes detached and isolated",
        "Struggles with practical matters"
      ],
      unhealthy: [
        "Becomes extremely withdrawn",
        "Develops paranoid tendencies",
        "Experiences severe isolation"
      ]
    },
    strengths: ["Intelligence", "Objectivity", "Innovation", "Expertise"],
    challenges: ["Isolation", "Detachment", "Hoarding", "Overthinking"],
    examples: ["Albert Einstein", "Stephen Hawking", "Bill Gates"],
    subtypes: {
      selfPreservation: "Focused on maintaining physical security and minimizing needs",
      sexual: "Seeks intense intellectual connections and sharing of knowledge",
      social: "Uses expertise to find a role in society"
    },
    coreBelief: "I must be knowledgeable to be worthy",
    commonLie: "I need to withdraw to be safe",
    color: "bg-[#581C87]"
  },
  6: {
    name: "The Loyalist",
    summary: "Committed, security-oriented, and engaging, driven by the need for security and support.",
    traits: ["Loyal", "Responsible", "Security-focused", "Vigilant"],
    wings: {
      "6w5": {
        name: "The Defender",
        traits: ["More analytical", "Reserved", "Intellectual", "Systematic"],
        description: "Combines Six's loyalty with Five's analytical nature and objectivity."
      },
      "6w7": {
        name: "The Buddy",
        traits: ["More optimistic", "Sociable", "Adventurous", "Engaging"],
        description: "Combines Six's commitment with Seven's enthusiasm and positivity."
      }
    },
    integration: "Moves to Type 9 in growth",
    disintegration: "Moves to Type 3 in stress",
    healthLevels: {
      healthy: [
        "Becomes courageous and supportive",
        "Develops inner guidance and trust",
        "Creates stable and secure environments"
      ],
      average: [
        "Seeks security and reassurance",
        "Becomes anxious and doubtful",
        "Struggles with trust and authority"
      ],
      unhealthy: [
        "Becomes paranoid and reactive",
        "Develops extreme anxiety",
        "Experiences decision paralysis"
      ]
    },
    strengths: ["Loyalty", "Responsibility", "Problem-solving", "Perseverance"],
    challenges: ["Anxiety", "Doubt", "Over-thinking", "Reactivity"],
    examples: ["George H.W. Bush", "Robert De Niro", "Michelle Pfeiffer"],
    subtypes: {
      selfPreservation: "Focused on physical security and worst-case scenarios",
      sexual: "Seeks strong partnerships and protection through relationships",
      social: "Creates alliances and support systems for security"
    },
    coreBelief: "I must be prepared and secure to be worthy",
    commonLie: "The world is dangerous and I can't trust myself",
    color: "bg-[#7C2D12]"
  },
  7: {
    name: "The Enthusiast",
    summary: "Spontaneous, versatile, and adventurous, driven by a need to experience life's pleasures and avoid pain.",
    traits: ["Optimistic", "Adventurous", "Versatile", "Spontaneous"],
    wings: {
      "7w6": {
        name: "The Entertainer",
        traits: ["More responsible", "People-oriented", "Loyal", "Engaging"],
        description: "Combines Seven's enthusiasm with Six's commitment and connection to others."
      },
      "7w8": {
        name: "The Realist",
        traits: ["More assertive", "Goal-oriented", "Independent", "Practical"],
        description: "Combines Seven's versatility with Eight's strength and decisiveness."
      }
    },
    integration: "Moves to Type 5 in growth",
    disintegration: "Moves to Type 1 in stress",
    healthLevels: {
      healthy: [
        "Becomes focused and appreciative",
        "Channels energy into meaningful pursuits",
        "Finds joy in depth and commitment"
      ],
      average: [
        "Seeks constant stimulation",
        "Becomes scattered and impulsive",
        "Avoids emotional pain"
      ],
      unhealthy: [
        "Becomes extremely scattered",
        "Develops escapist tendencies",
        "Experiences manic behavior"
      ]
    },
    strengths: ["Optimism", "Versatility", "Enthusiasm", "Vision"],
    challenges: ["Impulsivity", "Commitment issues", "Escapism", "Superficiality"],
    examples: ["Robin Williams", "Leonardo DiCaprio", "Elton John"],
    subtypes: {
      selfPreservation: "Focused on maintaining comfort and avoiding limitation",
      sexual: "Seeks intense experiences and variety in relationships",
      social: "Creates excitement and possibilities in groups"
    },
    coreBelief: "I must be happy and free to be worthy",
    commonLie: "Pain and limitation must be avoided at all costs",
    color: "bg-[#831843]"
  },
  8: {
    name: "The Challenger",
    summary: "Powerful, dominating, and self-confident, driven by a need to be strong and avoid vulnerability.",
    traits: ["Strong-willed", "Decisive", "Protective", "Confrontational"],
    wings: {
      "8w7": {
        name: "The Maverick",
        traits: ["More adventurous", "Fun-loving", "Energetic", "Rebellious"],
        description: "Combines Eight's strength with Seven's enthusiasm and adventurousness."
      },
      "8w9": {
        name: "The Bear",
        traits: ["More diplomatic", "Calm", "Patient", "Reserved"],
        description: "Combines Eight's power with Nine's desire for peace and harmony."
      }
    },
    integration: "Moves to Type 2 in growth",
    disintegration: "Moves to Type 5 in stress",
    healthLevels: {
      healthy: [
        "Becomes heroic and magnanimous",
        "Uses power to protect and empower others",
        "Shows genuine vulnerability and tenderness"
      ],
      average: [
        "Focuses on control and dominance",
        "Becomes confrontational and intimidating",
        "Struggles with vulnerability"
      ],
      unhealthy: [
        "Becomes destructive and ruthless",
        "Develops megalomaniac tendencies",
        "Experiences intense rage"
      ]
    },
    strengths: ["Leadership", "Protection", "Decisiveness", "Justice"],
    challenges: ["Excess", "Domination", "Confrontation", "Vulnerability-avoidance"],
    examples: ["Martin Luther King Jr.", "Winston Churchill", "Muhammad Ali"],
    subtypes: {
      selfPreservation: "Focused on survival and material security through strength",
      sexual: "Seeks intense, passionate connections and possession in relationships",
      social: "Creates and maintains power structures and influence"
    },
    coreBelief: "I must be strong and in control to be worthy",
    commonLie: "Vulnerability is weakness",
    color: "bg-[#312E81]"
  },
  9: {
    name: "The Peacemaker",
    summary: "Accepting, trusting, and stable, driven by a need to maintain peace and avoid conflict.",
    traits: ["Patient", "Receptive", "Harmonious", "Agreeable"],
    wings: {
      "9w8": {
        name: "The Referee",
        traits: ["More assertive", "Independent", "Physical", "Grounded"],
        description: "Combines Nine's peace-seeking with Eight's strength and independence."
      },
      "9w1": {
        name: "The Dreamer",
        traits: ["More idealistic", "Principled", "Orderly", "Perfectionist"],
        description: "Combines Nine's acceptance with One's idealism and sense of purpose."
      }
    },
    integration: "Moves to Type 3 in growth",
    disintegration: "Moves to Type 6 in stress",
    healthLevels: {
      healthy: [
        "Becomes dynamic and engaged",
        "Takes decisive action",
        "Maintains true inner peace"
      ],
      average: [
        "Seeks comfort and routine",
        "Becomes passive and complacent",
        "Avoids conflict and tension"
      ],
      unhealthy: [
        "Becomes severely disengaged",
        "Develops stubborn resistance",
        "Experiences deep resignation"
      ]
    },
    strengths: ["Mediation", "Acceptance", "Stability", "Understanding"],
    challenges: ["Inertia", "Conflict-avoidance", "Self-forgetting", "Stubbornness"],
    examples: ["Carl Jung", "Walt Disney", "Queen Elizabeth II"],
    subtypes: {
      selfPreservation: "Focused on physical comfort and maintaining routine",
      sexual: "Seeks union and merger in relationships",
      social: "Creates harmony and connection in groups"
    },
    coreBelief: "I must maintain peace to be worthy",
    commonLie: "Conflict and tension must be avoided",
    color: "bg-[#134E4A]"
  }
};

export default function TypeDetail({ typeNumber, isWing, wingKey }: TypeDetailProps) {
  // Ensure typeNumber is valid
  const validTypeNumber = (typeNumber >= 1 && typeNumber <= 9) ? typeNumber : 1;
  
  const type = typeData[validTypeNumber] ?? {
    name: "Unknown Type",
    summary: "Type information not found",
    traits: [] as string[],
    wings: {} as Record<string, WingData>,
    integration: "",
    disintegration: "",
    healthLevels: {
      healthy: [] as string[],
      average: [] as string[],
      unhealthy: [] as string[]
    },
    strengths: [] as string[],
    challenges: [] as string[],
    examples: [] as string[],
    subtypes: {
      selfPreservation: "",
      sexual: "",
      social: ""
    },
    coreBelief: "",
    commonLie: "",
    color: "bg-gray-500"
  } as TypeData;

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Link 
          href={isWing ? `/type/${typeNumber}` : "/"} 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Overview
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card hover:bg-card/90 rounded-lg p-8 mb-8 border border-accent/20"
        >
          <h1 className="text-4xl font-bold mb-2">
            {isWing && wingKey ? (
              <>Wing {wingKey}: {(type.wings as Record<string, WingData>)[wingKey]?.name ?? 'Unknown Wing'}</>
            ) : (
              <>Type {validTypeNumber}: {type.name ?? 'Unknown Type'}</>
            )}
          </h1>
          <p className="text-xl opacity-90">
            {isWing && wingKey 
              ? ((type.wings as Record<string, WingData>)[wingKey]?.description ?? 'No description available')
              : (type.summary ?? 'No summary available')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Key Traits
                <Tooltip content="The fundamental characteristics and behaviors that define this type">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {type.traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Wings
                <Tooltip content="Adjacent personality types that influence and blend with the main type">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <div className="space-y-4">
              {Object.entries(type.wings).map(([wingKey, wing]) => (
                <div
                  key={wingKey}
                  className={`block p-4 rounded-lg ${
                    isWing && wingKey === wingKey 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-secondary"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{wing.name}</h3>
                  <p className="text-sm text-muted-foreground">{wing.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Integration & Disintegration
                <Tooltip content="How this type behaves in growth (integration) and stress (disintegration)">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <p className="mb-2">{type.integration}</p>
            <p>{type.disintegration}</p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Famous Examples</h2>
            <ul className="list-disc list-inside space-y-2">
              {type.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-card rounded-lg p-6 col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Health Levels
                <Tooltip content="The spectrum of behaviors and patterns from healthy to unhealthy states">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-500">Healthy</h3>
                <ul className="list-disc list-inside space-y-2">
                  {type.healthLevels.healthy.map((level) => (
                    <li key={level}>{level}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">Average</h3>
                <ul className="list-disc list-inside space-y-2">
                  {type.healthLevels.average.map((level) => (
                    <li key={level}>{level}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-500">Unhealthy</h3>
                <ul className="list-disc list-inside space-y-2">
                  {type.healthLevels.unhealthy.map((level) => (
                    <li key={level}>{level}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-card rounded-lg p-6 col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Instinctual Subtypes
                <Tooltip content="How basic instincts (self-preservation, sexual, and social) manifest in this type">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Self-Preservation</h3>
                <p>{type.subtypes.selfPreservation}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sexual</h3>
                <p>{type.subtypes.sexual}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Social</h3>
                <p>{type.subtypes.social}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-card rounded-lg p-6 col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              <span className="flex items-center gap-2">
                Core Beliefs & Patterns
                <Tooltip content="The fundamental beliefs and recurring patterns that drive this type's behavior">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </Tooltip>
              </span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Core Belief</h3>
                <p className="text-lg">{type.coreBelief}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Common Lie</h3>
                <p className="text-lg">{type.commonLie}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
