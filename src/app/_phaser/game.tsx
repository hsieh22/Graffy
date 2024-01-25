import Phaser from 'phaser'

export default class Game extends Phaser.Scene {

  private graphics?: Phaser.GameObjects.Graphics
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private car?: Phaser.Physics.Matter.Image
  // private tracker1?: Phaser.GameObjects.Rectangle
  // private tracker2?: Phaser.GameObjects.Rectangle
  private trailPoints?: number[][]
  private steer?: (force: Phaser.Math.Vector2) => void

  constructor() {
    super('matter-ecs')
  }
  init() {
    this.cameras.main.setBackgroundColor('#FFFFFF');
  }

  preload() {
    this.load.image('car', '/assets/cursor-yellow-centered-transBg.png');
  }

  create() {
    console.log('create game objects');

    // world bounds
    this.matter.world.setBounds(0, 0, window.innerHeight*0.8, window.innerHeight*0.8);

    // trackers
    // this.tracker1 = this.add.rectangle(0, 0, 4, 4, 0x00ff00);
    // this.tracker2 = this.add.rectangle(0, 0, 4, 4, 0xff0000);

    // Trail of the tank
    this.trailPoints = [];
    const color = 0x000000;
    const thickness = 4;
    const alpha = 1;
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(thickness, color, alpha);

    // car
    this.car = this.matter.add.image(window.innerHeight*0.4, window.innerHeight*0.4, 'car');
    this.car.setScale(0.6);
    this.car.setFrictionAir(0.2);
    this.car.setMass(10);

    // cursors
    this.cursors = this.input.keyboard?.createCursorKeys();

    // steer
    this.steer = (force) => {
      if (!this.cursors) {
        return;
      }
      if (this.cursors.left.isDown) {
        // Note: force.negate() will change the original force object
        // so please make sure force.negate() is called lastly
        this.car?.applyForceFrom(this.car.getBottomLeft(), force);
        this.car?.applyForceFrom(this.car.getTopRight(), force.negate());
      }
      else if (this.cursors.right.isDown) {
        this.car?.applyForceFrom(this.car.getBottomRight(), force);
        this.car?.applyForceFrom(this.car.getTopLeft(), force.negate());
      }
    }
  }

  update() {

    if (!this.car || !this.cursors || !this.steer || !this.graphics || !this.trailPoints) {
      console.log('update missing something');
      return;
    }

    // tracker
    const point1 = this.car.getTopRight();
    const point2 = this.car.getBottomRight();

    // this.tracker1.setPosition(point1.x, point1.y);
    // this.tracker2.setPosition(point2.x, point2.y);

    // moving and steering
    const speed = 0.01;
    const angle = Math.atan2((point2?.y || 0) - (point1?.y || 0), (point2?.x || 0) - (point1?.x || 0));
    const force = new Phaser.Math.Vector2(2 * speed * Math.cos(angle), 2 * speed * Math.sin(angle));

    if (this.cursors.up.isDown) {
      this.car.thrust(speed);
      this.steer(force);
    }
    else if (this.cursors.down.isDown) {
      this.car.thrustBack(speed*0.6);
      this.steer(force.negate());
    }

    // Trail of the tank
    const l = this.trailPoints.length;
    const x = this.car.getCenter().x;
    const y = this.car.getCenter().y;

    if (!x || !y) {
      return;
    }
    if (l < 2) {
      this.trailPoints.push([x, y])
    }
    else if (l >= 2
      && (this.trailPoints[l - 1][0] !== x || this.trailPoints[l - 1][1] !== y)
      // && (this.trailPoints[l - 1][0] - x) ** 2 + (this.trailPoints[l - 1][1] - y) ** 2 > (15 ** 2)
    ) {

      // console.log(trailPoints);
      this.graphics.lineBetween(this.trailPoints[l - 1][0], this.trailPoints[l - 1][1], x, y);
      this.trailPoints.push([x, y]);

      // To avoid memory leak
      if (l >= 5) {
        this.trailPoints.shift();	// Removes the first element from an array and returns it.
      }
    }
  }


}
