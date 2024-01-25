import React from 'react';

type ColorPickerProps = {
  currentColor: string;
  changeColor: (color: string) => void;
  disabled?: boolean;
};

const ColorPicker = ({ currentColor, changeColor, disabled }: ColorPickerProps) => {
  const colorStyles = [
    '#000000', // black
    '#F44336', // red
    '#FF9800', // orange
    '#FFEB3B', // yellow
    '#8BC34A',  // green
    '#2196F3', // blue
  ];

  const handleChangeColor = (color: string) => {
    if (disabled) {
      return;
    }
    changeColor(color);
  }

  return (
    <div className="flex space-x-2">
      {colorStyles.map((color) => (
        <div
          key={color}
          className="w-8 h-8 rounded-full cursor-pointer"
          style={currentColor === color ? { backgroundColor: `${color}`, border: '2px solid white' } : { backgroundColor: `${color}` }}
          onClick={() => handleChangeColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
