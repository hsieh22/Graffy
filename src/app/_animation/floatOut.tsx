'use-client';

import { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player"

type FloatOutProps = {
  floatOut?: boolean;
}

export const FloatOut = ({ floatOut = true }: FloatOutProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="fixed z-20 top-0 left-0 w-screen h-screen" style={{ display: animationComplete ? 'none' : 'block' }}>
      <Player
        autoplay
        keepLastFrame
        src="https://lottie.host/e8b9e7ff-ce49-47b7-9b1c-a36ad97ee52a/grXFoSlPIs.json"
        onEvent={(e) => {
          if (e === 'complete') {
            setAnimationComplete(true);
          }
        }}
      />
    </div>
  );
}
