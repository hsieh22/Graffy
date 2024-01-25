
// Code Reference: 
// Drawing Board: https://youtu.be/p3jJ5z7i3KE?si=w1cTfF7WH60-wib3
// Download Image: https://dev.to/saranshk/how-to-convert-a-react-component-to-an-image-2jon

import html2canvas from "html2canvas";
import { useContext, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useTheme } from '@mui/material/styles';
import { storage } from "@/firebase/firebase";
import { getDownloadURL, ref as firebaseRef, uploadBytesResumable } from 'firebase/storage';
import { AnswerContext } from "@/context/AnswerContext";
import { GameStateContext } from "@/context/GameContext";
import ColorPicker from "./ColorPicker";

type Point = {
  x: number;
  y: number;
};

type DrawingAction = {
  path: Point[];
  style: {
    color: string;
    lineWidth: number;
  };
};

type DrawingBoardProps = {
  size: number,
  disabled?: boolean;
}

const DrawingBoard = forwardRef(({ size, disabled }: DrawingBoardProps, ref) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>("black");
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [drawingActions, setDrawingActions] = useState<DrawingAction[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [currentStyle, setCurrentStyle] = useState({ color: "black", lineWidth: 12 });

  const { setAnswer1, setAnswer2, setAnswer3 } = useContext(AnswerContext);
  const { gameStage } = useContext(GameStateContext);
  const theme = useTheme();

  // Drawing Board
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      reDrawPreviousData(ctx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    if (!isDrawing) {
      return;
    }
    if (context) {
      context.strokeStyle = currentStyle.color;
      context.lineWidth = currentStyle.lineWidth;
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
      setCurrentPath([...currentPath, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }]);
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (context) {
      context.closePath();
    }
    if (currentPath.length > 0) {
      setDrawingActions([...drawingActions, { path: currentPath, style: currentStyle }]);
    }
    setCurrentPath([]);
  };

  const changeColor = (color: string) => {
    setCurrentColor(color);
    setCurrentStyle({ ...currentStyle, color });
  };

  const changeWidth = (width: number) => {
    setLineWidth(width);
    setCurrentStyle({ ...currentStyle, lineWidth: width });
  };

  const undoDrawing = () => {
    if (drawingActions.length === 0 || !canvasRef.current) {
      return;
    }

    drawingActions.pop();
    const newContext = canvasRef.current.getContext("2d");

    if (newContext) {
      newContext.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      drawingActions.forEach(({ path, style }) => {
        newContext.beginPath();
        newContext.strokeStyle = style.color;
        newContext.lineWidth = style.lineWidth;
        newContext.moveTo(path[0].x, path[0].y);
        path.forEach((point) => {
          newContext.lineTo(point.x, point.y);
        });
        newContext.stroke();
      });
    }
  };


  const handleClearDrawing = () => {
    setDrawingActions([]);
    setCurrentPath([]);
    const newContext = canvasRef.current?.getContext("2d");
    newContext?.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
  };

  const reDrawPreviousData = (ctx: CanvasRenderingContext2D | null) => {
    if (!ctx) {
      return;
    }
    drawingActions.forEach(({ path, style }) => {
      ctx.beginPath();
      ctx.strokeStyle = style.color;
      ctx.lineWidth = style.lineWidth;
      ctx.moveTo(path[0].x, path[0].y);
      path.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  };

  // html2canvas, turn the canvas into an image
  // and also upload the image to firebase storage
  const handleSnapshotDrawing = async () => {
    const element = document.getElementById("canvas");

    if (!element) {
      console.error('Canvas element not found.');
      return;
    }

    try {
      const canvas = await html2canvas(element);
      const dataURL = canvas.toDataURL('image/jpg');

      // Convert base64 data URL to Blob
      const blob = await fetch(dataURL).then((res) => res.blob());
      
      // Get the current timestamp
      const timestamp = new Date().getTime();
      // Append the timestamp to the filename
      const filename = 'answer' + gameStage + '_' + timestamp + '.jpg';
      // Get a reference to the Firebase Storage with the updated filename
      const storageRef = firebaseRef(storage, 'Answer/' + filename);

      // 'file' comes from the Blob or File API
      const uploadTask = uploadBytesResumable(storageRef, blob);

      // Monitor the upload task
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Upload error", error);
        },
        () => {
          // Handle successful uploads on complete
          // Get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            if (gameStage === 1) setAnswer1(downloadURL);
            else if (gameStage === 2) setAnswer2(downloadURL);
            else if (gameStage === 3) setAnswer3(downloadURL);
          });
        }
      );

      // Download the image to local storage

      // const link = document.createElement('a');
      // link.href = data;
      // link.download = 'answer.jpg';
      // // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

    } catch (error) {
      console.error('Error converting canvas to image:', error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleClearDrawing,
    handleSnapshotDrawing,
  }));

  return (
    <>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />
    </>
  );
});

DrawingBoard.displayName = 'DrawingBoard';
export default DrawingBoard;