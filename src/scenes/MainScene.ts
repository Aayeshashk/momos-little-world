import Phaser from 'phaser'

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  create() {
    this.add.text(20, 20, "Momo's Little World", {
      fontSize: '16px',
      color: '#5a3d4b',
    })
  }
}