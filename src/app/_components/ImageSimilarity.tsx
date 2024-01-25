'use client';

import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "@/context/QuestionContext";
import { AnswerContext } from "@/context/AnswerContext";

type ImageSimilarityProps = {
  score1: number,
  score2: number,
  score3: number,
  avgScore: number,
  setScore1: (score: number) => void,
  setScore2: (score: number) => void,
  setScore3: (score: number) => void,
  setAvgScore: (score: number) => void,
  setScore1Loading: (isLoading: boolean) => void,
  setScore2Loading: (isLoading: boolean) => void,
  setScore3Loading: (isLoading: boolean) => void,
}
export default function ImageSimilarity({
  score1,
  score2,
  score3,
  avgScore,
  setScore1,
  setScore2,
  setScore3,
  setAvgScore,
  setScore1Loading,
  setScore2Loading,
  setScore3Loading,
}: ImageSimilarityProps) {

  const { question1, question2, question3 } = useContext(QuestionContext);
  const { answer1, answer2, answer3 } = useContext(AnswerContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const calculateSimilarity = async (question: String, answer: String, setScore: (score: number) => void) => {
    setIsLoading(true);

    if (!question || !answer) {
      console.log("question or answer is empty")
      setIsLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question, answer: answer }),
      });
      const { result } = await res.json();

      const score = result

      // Check if the 'score' property is present and is a number
      if (typeof score === 'number') {
        let scoreInt = Math.round(score * 100)
        if(scoreInt > 100) scoreInt = 100;
        if(scoreInt < 0) scoreInt = 0;
        setScore(scoreInt);
      } else {
        console.log("score is not a number")
        console.log(result)
        console.log(score)
        throw new Error('Invalid response format: score is not a number');
      }
    }
    catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  const handleCalculateSimilarity = async () => {
    setScore1Loading(true);
    setScore2Loading(true);
    setScore3Loading(true);
    await calculateSimilarity(question1, answer1, setScore1);
    setScore1Loading(false);
    await calculateSimilarity(question2, answer2, setScore2);
    setScore2Loading(false);
    await calculateSimilarity(question3, answer3, setScore3);
    setScore3Loading(false);
  }

  useEffect(() => {
    console.log("useEffect in ImageSimilarity");
    handleCalculateSimilarity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(score3 === -1) return; // {console.log("score3 = -1" )}
    
    const calculateAvgScore = (score1: number, score2: number, score3: number) => {
      console.log("calc avg score");
      let avgScore = (score1 + score2 + score3) / 3;
      avgScore = Math.round(avgScore * 100) / 100 // round to 2 decimal places
      if (avgScore > 100) avgScore = 100;
      if (avgScore < 0) avgScore = 0;
      setTimeout(() => {
      setAvgScore(avgScore);
      }, 1000);
    }
    calculateAvgScore(score1, score2, score3);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score3]);

  

  return (
    <div>
      {/* {isLoading && <p>loading...</p>} */}
    </div>
  )
}