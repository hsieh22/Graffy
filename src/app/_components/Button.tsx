import React, { forwardRef, useContext } from "react";

import sound from "/public/audio/click.mp3"
import { MusicContext } from "@/context/MusicContext";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, ...props }, ref) => {

    const { playSound } = useContext(MusicContext);
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
        playSound('Click');
      }
    }

    return (
      <>
        <button
          className={className}
          onClick={handleOnClick}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)


Button.displayName = "Button"
export { Button }