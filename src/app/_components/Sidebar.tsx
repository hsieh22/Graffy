'use client';
import { useContext, useState } from "react"
import { GameStateContext } from "@/context/GameContext"
import { MusicContext } from "@/context/MusicContext";

import { VolumeSettings } from "./VolumeSettings";

import GraffyIcon from "@/../public/next.svg"
import {
  Settings,
  SlidersHorizontal,
  Store,
  BookMarked,
  BookOpenText,
  MessageCircleQuestion,
  MessageSquareMore,
  Sun,
  SunMoon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { GameStateType } from "@/lib/type";
import { FloatIn } from "../_animation/floatIn";

export default function Sidebar() {
  const { setGameState } = useContext(GameStateContext);
  const { playSound } = useContext(MusicContext);

  const [slideIn, setSlideIn] = useState<boolean>(false);

  const redirectPage = (page: GameStateType) => {
    playSound('Click');
    setSlideIn(true);
    setTimeout(() => {
      setGameState(page);
    }, 1000);
  }

  return (
    <div className="group/side absolute w-[280px] h-full top-0 right-0 overflow-hidden">
      <FloatIn floatIn={slideIn} />
      <div className="absolute w-[230px] h-full top-0 right-[-230px] bg-[#FFF] shadow-[0_0_50px_3px_rgba(0,0,0,0.25)] group-hover/side:translate-x-[-230px] ease-in-out duration-300">
        {/* <GraffyIcon /> */}
        {/* <hr /> */}
        {/* <SidebarButton Icon={Store} text="Store" /> */}
        <SidebarButton Icon={MessageSquareMore} text="Tutorial" OnClick={() => redirectPage("TUTORIAL")} />
        <div className="h-[59px] overflow-hidden transition hover:h-auto ease-in-out">
          <SidebarButton Icon={Settings} text="Settings" />
          <hr className="w-[80%] ml-[10%]" />
          <div className="ml-[8px] mt-[-5px] w-[88%]">
            <VolumeSettings />
          </div>
          <hr className="w-[80%] ml-[10%] mt-[-3px]" />
        </div>
      </div>
    </div>

  )
};

type SidebarButtonProps = {
  Icon: React.ComponentType<{
    size?: number | string;
    strokeWidth?: number | string;
  }>;
  text: string;
  OnClick?: () => void;
};

function SidebarButton({ Icon, text, OnClick }: SidebarButtonProps) {
  return (
    <button className="group w-full" onClick={OnClick ?? (() => { })}>
      <div className="flex w-full items-center gap-4 p-2 transition-colors duration-300 group-hover:bg-gray-200">
        <div className="grid h-[43px] w-[43px] pl-[5px] pt-[1px] place-items-center">
          <Icon size={26} strokeWidth={1.4} />
        </div>
        <span className={cn("text-xl")}>
          {text}
        </span>
      </div>
    </button>
  );
}

// the `cn` helper function basically concatenate your tailwind classes in a safe way
// on the surface, it will remove any falsy values from the array, it also remove any redundant classes
// this is useful for conditional classes
// prefixing a class with max-lg: makes it only apply to screen size below lg, this is the tailwind way of media queries
// likewise, prefixing a class with lg: makes it only apply to screen size above lg
// read more about tailwind responsive design here: https://tailwindcss.com/docs/responsive-design