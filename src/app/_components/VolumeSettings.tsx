// components/Settings.js

import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { MusicContext } from '@/context/MusicContext';

import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'

import { VolumeX, Volume, Volume1, Volume2, PlaySquare } from "lucide-react";

export function VolumeSettings() {

  const { bgMusicVolume, setBgMusicVolume, buttonSoundVolume, setButtonSoundVolume, playSound } = useContext(MusicContext);

  const theme = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const prevBgMusicVolumeRef = useRef(bgMusicVolume);
  const prevButtonSoundVolumeRef = useRef(buttonSoundVolume);

  const handleBgMusicVolumeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setFirstClick(true);
    setBgMusicVolume(newValue as number);
    if (bgMusicVolume !== 0) {
      setIsMuted(false);
    }
    if (bgMusicVolume === 0 && buttonSoundVolume === 0) {
      setIsMuted(true);
    }
  };

  const handleButtonSoundVolumeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setFirstClick(true);
    setButtonSoundVolume(newValue as number);
    if (buttonSoundVolume !== 0) {
      setIsMuted(false);
    }
    if (buttonSoundVolume === 0 && bgMusicVolume === 0) {
      setIsMuted(true);
    }
  };

  const handleMuteToggle = () => {
    setFirstClick(true);
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // console.log('isMuted', isMuted);
    if (!firstClick) return;
    if (isMuted) {
      // Store the previous volume
      playSound('Click');
      prevBgMusicVolumeRef.current = bgMusicVolume;
      prevButtonSoundVolumeRef.current = buttonSoundVolume;
      setBgMusicVolume(0);
      setButtonSoundVolume(0);
    } else {
      // Restore the previous volume
      playSound('Click', prevButtonSoundVolumeRef.current);
      setBgMusicVolume(prevBgMusicVolumeRef.current);
      setButtonSoundVolume(prevButtonSoundVolumeRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return (
    <div className="p-5">
      <label className='text-lg'>
        Background music
        <Slider
          min={0}
          max={100}
          value={bgMusicVolume}
          aria-label="bgMusic"
          onChange={handleBgMusicVolumeChange}
          onChangeCommitted={() => playSound('Click')}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 5,
            '& .MuiSlider-thumb': {
              width: 9,
              height: 9,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&::before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
                  }`,
              },
              '&.Mui-active': {
                width: 14,
                height: 14,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
      </label>
      <br />
      <label className='text-lg'>
        Button sound
        <Slider
          min={0}
          max={100}
          value={buttonSoundVolume}
          aria-label="buttonSound"
          onChange={handleButtonSoundVolumeChange}
          onChangeCommitted={() => playSound('Click')}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 5,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&::before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
                  }`,
              },
              '&.Mui-active': {
                width: 14,
                height: 14,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
      </label>
      <br />
      <button onClick={handleMuteToggle}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

type VolumeSettingsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function VolumeSettingsModal({ isOpen, onClose }: VolumeSettingsDialogProps) {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    bgcolor: '#FFF',
    borderRadius: '15px',
    boxShadow: 24,
    px: 5,
    pt: 4,
    pb: 2,
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <Box sx={style}>
        <h1 className='text-3xl'>Settings</h1>
        <VolumeSettings />
      </Box>
    </Modal>
  );
}