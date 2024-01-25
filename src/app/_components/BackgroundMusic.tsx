import { useState, useContext } from "react";
import { MusicContext } from "@/context/MusicContext";
import { Button } from "./Button";


export default function BackgroundMusic() {
  const [ disappear, setDisappear ] = useState<boolean>(false);
  const { bgMusicVolume } = useContext(MusicContext);

  const handleClick = () => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    audio.volume = bgMusicVolume / 100;
    audio.play();
  }

  return (
    <div 
      onClick={() => {
        handleClick();
        setDisappear(true);
      }} 
      className="fixed left-0 top-0 right-0 bottom-0 z-50 bg-transparent"
      style={{ display: disappear ?  'none' : 'block' }}
    >
      <audio loop style={{ display: 'none' }} id="background-music">
        <source src="/audio/background.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};
