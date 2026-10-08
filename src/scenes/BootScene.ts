import Phaser from 'phaser'

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  create() {
    console.log("Momo's Little World booted successfully!")
    this.scene.start('MainScene')
  }
}