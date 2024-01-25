"use client";

import { createContext, useState } from "react";
import type { SoundEffect } from "@/lib/type";

export type MusicContext = {
  bgMusicVolume: number;
  setBgMusicVolume: (volume: number) => void;
  buttonSoundVolume: number;
  setButtonSoundVolume: (volume: number) => void;
  playSound: (soundEffect: SoundEffect, volume?: number) => HTMLAudioElement | undefined;
  playDrum: () => void; 
  pauseDrum: () => void;
};

export const MusicContext = createContext<MusicContext>({
  bgMusicVolume: 50,
  setBgMusicVolume: () => { },
  buttonSoundVolume: 50,
  setButtonSoundVolume: () => { },
  playSound: () => new Audio(),
  playDrum: () => { },
  pauseDrum: () => { },
});

type Props = {
  children: React.ReactNode;
};

export function VolumeProvider({ children }: Props) {
  const [bgMusicVolume, setBgVolume] = useState<number>(50);
  const [buttonSoundVolume, setButtonSoundVolume] = useState<number>(50);

  const setBgMusicVolume = (volume: number) => {
    console.log('setBgMusicVolume', volume)
    setBgVolume(volume)
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    audio.volume = volume / 100;
  }

  const playSound = (soundEffect: SoundEffect, volume?: number) => {
    let audio;
    // Check if the code is running in a browser environment
    if (typeof window !== 'undefined') {
      switch (soundEffect) {
        case "Click":
          audio = new Audio('/audio/Click.mp3');
          break;
        case 'Pop':
          audio = new Audio('/audio/Pop.mp3');
          break;
        case 'Drum':
          audio = new Audio('/audio/Drum.mp3');
          break;
        case 'Cymbal':
          audio = new Audio('/audio/Cymbal.mp3');
          break;
        case 'Knock':
          audio = new Audio('/audio/Knock.mp3');
          break;
      }

      if (audio) {
        // Set volume if provided or use the default buttonSoundVolume
        audio.volume = volume ? volume / 100 : buttonSoundVolume / 100;
        audio.play();
      }
    }

    return audio;
  };


  const drum = typeof window !== 'undefined' ? new Audio('/audio/Drum.mp3') : null;

  const playDrum = () => {
    // Check if the code is running in a browser environment and drum is defined
    if (typeof window !== 'undefined' && drum) {
      drum.volume = buttonSoundVolume / 100;
      drum.play();
    }
  };

  const pauseDrum = () => {
    // Check if the code is running in a browser environment and drum is defined
    if (typeof window !== 'undefined' && drum) {
      drum.pause();
    }
  };

  return (
    <MusicContext.Provider
      value={{
        bgMusicVolume,
        setBgMusicVolume,
        buttonSoundVolume,
        setButtonSoundVolume,
        playSound,
        playDrum,
        pauseDrum,
      }}>
      {children}
    </MusicContext.Provider>
  );
}
