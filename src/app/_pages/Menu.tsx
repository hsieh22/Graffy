'use client';
import Sidebar from "../_components/Sidebar"

// Import context
import { GameStateContext } from "@/context/GameContext"
import { MusicContext } from "@/context/MusicContext";
import { useContext, useState } from "react"
import type { GameModeType, GameDifficultyType, GameStateType } from "@/lib/type";
import { FloatIn } from "../_animation/floatIn";
import { FloatOut } from "../_animation/floatOut";
import InteractiveBackground from "../_components/InteractiveBackground";
import { game } from "../_phaser/game_old";

export default function Menu() {

  const { setGameState, gameMode, setGameMode, gameDifficulty, setGameDifficulty } = useContext(GameStateContext);
  const { playSound } = useContext(MusicContext);
  const [slideIn, setSlideIn] = useState<boolean>(false);

  const modes: GameModeType[] = ['DRAW', 'CAR_2D'];
  const modesName: string[] = [''];
  const difficulties: GameDifficultyType[] = ['EASY', 'NORMAL', 'HARD'];
  const difficultiesName: string[] = [''];

  const handleModeChange = () => {
    playSound('Click');
    const currentModeIndex = modes.indexOf(gameMode);
    const nextModeIndex = (currentModeIndex + 1) % modes.length;
    setGameMode(modes[nextModeIndex]);
  }
  const handleDifficultyChange = () => {
    playSound('Click');
    const currentDifficultyIndex = difficulties.indexOf(gameDifficulty);
    const nextDifficultyIndex = (currentDifficultyIndex + 1) % difficulties.length;
    setGameDifficulty(difficulties[nextDifficultyIndex]);
  }

  const redirectPage = (page: GameStateType) => {
    playSound('Click');
    setSlideIn(true);
    setTimeout(() => {
      setGameState(page);
    }, 1000);
  }

  const gameModeText = () => {
    switch (gameMode) {
      case 'DRAW':
        return 'draw';
        break;
      case 'CAR_2D':
        return 'car';
        break;
    }
  }

  const gameDifficultyText = () => {
    switch (gameDifficulty) {
      case 'EASY':
        return 'easy';
        break;
      case 'NORMAL':
        return 'normal';
        break;
      case 'HARD':
        return 'hard';
        break;
    }
  }

  return (
    <div>
      <FloatOut />
      <FloatIn floatIn={slideIn} />
      <InteractiveBackground generateInterval={2000} disabled={false} logo={true} />
      <Sidebar />
      <div className="absolute flex flex-row items-end overflow-visible left-20 bottom-20">
        <h1 className="text-9xl cursor-pointer" onClick={() => redirectPage("MAINGAME")}>Graffy</h1>
        <h2 className="mr-8 text-7xl cursor-pointer" onClick={() => redirectPage("MAINGAME")}>.io</h2>
        <div className="lg:flex-col">
          <button onClick={handleModeChange} className="w-36 text-xl text-left">
            Mode | {gameModeText()}
          </button>
          <button onClick={handleDifficultyChange} className="w-48 mt-0.5 text-xl text-left">
            Difficulty | {gameDifficultyText()}
          </button>
        </div>
      </div>
    </div>
  )
}