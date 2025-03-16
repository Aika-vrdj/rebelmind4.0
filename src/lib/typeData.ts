"use client";

export interface WingData {
  name: string;
  traits: string[];
  description: string;
}

export interface TypeData {
  [key: string]: string | string[] | {
    [key: string]: WingData;
  } | {
    healthy: string[];
    average: string[];
    unhealthy: string[];
  } | {
    selfPreservation: string;
    sexual: string;
    social: string;
  };
  name: string;
  summary: string;
  traits: string[];
  wings: {
    [key: string]: WingData;
  };
  integration: string;
  disintegration: string;
  healthLevels: {
    healthy: string[];
    average: string[];
    unhealthy: string[];
  };
  strengths: string[];
  challenges: string[];
  examples: string[];
  subtypes: {
    selfPreservation: string;
    sexual: string;
    social: string;
  };
  coreBelief: string;
  commonLie: string;
  color: string;
}

export const typeData: { [key: number]: TypeData } = {
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
  // ... (rest of the type data from TypeDetail.tsx)
};
