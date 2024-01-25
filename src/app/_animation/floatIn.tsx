'use-client';

import { useState, useRef, useEffect } from "react";

import { Player } from "@lottiefiles/react-lottie-player"
import { TrendingUpIcon } from "lucide-react";

type FloatInProps = {
  floatIn: boolean;
};

export const FloatIn = ({ floatIn = false }: FloatInProps) => {
  const [animationComplete, setAnimationComplete] = useState(true);
  const playerRef = useRef<any>(null);
  
  useEffect(() => {
    // console.log("floatIn", floatIn)
    if (floatIn) {
      setAnimationComplete(false);
      if(!playerRef.current) return;
      playerRef.current?.play();
    }
  }, [floatIn]);

  return (
    <div className="fixed z-20 top-0 left-0 w-screen h-screen" style={{ display: animationComplete ? 'none' : 'block' }}>
      <Player
        ref={playerRef}
        autoplay={false}
        keepLastFrame
        src="https://lottie.host/df8f598a-ba3c-48d6-8ccd-808cc8c6ecfd/cPmPNjW1V6.json"
        onEvent={(e) => {
          if (e === 'complete') {
            setAnimationComplete(true);
          }
        }}
      />
    </div>
  );
};

// In: https://lottie.host/9009bc12-1c94-44f3-91fe-d6a115fa5a1b/OamNz5yylM.json
// Out: https://lottie.host/e3787334-ab59-4e11-b4d1-ffd9afc1e3c8/V9De2G3tP7.json
