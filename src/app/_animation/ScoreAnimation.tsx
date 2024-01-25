import React, { useState, useEffect } from 'react';

interface ScoreAnimationProps {
  finalScore: number;
  isLoading: boolean;
  className?: string;
}

export default function ScoreAnimation({ finalScore, isLoading, className }: ScoreAnimationProps) {
  const [score, setScore] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(true);

  // start rolling animation when the component is mounted
  // if the score is loading, keep rolling
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isLoading) {
        setScore(Math.floor(Math.random() * 100));
      }
      else {
        setScore(finalScore);
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);

  }, [isLoading, finalScore]);


  return (
    <div className={className}>
      { (score>=0) ? score : ""}
    </div>
  );
};

