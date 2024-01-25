
import { useContext } from "react";
import { GameStateContext } from "@/context/GameContext";

// import components
import DrawingBoard from "./DrawingBoard";
import Car_2D from "../_phaser/Car_2D"

export const saveAnswerBoard = () => {
  console.log("saveAnswer");
}

export interface DrawingBoardMethods {
  handleClearDrawing: () => void;
  handleSnapshotDrawing: () => void;
  initializeGame?: () => void;
}

type AnswerAreaProps = {
  drawingBoardRef: React.RefObject<DrawingBoardMethods>;
  size: number;
  disabled: boolean;
}

export default function AnswerArea({ drawingBoardRef, size, disabled }: AnswerAreaProps) {
  const { gameMode } = useContext(GameStateContext);

  return (
    <>
      {gameMode === "DRAW" && <DrawingBoard size={size} ref={drawingBoardRef} disabled={disabled} />}
      {gameMode === "CAR_2D" && <Car_2D size={size} ref={drawingBoardRef} disabled={disabled} />}
    </>
  )
}