import Phaser from 'phaser';

export interface Scene extends Phaser.Scene {
  helloWorld?: Phaser.GameObjects.Text;
  car?: Phaser.Physics.Matter.Image;
  tracker1?: Phaser.GameObjects.Rectangle;
  tracker2?: Phaser.GameObjects.Rectangle;
  graphics?: Phaser.GameObjects.Graphics;
  trailPoints?: [number, number][];
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  steer?: (force: Phaser.Math.Vector2) => void;
}

export const game: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: {
        x: 0,
        y: 0,
      }
    }
  },
  scene: {
    preload: function (this: Scene) {
      this.load.image('car', '/assets/car-yellow.png');
    },
    init: function (this: Scene) {
      this.cameras.main.setBackgroundColor('#24252A');
    },
    create: function (this: Scene) {

      // world bounds
      this.matter.world.setBounds(0, 0, 800, 600);

      // car
      this.car = this.matter.add.image(400, 300, 'car');
      this.car.setFrictionAir(0.2);
      this.car.setMass(10);

      // trackers
      this.tracker1 = this.add.rectangle(0, 0, 4, 4, 0x00ff00);
      this.tracker2 = this.add.rectangle(0, 0, 4, 4, 0xff0000);

      // Trail of the tank
      this.trailPoints = [];
      const color = 0x000000;
      const thickness = 4;
      const alpha = 1;
      this.graphics = this.add.graphics();
      this.graphics.lineStyle(thickness, color, alpha);

      // cursors
      this.cursors = this.input?.keyboard?.createCursorKeys();

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
    },
    update: function (this: Scene) {

      if (!this.car || !this.tracker1 || !this.tracker2 || !this.cursors || !this.steer || !this.graphics || !this.trailPoints) {
        console.log('update missing something');
        return;
      }

      // tracker
      const point1 = this.car.getTopRight();
      const point2 = this.car.getBottomRight();

      this.tracker1.setPosition(point1.x, point1.y);
      this.tracker2.setPosition(point2.x, point2.y);

      // moving and steering
      const speed = 0.03;
      const angle = Math.atan2((point2?.y || 0) - (point1?.y || 0), (point2?.x || 0) - (point1?.x || 0));
      const force = new Phaser.Math.Vector2(speed * Math.cos(angle), speed * Math.sin(angle));

      if (this.cursors.up.isDown) {
        this.car.thrust(0.05);
        this.steer(force);
      }
      else if (this.cursors.down.isDown) {
        this.car.thrustBack(0.05);
        this.steer(force.negate());
      }

      // Trail of the tank
      const l = this.trailPoints.length;
      const x = this.car.getCenter().x;
      const y = this.car.getCenter().y;

      if(!x || !y) {
        return;
      }
      if (l < 2) {
        this.trailPoints.push([x, y])
      }
      else if (l >= 2
        && (this.trailPoints[l - 1][0] !== x || this.trailPoints[l - 1][1] !== y)
        && (this.trailPoints[l - 1][0] - x) ** 2 + (this.trailPoints[l - 1][1] - y) ** 2 > (15 ** 2)
      ) {

        // console.log(trailPoints);
        this.graphics.lineBetween(this.trailPoints[l - 1][0], this.trailPoints[l - 1][1], x, y);
        this.trailPoints.push([x, y]);

        // To avoid memory leak
        if (l >= 5) {
          this.trailPoints.shift();	// Removes the first element from an array and returns it.
        }
      }
    },
  },
};