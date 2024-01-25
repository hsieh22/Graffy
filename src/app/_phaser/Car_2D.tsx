import React, { useRef, useState, useImperativeHandle, forwardRef, useContext, useEffect } from 'react';
import { storage } from '@/firebase/firebase';
import { getDownloadURL, ref as firebaseRef, uploadBytesResumable } from 'firebase/storage';
import { AnswerContext } from '@/context/AnswerContext';
import { GameStateContext } from '@/context/GameContext';
import ColorPicker from '../_components/ColorPicker';

type Car_2DProps = {
  size: number;
  disabled?: boolean;
};

const Car_2D = forwardRef(({ size, disabled }: Car_2DProps, ref) => {
  const gameRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Phaser.Game>();
  const [gameObj, setGameObj] = useState<any>();
  const [thickness, setThickness] = useState<number>(4);
  const [alpha, setAlpha] = useState<number>(1);
  const [color, setColor] = useState<string>('#000000');

  const { setAnswer1, setAnswer2, setAnswer3 } = useContext(AnswerContext);
  const { gameStage } = useContext(GameStateContext);


  // init phaser, the useEffect hook may execute twice under strict mode
  // so we need to check if phaser has been loaded
  // the useState hook may not work here, probably due to the life cycle
  let phaserLoaded = false;
  useEffect(() => {
    async function initPhaser() {
      if (phaserLoaded) return;
      console.log("initPhaser", phaserLoaded);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      phaserLoaded = true;

      const { default: Phaser } = await import('phaser');
      const { default: Game } = await import('./game');

      const phaserGame = new Phaser.Game({
        type: Phaser.CANVAS,
        width: size,
        height: size,
        // canvas: gameRef.current,
        backgroundColor: '#FFFFFF',
        parent: 'phaser-container',
        dom: {
          createContainer: true
        },
        physics: {
          default: 'matter',
          matter: {
            gravity: { y: 0 },
            debug: false, // set to true to show wire frames
          },
        },
        scene: [Game],
      });

      setGame(phaserGame);
    }

    initPhaser();
  }, []);

  // set the gameObj after the game is loaded
  // also destroy the game when the component is unmounted
  // the destruction is necessary for the second time the component is mounted
  useEffect(() => {
    console.log("setGameObj");
    console.log("game", game);
    console.log(game?.scene.game.scene.scenes[0]);
    setGameObj(game?.scene.game.scene.scenes[0]);

    return () => {
      console.log('useEffect return Car_2D');
      destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game]);

  // clean up the game
  const destroy = () => {
    console.log('destroy game');
    game?.destroy(true, false);
  };

  // Pause and Resume game
  useEffect(() => {
    console.log('useEffect Car_2D disabled');

    if (!gameObj) return;
    if (disabled) {
      console.log('pause game')
      // gameObj.scene.pause();
      game?.scene.game.scene.scenes[0].game.pause();
    }
    else if (!disabled) {
      console.log('resume game')
      // gameObj.scene.resume();
      game?.scene.game.scene.scenes[0].game.resume();

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  // Function to convert Data URL to Blob
  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/png' });
  }

  // take a snapshot of drawing and upload to firebase
  const handleSnapshotDrawing = async () => {
    console.log('handleSnapshotDrawing');
    if (!gameObj) return;
    if (!gameObj.graphics) return;
    // gameRef.current.game.instance.scene.scenes[0].car.angle += 20;

    console.log('snapshot');

    // Create a RenderTexture to capture the graphics content
    const renderTexture = game?.scene.game.scene.scenes[0]?.add.renderTexture(
      400,
      300,
      gameObj.game.config.width as number,
      gameObj.game.config.height as number,
    );

    // Draw a white rectangle as the background
    // otherwise the background will be transparent
    // which will distort the image similarity calculation
    renderTexture?.fill(
      0xffffff, 1, 0, 0,
      gameObj.game.config.width as number,
      gameObj.game.config.height as number
    );
    // Draw the graphics content (trail) onto the RenderTexture
    renderTexture?.draw(gameObj.graphics);

    // Generate the snapshot from the RenderTexture
    renderTexture?.snapshot((image: any) => {
      if (image instanceof HTMLImageElement) {
        const dataURL = image.src;
        // Convert data URL to Blob
        const blob = dataURItoBlob(dataURL);
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

        // Download the image

        // // Create a download link
        // const downloadLink = document.createElement('a');
        // downloadLink.href = dataURL;
        // downloadLink.download = 'snapshot.png'; // You can specify the filename

        // // Trigger a click on the link to start the download
        // downloadLink.click();
      }
    })

    renderTexture?.destroy();

  };

  const handleClearDrawing = () => {
    console.log('handleClearDrawing');
    // const gameObj = gameRef.current?.game?.instance?.scene.scenes[0] as any;
    console.log(game);
    console.log(gameObj);
    if (!gameObj) {
      console.log('gameObj not found');
      return;
    }
    if (!gameObj.graphics) {
      console.log('gameObj.graphics not found');
      return;
    }
    if (!gameObj.trailPoints) {
      console.log('gameObj.trailPoints not found');
      return;
    }
    if (!gameObj.car) {
      console.log('gameObj.car not found');
      return;
    }

    gameObj.graphics.clear();
    gameObj.trailPoints = [];
    gameObj.graphics.lineStyle(thickness, color, alpha);

    // reset the car
    gameObj.car.angle = 0;
    gameObj.car.x = size/2;
    gameObj.car.y = size/2;
  }

  const handleChangeColor = (newColor: string) => {
    if (disabled) {
      return;
    }
    if (!gameObj) return;
    if (!gameObj.graphics) return;
    console.log('handleChangeColor', newColor)
    gameObj.graphics.lineStyle(thickness, newColor, alpha);
    setColor(newColor);
  }

  const handleChangeThickness = (newThickness: number) => {
    if (disabled) {
      return;
    }
    if (!gameObj) return;
    if (!gameObj.graphics) return;
    gameObj.graphics.lineStyle(newThickness, color, alpha);
    setThickness(newThickness);
  }

  useImperativeHandle(ref, () => ({
    handleClearDrawing,
    handleSnapshotDrawing,
  }));

  return (
    <>
      <div id="phaser-container" />
      {/* <ColorPicker currentColor={color} changeColor={handleChangeColor} disabled={false} />
      <input
        type="range"
        min="10"
        max="50"
        value={thickness}
        onChange={(e) => handleChangeThickness(parseInt(e.target.value))}
      /> */}
    </>
  );
});

Car_2D.displayName = 'Car_2D';
export default Car_2D;

