'use client';

import { useContext } from 'react';
import Image from 'next/image'
import { QuestionContext } from '@/context/QuestionContext';
import { GameStateContext } from '@/context/GameContext';

type QuestionImageType = {
  size: number
}

export const QuestionImage = ({size}: QuestionImageType) => {

  const { gameStage, gameState } = useContext(GameStateContext);
  const { question1, question2, question3 } = useContext(QuestionContext);

  return (
    <>
      {(gameStage === 1 && question1) &&
        <div>
          <Image src={question1} width={size} height={size} alt="question image1" />
        </div>
      }
      {(gameStage === 2 && question2) &&
        <div>
          <Image src={question2} width={size} height={size} alt="question image2" />
        </div>
      }
      {(gameStage === 3 && question3) &&
        <div>
          <Image src={question3} width={size} height={size} alt="question image3" />
        </div>
      }
      {(gameStage === 0 && gameState === "RESULT" && question1 && question2 && question3) &&
        <div className='absolute top-0 w-full grid grid-cols-3 justify-items-end items-start'>
          <Image src={question1} width={size} height={size} alt="question image1" className='m-[15px] p-[12px] rounded-[5px] border border-[#000] bg-[#FFF]' />
          <Image src={question2} width={size} height={size} alt="question image2" className='m-[15px] p-[12px] rounded-[5px] border border-[#000] bg-[#FFF]' />
          <Image src={question3} width={size} height={size} alt="question image3" className='m-[15px] p-[12px] rounded-[5px] border border-[#000] bg-[#FFF]' />
        </div>
      }
    </>
  )
}