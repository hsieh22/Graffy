'use client';

import { useContext } from 'react';
import Image from 'next/image'
import { GameStateContext } from '@/context/GameContext';
import { AnswerContext } from '@/context/AnswerContext';

type AnswerImageProps = {
  size: number;
}

export const AnswerImage = ({size} : AnswerImageProps) => {

  const { gameStage, gameState } = useContext(GameStateContext);
  const { answer1, answer2, answer3 } = useContext(AnswerContext);

  return (
    <>
        {(gameStage === 0 && gameState === "RESULT" && answer1 && answer2 && answer3) &&
          <div className='grid grid-cols-3'>
            <Image src={answer1} width={size} height={size} alt="answer image1" className='m-[35px] p-[8px] rounded-[15px] border border-[#000] bg-[#FFF]' />
            <Image src={answer2} width={size} height={size} alt="answer image2" className='m-[35px] p-[8px] rounded-[15px] border border-[#000] bg-[#FFF]' />
            <Image src={answer3} width={size} height={size} alt="answer image3" className='m-[35px] p-[8px] rounded-[15px] border border-[#000] bg-[#FFF]' />
          </div>
        }
    </>
  )
}