import React from "react";
import { QuestionProvider } from "@/context/QuestionContext";
import { AnswerProvider } from "@/context/AnswerContext";
import { GameStateProvider } from "@/context/GameContext";
import { VolumeProvider } from "@/context/MusicContext";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <>
      <GameStateProvider>
        <VolumeProvider>
          <AnswerProvider>
            <QuestionProvider>
              {children}
            </QuestionProvider>
          </AnswerProvider>
        </VolumeProvider>
      </GameStateProvider>
    </>
  );
}

export default Providers;
