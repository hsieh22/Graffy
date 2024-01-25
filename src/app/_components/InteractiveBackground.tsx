import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, Bodies, World, Body, Events, Vertices, Constraint, MouseConstraint, Mouse, Composite, Vector, Composites } from 'matter-js'
import { MusicContext } from '@/context/MusicContext';

// Code Reference
// https://www.fabiofranchino.com/blog/how-to-use-matter-js-in-react-functional-component/

// Math.random() will return random x, 0 ≤ x < 1
const randomIntFromRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Color = [
  '#Ffda3f', // yellow
  '#2694DB', // blue
  '#DB0006', // red
]

// set generateInterval to -1 to disable auto generate
type InteractiveBackgroundProps = {
  generateInterval: number;
  disabled: boolean;
  logo: boolean;
  isCelebrate?: boolean;
};

export default function InteractiveBackground({ generateInterval = -1, disabled = true, logo = false, isCelebrate }: InteractiveBackgroundProps) {
  const { playSound } = React.useContext(MusicContext);
  const scene = useRef<HTMLDivElement>(null); // Provide the type for the ref
  const engine = useRef(Engine.create());
  const isPressed = useRef(false);
  const [coolDown, setCoolDown] = useState(false);
  let interval = useRef(generateInterval);
  const maxInterval = useRef(generateInterval * 1.5);
  const minInterval = useRef(generateInterval / 1.5);


  useEffect(() => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    // console.log(cw, ch);

    const currentEngine = engine.current;
    currentEngine.gravity.y = 0.05;

    const render = Render.create({
      element: scene.current!,
      engine: currentEngine,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Add event listener for afterUpdate event
    Events.on(currentEngine, 'afterUpdate', () => {
      currentEngine.world.bodies.forEach((body) => {
        if (
          body.bounds.min.x > cw ||
          body.bounds.min.y > ch ||
          body.bounds.max.x < 0
        ) {
          World.remove(currentEngine.world, body);
        }
      });
    });

    // Create logo
    if (logo) {
      // Circle
      const circle = Bodies.circle(cw * 0.39, ch * 0.6, 100, {
        // isStatic: true,
        restitution: 0.1,
        friction: 0,
        render: {
          fillStyle: 'transparent',
          strokeStyle: Color[1],
          lineWidth: 6,
        },
      });

      // Rounded square
      const square = Bodies.rectangle(cw * 0.48, ch * 0.72, 130, 130, {
        isStatic: true,
        chamfer: { radius: 20 },
        render: {
          fillStyle: 'transparent',
          strokeStyle: Color[2],
          lineWidth: 8,
        },
      });

      // Vertical line
      const line = Bodies.rectangle(cw * 0.48 - 65, ch * 0.72, 7, 80, {
        isStatic: true,
        render: {
          fillStyle: Color[2],
          strokeStyle: Color[2],
          lineWidth: 1,
        },
      });

      // Triangle
      const triangle1 = Bodies.polygon(cw * 0.23, ch * 0.83, 3, 95, {
        isStatic: true,
        angle: -Math.PI / 180 * 45,
        render: {
          fillStyle: Color[0],
          strokeStyle: Color[0],
          lineWidth: 1,
        },
      });

      const triangle2 = Bodies.polygon(cw * 0.228, ch * 0.838, 3, 75, {
        isStatic: true,
        angle: -Math.PI / 180 * 45,
        render: {
          fillStyle: '#ffffff',
          strokeStyle: '#ffffff',
          lineWidth: 1,
        },
      });

      const logo = Body.create({
        parts: [triangle1, triangle2, square, circle, line],  // the line is on top of the circle
        // isStatic: true,
        id: 0,
      });

      const anchor = { x: cw * 0.39, y: ch * 0.6 };

      const elastic = Constraint.create({
        pointA: anchor,
        bodyB: logo,
        length: 0.01,
        damping: 2,
        stiffness: 0.01,
        render: {
          visible: false,
          strokeStyle: '#ff0000', // Set your desired color here
        },
      });

      World.add(currentEngine.world, [
        logo,
        elastic,
      ]);

    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(currentEngine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(currentEngine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Set up engine and render
    // Run the engine and render loop
    Engine.run(currentEngine);
    Render.run(render);

    // Set up interval for auto-generating shapes
    const intervalId = setInterval(() => {
      // prevent too much geometry from being generated when idle
      // the "logo" has 5 bodies
      if (currentEngine.world.bodies.length > 20) {
        // console.log('too many bodies', currentEngine.world.bodies.length);
        return;
      }
      if (Math.random() < 0.15) {
        summonCircle(randomIntFromRange(0, cw), randomIntFromRange(0, ch));
      }
      else {
        summonPolygon(randomIntFromRange(0, cw), randomIntFromRange(0, ch));
      }
      interval.current = randomIntFromRange(minInterval.current, maxInterval.current);
      if (interval.current < 500) interval.current = 500;
      // console.log(interval.current);
    }, interval.current);

    return () => {
      console.log('clear interval');
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);

      // Remove the event listener
      Events.off(currentEngine, 'afterUpdate', () => { });

      // Stop the render and clear the world
      Render.stop(render);
      World.clear(currentEngine.world, false);
      Engine.clear(currentEngine);

      // Remove the canvas element
      render.canvas.remove();
      render.textures = {};
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    isPressed.current = true;
    summonGeometry(e.clientX, e.clientY);
  };

  const handleUp = () => {
    if (disabled) return;
    isPressed.current = false;
  };

  const handleAddCircle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (coolDown) return;
    setCoolDown(true);
    setTimeout(() => setCoolDown(false), 300);

    if (isPressed.current) {
      summonGeometry(e.clientX, e.clientY);
    }
  };

  const summonGeometry = (x: number, y: number): void => {
    // id of logo is 0
    const logo = Composite.get(engine.current!.world, 0, 'body') as Body | undefined;
    if (!logo || !logo.parts) return;

    const onTopOfLogo = logo.parts.some((part: Body) => {
      if (part.id === 0) return false;
      const bounds = part.bounds;
      return x > bounds.min.x && x < bounds.max.x && y > bounds.min.y && y < bounds.max.y;
    });

    if (onTopOfLogo) return;

    playSound('Pop');
    if (Math.random() < 0.15) {
      summonCircle(x, y);
    } else {
      summonPolygon(x, y);
    }
  };


  const summonCircle = (x: number, y: number, angle?: number) => {
    const circleRadius = 10 + Math.random() * 30;
    const color = Color[randomIntFromRange(0, Object.keys(Color).length - 1)]
    const circle = Bodies.circle(
      x,
      y,
      circleRadius,
      {
        mass: randomIntFromRange(1, 50),
        restitution: Math.random() * 1 + 0.5,
        friction: 0.005,
        frictionAir: Math.random() * 0.05,
        angle: angle ? angle : Math.random() * 2 * Math.PI,
        render: {
          fillStyle: Math.random() < 0.99 ? 'transparent' : color, // Set fillStyle to transparent
          strokeStyle: color, // Set strokeStyle to a color
          lineWidth: Math.random() * 2 + 1, // Adjust the line width as needed
        },
      });

    // Apply an rotational force at an offset to induce spinning
    const torque = Math.random() * 0.0002 - 0.0001;
    const offset = { x: 0, y: circleRadius };
    const initialForce = { x: 0, y: torque };
    const randomForce = { x: Math.random() * 0.1 - 0.05, y: Math.random() * 0.1 - 0.05 };
    Body.applyForce(circle, offset, initialForce);
    Body.applyForce(circle, circle.position, randomForce);

    World.add(engine.current!.world, [circle]);
  }

  const summonPolygon = (x: number, y: number, angle?: number) => {
    const polygonSides = randomIntFromRange(3, 6);
    const polygonRadius = 10 + Math.random() * 30;
    const polygonAngle = Math.random() * 2 * Math.PI;
    const color = Color[randomIntFromRange(0, Object.keys(Color).length - 1)]
    const polygon = Bodies.polygon(
      x,
      y,
      polygonSides,
      polygonRadius,
      {
        mass: randomIntFromRange(1, 50),
        restitution: Math.random() * 1 + 0.5,
        friction: 0.005,
        frictionAir: Math.random() * 0.05,
        angle: angle ? angle : polygonAngle,
        render: {
          fillStyle: Math.random() < 0.99 ? 'transparent' : color, // Set fillStyle to transparent
          strokeStyle: color, // Set strokeStyle to a color
          lineWidth: Math.random() * 2 + 1, // Adjust the line width as needed
        },
      });

    // Apply an rotational force at an offset to induce spinning
    const torque = Math.random() * 0.0002 - 0.0001;
    const offset = { x: 0, y: polygonRadius };
    const initialForce = { x: 0, y: torque };
    const randomForce = { x: Math.random() * 0.1 - 0.05, y: Math.random() * 0.1 - 0.05 };
    Body.applyForce(polygon, offset, initialForce);
    Body.applyForce(polygon, polygon.position, randomForce);

    World.add(engine.current!.world, [polygon]);
  }

  useEffect(() => {
    if (isCelebrate) {
      celebrate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCelebrate])

  const celebrate = () => {
    console.log('celebrate');
    for (let i = 0; i < 50; i++) {
      summonCircle(randomIntFromRange(0, 100), randomIntFromRange(window.innerHeight - 100, window.innerHeight), 135);
      summonPolygon(randomIntFromRange(0, 100), randomIntFromRange(window.innerHeight - 100, window.innerHeight), 135);
      summonCircle(randomIntFromRange(window.innerWidth - 100, window.innerWidth), randomIntFromRange(window.innerHeight - 100, window.innerHeight), 45);
      summonPolygon(randomIntFromRange(window.innerWidth - 100, window.innerWidth), randomIntFromRange(window.innerHeight - 100, window.innerHeight), 45);
    }
  }

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
      className='w-screen h-screen absolute top-0 left-0'
    >
      <div ref={scene} />
    </div>
  );
}
