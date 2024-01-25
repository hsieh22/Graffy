
import { GameStateContext } from "@/context/GameContext"
import { useContext, useState } from "react";
import { GameStateType } from "@/lib/type";
import { Button } from "../_components/Button";
import InteractiveBackground from "../_components/InteractiveBackground";
import { FloatIn } from "../_animation/floatIn";
import { FloatOut } from "../_animation/floatOut";

import {
  Home,
} from "lucide-react";

export default function Tutorial() {
  const { gameState, setGameState } = useContext(GameStateContext);
  const [slideIn, setSlideIn] = useState<boolean>(false);

  const redirectPage = (page: GameStateType) => {
    setSlideIn(true);
    setTimeout(() => {
      setGameState(page);
    }, 1000);
  }

  return (
    <div className="relative">
      <FloatIn floatIn={slideIn} />
      <FloatOut />
      <h1 className="text-lg">Welcome to Graffy</h1>
      <p>This is a game in which players can explore the possibility of drawing</p>
      <p>Depending on the mode, you will be creating by using the mouse or by the keyboard</p>
      <p>Scores will be give by comparing the similarity of your works and the question images</p>
      <p>As for the rest,</p>
      <p>We will leave it for you to discover~</p>
      <br />
      <p>Enjoy~~</p>
      <div className="relative flex justify-end z-10">
        <Button
          onClick={() => redirectPage("MENU")}
          className="flex justify-center items-center mr-[10px] pb-px w-[60px] h-[60px] bg-[#DB0006] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
        >
          <Home size={40} strokeWidth={2} color="#FFF" />
        </Button>
      </div>
      <InteractiveBackground generateInterval={2000} disabled={true} logo={false} />
    </div>
  )
}