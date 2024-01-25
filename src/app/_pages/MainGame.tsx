import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Firebase
import { storage } from "@/firebase/firebase";
import { ref as firebaseRef, deleteObject } from 'firebase/storage';

// Import context
import { GameStateContext } from "@/context/GameContext";
import { QuestionContext } from "@/context/QuestionContext";

// Import components
import { QuestionImage } from "../_components/QuestionImage";
import { VolumeSettingsModal } from "../_components/VolumeSettings";
import { FloatIn } from "../_animation/floatIn";
import { FloatOut } from "../_animation/floatOut";
import { GameStateType } from "@/lib/type";
import AnswerArea from "../_components/AnswerArea";
import InteractiveBackground from "../_components/InteractiveBackground";
import { RotateCw } from 'lucide-react';

// import types
import { DrawingBoardMethods } from "../_components/AnswerArea";
import { Button } from "../_components/Button";
import TimeBar from "../_components/TimeBar";

import {
  Pause,
  Play,
  Home,
  Settings,
} from "lucide-react";
import { Icon } from "@mui/material";
import { AnswerContext } from "@/context/AnswerContext";

function MainGame() {

  // Question and Answer
  const { fetchQuestionData, generateQuestion, setQuestion1, setQuestion2, setQuestion3 } = useContext(QuestionContext);
  const { setAnswer1, setAnswer2, setAnswer3, answer1, answer2, answer3 } = useContext(AnswerContext);

  // AnswerArea
  const drawingBoardRef = useRef<DrawingBoardMethods | null>(null);

  // Game state
  const { setGameState, gameStage, setGameStage, gameMode } = useContext(GameStateContext);
  const [isReady, setReady] = useState<boolean>(false);  // for the ready screen
  const [started, setStarted] = useState<boolean>(false); // manage start and pause
  const [slideIn, setSlideIn] = useState<boolean>(false); // for the slide in animation
  const [openVolumeSettingsDialog, setOpenVolumeSettingsDialog] = useState<boolean>(false);
  const [isPhaserLoading, setIsPhaserLoading] = useState<boolean>(true);

  // Color
  const Color = [
    '#Ffda3f', // yellow
    '#2694DB', // blue
    '#DB0006', // red
  ]
  const h = window.innerHeight;
  const w = window.innerWidth;
  const d = Math.sqrt(h * h + w * w) + 20;
  const colorRef = useRef<Number>(gameStage - 1);
  const xOriginRef = useRef<Number>(0);
  const yOriginRef = useRef<Number>(0);

  // Preload
  useEffect(() => {
    console.log("useEffect Preload in MainGame");
    // load the question bank
    fetchQuestionData();
    // pick a random color for the ready screen
    const randomColorIndex = Math.floor(Math.random() * Color.length);
    colorRef.current = randomColorIndex;
    // pick a random origin for the ready screen
    xOriginRef.current = w * Math.random();
    yOriginRef.current = h * Math.random();
    // load phaser
    setTimeout(() => {
      setIsPhaserLoading(false);
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Redirect page
  const redirectPage = (page: GameStateType) => {
    setSlideIn(true);
    setTimeout(() => {
      setGameState(page);
    }, 1000);
  }

  // Here to set the game timer
  const GAME_TIMER_CAR = 30;
  const GAME_TIMER_DRAW = 20;
  const [maxTime, setMaxTime] = useState<number>(GAME_TIMER_DRAW);
  const [timer, setTimer] = useState<number>(maxTime);
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout | null>(null);

  // Handle game state
  const handleReady = () => {
    console.log("Ready to start");
    if (gameStage === 0) {
      generateQuestion();
      setGameStage(1);
      setMaxTime(gameMode==="CAR_2D" ? GAME_TIMER_CAR : GAME_TIMER_DRAW)
      setTimer(gameMode==="CAR_2D" ? GAME_TIMER_CAR : GAME_TIMER_DRAW)
    }
    setReady(true); // for the ready screen slide out
    handleStart();
  }

  const handleStart = () => {
    console.log("Start game");
    setStarted(true);
    startTimer();
  }

  const handlePause = () => {
    console.log("Pause game");
    setStarted(false);
    pauseTimer();
  }

  const deleteAnswer = async () => {
    console.log("Delete Firebase Answer File");
    if (answer1) {
      const answer1Ref = firebaseRef(storage, answer1);
      deleteObject(answer1Ref).then(() => {
        console.log("Answer1 deleted successfully");
      }).catch((error) => {
        console.log("Error deleting answer1", error);
      });
    }
    if (answer2) {
      const answer2Ref = firebaseRef(storage, answer2);
      deleteObject(answer2Ref).then(() => {
        console.log("Answer2 deleted successfully");
      }).catch((error) => {
        console.log("Error deleting answer2", error);
      });
    }
    if (answer3) {
      const answer3Ref = firebaseRef(storage, answer3);
      deleteObject(answer3Ref).then(() => {
        console.log("Answer3 deleted successfully");
      }).catch((error) => {
        console.log("Error deleting answer3", error);
      });
    }
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
  }

  const handleQuit = () => {
    console.log("Quit game");
    setStarted(false);
    redirectPage("MENU");
    setTimeout(() => {
      resetTimer();
      setGameStage(0);
      deleteAnswer();
      setQuestion1("");
      setQuestion2("");
      setQuestion3("");
      handleClearDrawing(); // clear the drawing board
    }, 1000);
  }

  const handleTimesUp = () => {
    console.log("Handle Time's up", "gameStage", gameStage);
    handlePause();
    handleSaveDrawing();  // save the drawing

    if (gameStage === 1 || gameStage === 2) {
      // pick a random color for the ready screen
      const randomColorIndex = Math.floor(Math.random() * Color.length);
      colorRef.current = randomColorIndex;
      // pick a random origin for the ready screen
      xOriginRef.current = w * Math.random();
      yOriginRef.current = h * Math.random();

      setReady(false);  // for the ready screen slide in
      setTimeout(() => {
        resetTimer();
        setGameStage((prev) => prev + 1);
        handleClearDrawing(); // clear the drawing board
      }, 1000);
    }
    else if (gameStage === 3) {
      redirectPage("RESULT");
      setTimeout(() => {
        resetTimer();
        handleClearDrawing(); // clear the drawing board
        setGameStage(0);
      }, 1000);
    }
  }

  // Detect time's up
  // use useEffect hook to get the correct gameStage
  useEffect(() => {
    if (timer <= 0) {
      // console.log("Time's up", "gameStage", gameStage);
      pauseTimer();
      handleTimesUp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  // Timer
  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    const intervalId = setInterval(() => {
      // console.log("Timer is running");
      setTimer((prev) => {
        return prev - 0.01;
      });
    }, 10);
    // Set the interval ID to the state
    setTimeInterval(intervalId);
  };

  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    if (timeInterval) {
      clearInterval(timeInterval);
    }
  };

  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(maxTime);
    // Clear the interval to stop the timer
    if (timeInterval) {
      clearInterval(timeInterval);
    }
  };


  // functions related to AnswerArea
  const handleClearDrawing = () => {
    // Call clearDrawing function using the ref
    if (!drawingBoardRef.current?.handleClearDrawing) return;
    drawingBoardRef.current.handleClearDrawing();
  };

  const handleSaveDrawing = () => {
    // Call saveDrawing function using the ref
    if (!drawingBoardRef.current?.handleSnapshotDrawing) return;
    drawingBoardRef.current.handleSnapshotDrawing();
  }



  return (
    <div className="h-full w-full justify-center align-center">
      <FloatIn floatIn={slideIn} />
      <FloatOut />
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isReady ? 0 : 1 }}
          exit={{ scale: 0 }}
          className="fixed z-40 transition-transform duration-500 ease-out rounded-full"
          style={{
            left: (w-d) / 2,
            top: (h-d) / 2,
            width: d,
            height: d,
            backgroundColor: Color[colorRef.current as number],
            transformOrigin: `${xOriginRef.current}px ${yOriginRef.current}px`,
          }}
        >
          {
            (gameMode === "CAR_2D" && isPhaserLoading) ? (
              <>
                <RotateCw size={280} className="absolute z-50 stroke-[#FFF] animate-[spin_1.5s_linear_infinite]" style={{ left: d / 2 - 150, top: d / 2 - 150 }} />
                {/* <Icon  style={{ fontSize: 100 }}>C</Icon> */}
              </>
            ) : (
              <>
                {!isReady && (
                  <div className="absolute flex flex-col justify-center items-center z-50 w-[500px] h-[300px] text-7xl text-[#FFF]" style={{ left: d / 2 - 250, top: d / 2 - 150 }}>
                    <p className="flex flex-row pb-[24px]">Ready<span className="text-8xl">?</span></p>
                    <Button
                      onClick={handleReady}
                      className="px-[25px] pt-[10px] pb-[16px] border-[4px] border-[#FFF] rounded-[30px] text-4xl font-semibold"
                    >
                      Start
                    </Button>
                  </div>
                )}
              </>
            )
          }
        </motion.div>
        <div className="w-full grid grid-cols-[1fr_80vh_1fr] justify-items-center mt-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div className='p-[20px] rounded-[2vh] border border-[#000] bg-[#FFF]'>
              <QuestionImage size={window.innerHeight * 0.2 as number} />
            </div>
            <h1 className="mt-2 text-2xl">Task{" "}{gameStage}</h1>
            <Button id="finish-button"
              onClick={handleTimesUp}
              className={`${started ? 'hover:shadow-[7px_7px_15px_0_rgba(0,0,0,0.3)] hover:translate-x-[-2.5px] hover-translate-y-[-2.5px]' : ''
                } transition-all duration-75`}
            >
              Finish
            </Button>
          </div>
          <div
            className="rounded-[4vh] border border-[#000] overflow-hidden hover:cursor-crosshair"
            style={{
              boxShadow: 'inset 0.5vh 0.5vh 3vh 0 rgba(0, 0, 0, 0.12)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <AnswerArea size={window.innerHeight * 0.8 as number} drawingBoardRef={drawingBoardRef} disabled={!started} />
            <TimeBar timer={timer} maxTime={maxTime} color={Color[colorRef.current as number]}/>
          </div>
          <div className="flex flex-row justify-self-end self-end">
            {started ? (
              <Button
                onClick={handlePause}
                disabled={!started}
                className="flex justify-center items-center mr-[10px] w-[60px] h-[60px] bg-[#2694DB] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
              >
                <Pause size={40} strokeWidth={2} color="#FFF" />
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleQuit}
                  disabled={started}
                  className="flex justify-center items-center mr-[10px] pb-px w-[60px] h-[60px] bg-[#DB0006] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
                >
                  <Home size={40} strokeWidth={2} color="#FFF" />
                </Button>
                <Button
                  onClick={handleStart}
                  disabled={started}
                  className="flex justify-center items-center mr-[10px] pl-1.5 w-[60px] h-[60px] bg-[#2694DB] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
                >
                  <Play size={40} strokeWidth={2} color="#FFF" />
                </Button>
              </>
            )}
            <Button
              onClick={() => {
                setOpenVolumeSettingsDialog(true);
                handlePause();
              }}
              className="flex justify-center items-center mr-[20px] w-[60px] h-[60px] bg-[#FFDA3F] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
            >
              <Settings size={40} strokeWidth={2} color="#FFF" />
            </Button>
          </div>
        </div>
      </div>
      <InteractiveBackground generateInterval={2000} disabled={true} logo={false} />
      <VolumeSettingsModal
        isOpen={openVolumeSettingsDialog}
        onClose={() => {
          setOpenVolumeSettingsDialog(false);
        }}
      />
    </div>
  );
}

export default MainGame;