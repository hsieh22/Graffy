"use client";

import { createContext, useState } from "react";
import { AnswerType } from "@/lib/type";

export type AnswerContext = {
  answer1: AnswerType;
  setAnswer1: (Answer: AnswerType) => void;
  answer2: AnswerType;
  setAnswer2: (Answer: AnswerType) => void;
  answer3: AnswerType;
  setAnswer3: (Answer: AnswerType) => void;
};

export const AnswerContext = createContext<AnswerContext>({
  answer1: "",
  setAnswer1: () => { },
  answer2: "",
  setAnswer2: () => { },
  answer3: "",
  setAnswer3: () => { },
});

type Props = {
  children: React.ReactNode;
};

export function AnswerProvider({ children }: Props) {
  const [answer1, setAnswer1] = useState<AnswerType>("");
  const [answer2, setAnswer2] = useState<AnswerType>("");
  const [answer3, setAnswer3] = useState<AnswerType>("");
  return (
    <AnswerContext.Provider
      value={{
        answer1,
        setAnswer1,
        answer2,
        setAnswer2,
        answer3,
        setAnswer3,
      }}>
      {children}
    </AnswerContext.Provider>
  );
}
