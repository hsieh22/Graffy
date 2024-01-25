'use client';

import { GameStateContext } from '@/context/GameContext'
import { useContext } from 'react'
import MainGame from './_pages/MainGame';
import Menu from './_pages/Menu';
import Tutorial from './_pages/Tutorial';
import Result from './_pages/Result';
import Login from './_pages/Login';
import BackgroundMusic from './_components/BackgroundMusic';

export default function Home() {

  const { gameState } = useContext(GameStateContext);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {/* {gameState === "LOGIN" && <Login />} */}
        {gameState === "MENU" && <Menu />}
        {gameState === "TUTORIAL" && <Tutorial />}
        {gameState === "MAINGAME" && <MainGame />}
        {gameState === "RESULT" && <Result />}
      </main>
      <BackgroundMusic /> 
      {/* !!!!!!!!!!!!!!!! */}
    </>
  )
}
