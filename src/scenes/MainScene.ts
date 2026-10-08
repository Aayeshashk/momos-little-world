import Phaser from 'phaser'
import { WorldRenderer } from '../systems/WorldRenderer'

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  create() {
    const worldRenderer = new WorldRenderer(this)

    worldRenderer.render()

    this.add.text(20, 110, "Momo's Little World", {
      fontSize: '16px',
      color: '#5a3d4b',
    })
  }
}