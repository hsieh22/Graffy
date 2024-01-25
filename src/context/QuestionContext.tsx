"use client";

import { createContext, useState, useContext } from "react";
import { GameDifficultyType, QuestionLevelType, QuestionType } from "@/lib/type";
import { storage } from '@/firebase/firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { GameStateContext } from "./GameContext";




export type QuestionContext = {
  question1: QuestionType;
  setQuestion1: (question: QuestionType) => void;
  question2: QuestionType;
  setQuestion2: (question: QuestionType) => void;
  question3: QuestionType;
  setQuestion3: (question: QuestionType) => void;
  fetchQuestionData: () => void;
  generateQuestion: () => void;
};

export const QuestionContext = createContext<QuestionContext>({
  question1: "",
  setQuestion1: () => { },
  question2: "",
  setQuestion2: () => { },
  question3: "",
  setQuestion3: () => { },
  fetchQuestionData: () => { },
  generateQuestion: () => { },
});

type Props = {
  children: React.ReactNode;
};

export function QuestionProvider({ children }: Props) {

  // Manage the difficulty 
  const { gameDifficulty } = useContext(GameStateContext);
  const getLevelFromDifficulty = (gameDifficulty: GameDifficultyType): QuestionLevelType => {
    switch (gameDifficulty) {
      case "EASY":
        return "LevelOne";
      case "NORMAL":
        return "LevelTwo";
      case "HARD":
        return "LevelThree";
      default:
        // Handle unexpected gameDifficulty values
        throw new Error("Invalid gameDifficulty");
    }
  }
  const level = getLevelFromDifficulty(gameDifficulty);

  // states for question images source
  const [imgList, setImgList] = useState<string[]>([]);
  const [question1, setQuestion1] = useState<QuestionType>("");
  const [question2, setQuestion2] = useState<QuestionType>("");
  const [question3, setQuestion3] = useState<QuestionType>("");

  // Load the image from the database
  const fetchQuestionData = async () => {
    try {
      const listRef = ref(storage, `QuestionBank/${level}`);

      // Find all the prefixes and items.
      const res = await listAll(listRef);

      // res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      // console.log("folderRef", folderRef);
      // });

      const newImgList = res.items.map((itemRef) => {
        // All the items under listRef.
        // console.log("itemRef", itemRef.name);
        return itemRef.name;
      });

      setImgList(newImgList);

      // res.items.forEach((itemRef) => {
      //   // All the items under listRef.
      //   console.log("itemRef", itemRef.name);
      // });

    } catch (error) {
      // Uh-oh, an error occurred!
      console.error("Error fetching data:", error);
    }
  };

  // generateRandomIndices
  const generateRandomIndices = (count: number, maxIndex: number) => {
    const randomIndices: number[] = [];
    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      // Ensure the generated index is not already in the array
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices;
  };

  // Pick images from the database
  const handlePickImg = (setImg: (question: string) => void, imgList: string[], randomIndex: number) => {
    // console.log("randomIndex", randomIndex);

    const imgRef = ref(storage, `QuestionBank/${level}/${imgList[randomIndex]}`);
    if (!imgRef) {
      return;
    }

    getDownloadURL(imgRef)
      .then((url) => {
        console.log("url", url);
        setImg(url);
      })
      .catch((error) => {
        console.log("Cannot get image : ", error);
      });
  };

  // Generate the question
  const generateQuestion = async () => {
    const randomIndices = generateRandomIndices(3, imgList.length);
    try {
      handlePickImg(setQuestion1, imgList, randomIndices[0]);
      handlePickImg(setQuestion2, imgList, randomIndices[1]);
      handlePickImg(setQuestion3, imgList, randomIndices[2]);
    } catch (error) {
      console.error("Error generating question:", error);
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        question1,
        setQuestion1,
        question2,
        setQuestion2,
        question3,
        setQuestion3,
        fetchQuestionData,
        generateQuestion,
      }}>
      {children}
    </QuestionContext.Provider>
  );
}
