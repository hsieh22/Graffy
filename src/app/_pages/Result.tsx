
import { GameStateContext } from "@/context/GameContext"
import { QuestionContext } from "@/context/QuestionContext";
import { AnswerContext } from "@/context/AnswerContext";
import { MusicContext } from "@/context/MusicContext";
import { useContext, useEffect, useState } from "react";
import { QuestionImage } from "../_components/QuestionImage";
import ImageSimilarity from "../_components/ImageSimilarity";
import { GameStateType } from "@/lib/type";
import { AnswerImage } from "../_components/AnswerImage";
import { Button } from "../_components/Button";
import InteractiveBackground from "../_components/InteractiveBackground";
import { VolumeSettingsModal } from "../_components/VolumeSettings";
import ScoreAnimation from "../_animation/ScoreAnimation";
import { FloatIn } from "../_animation/floatIn";
import { FloatOut } from "../_animation/floatOut";

// Firebase
import { storage } from "@/firebase/firebase";
import { ref as firebaseRef, deleteObject } from 'firebase/storage';

import {
  Home,
  Settings,
} from "lucide-react";

export default function Result() {
  const { playDrum, pauseDrum, playSound } = useContext(MusicContext);
  const { setGameState } = useContext(GameStateContext);
  const { setQuestion1, setQuestion2, setQuestion3 } = useContext(QuestionContext);
  const { setAnswer1, setAnswer2, setAnswer3, answer1, answer2, answer3 } = useContext(AnswerContext);

  const [score1, setScore1] = useState<number>(-1);
  const [score2, setScore2] = useState<number>(-1);
  const [score3, setScore3] = useState<number>(-1);
  const [avgScore, setAvgScore] = useState<number>(-1);
  const [score1Loading, setScore1Loading] = useState<boolean>(false);
  const [score2Loading, setScore2Loading] = useState<boolean>(false);
  const [score3Loading, setScore3Loading] = useState<boolean>(false);
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [openVolumeSettingsDialog, setOpenVolumeSettingsDialog] = useState<boolean>(false);
  const [celebrate, setCelebrate] = useState<boolean>(false);

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

  const redirectPage = (page: GameStateType) => {
    setSlideIn(true);
    pauseDrum();
    deleteAnswer();
    setTimeout(() => {
      setGameState(page);
      setQuestion1("");
      setQuestion2("");
      setQuestion3("");
    }, 1000);
  }

  const handleToMenu = () => {
    redirectPage("MENU");
  }

  useEffect(() => {
    playDrum();
    return () => {
      pauseDrum();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (score1 !== -1 || score2 !== -1 || score3 !== -1) {
      playSound('Knock');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2, score3])

  useEffect(() => {
    if (avgScore !== -1) {
      setCelebrate(true);
      pauseDrum();
      playSound('Cymbal');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avgScore])

  return (
    <div>
      <FloatIn floatIn={slideIn} />
      <FloatOut />
      <div className="relative z-10 w-full h-full grid grid-rows-[0.2fr-2fr-1fr] justify-items-center">
        <h1 className="mb-[30px] text-5xl">Result</h1>
        <div className="relative">
          <AnswerImage size={250} />
          <QuestionImage size={80} />
          <ImageSimilarity
            score1={score1}
            score2={score2}
            score3={score3}
            avgScore={avgScore}
            setScore1={setScore1}
            setScore2={setScore2}
            setScore3={setScore3}
            setAvgScore={setAvgScore}
            setScore1Loading={setScore1Loading}
            setScore2Loading={setScore2Loading}
            setScore3Loading={setScore3Loading}
          />
          <div className="w-full grid grid-cols-3 justify-items-center items-center text-center">
            <div className="text-2xl">Score 1
              <ScoreAnimation
                finalScore={score1}
                isLoading={score1Loading}
              />
            </div>
            <div className="text-2xl">Score 2
              <ScoreAnimation
                finalScore={score2}
                isLoading={score2Loading}
              />
            </div>
            <div className="text-2xl">Score 3
              <ScoreAnimation
                finalScore={score3}
                isLoading={score3Loading}
              />
            </div>
          </div>
        </div>
        <div className="relative p-[30px] w-full text-3xl text-center">Final Score
          <ScoreAnimation
            finalScore={avgScore}
            isLoading={score1Loading || score2Loading || score3Loading}
            className="text-5xl"
          />
          <div className="absolute right-0 bottom-0 flex flex-row justify-self-end self-end">
            <Button
              onClick={handleToMenu}
              // disabled={}  backdrop-grayscale-[.5] {`${started ? 'hover:shadow-[7px_7px_15px_0_rgba(0,0,0,0.3)] hover:translate-x-[-2.5px] hover-translate-y-[-2.5px]' : ''} transition-all duration-75`}
              className="flex justify-center items-center mr-[10px] pb-px w-[60px] h-[60px] bg-[#DB0006] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
              style={{ marginBottom: 0 }}
            >
              <Home size={40} strokeWidth={2} color="#FFF" />
            </Button>
            <Button
              onClick={() => setOpenVolumeSettingsDialog(true)}
              className="flex justify-center items-center mr-[20px] w-[60px] h-[60px] bg-[#FFDA3F] rounded-full transition-all duration-75 hover:shadow-[5px_5px_10px_-2px_rgba(0,0,0,0.2)] hover:translate-x-[-1.5px] hover-translate-y-[-1.5px]"
            >
              <Settings size={40} strokeWidth={2} color="#FFF" />
            </Button>
          </div>
        </div>
      </div>
      <InteractiveBackground generateInterval={2000} disabled={true} logo={false} isCelebrate={celebrate}/>
      <VolumeSettingsModal
        isOpen={openVolumeSettingsDialog}
        onClose={() => {
          setOpenVolumeSettingsDialog(false);
        }} 
      />
    </div>
  )
}