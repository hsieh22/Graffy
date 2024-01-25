"use client";

import { createContext, useState } from "react";
import type { GameStateType, GameModeType, GameDifficultyType } from "@/lib/type";


export type GameStateContext = {
  gameState: GameStateType;
  gameMode: GameModeType;
  gameDifficulty: GameDifficultyType;
  gameStage: number;
  setGameState: (gameState: GameStateType) => void;
  setGameMode: (gameMode: GameModeType) => void;
  setGameDifficulty: (gameDifficulty: GameDifficultyType) => void;
  setGameStage: React.Dispatch<React.SetStateAction<number>>;
};


export const GameStateContext = createContext<GameStateContext>({
  gameState: "MENU",
  gameMode: "DRAW",
  gameDifficulty: "EASY",
  gameStage: 0,
  setGameState: () => { },
  setGameMode: () => { },
  setGameDifficulty: () => { },
  setGameStage: () => { },
});

type Props = {
  children: React.ReactNode;
};

export function GameStateProvider({ children }: Props) {
  const [gameState, setGameState] = useState<GameStateType>("MENU");
  const [gameMode, setGameMode] = useState<GameModeType>("DRAW");
  const [gameDifficulty, setGameDifficulty] = useState<GameDifficultyType>("EASY");
  const [gameStage, setGameStage] = useState<number>(0);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        gameMode,
        setGameMode,
        gameDifficulty,
        setGameDifficulty,
        gameStage,
        setGameStage
      }}>
      {children}
    </GameStateContext.Provider>
  );
}
