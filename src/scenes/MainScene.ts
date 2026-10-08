import Phaser from 'phaser'
import { WorldRenderer } from '../systems/WorldRenderer'
import { LocationRenderer } from '../systems/LocationRenderer'

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  create() {
    const worldRenderer = new WorldRenderer(this)
    worldRenderer.render()

    const locationRenderer = new LocationRenderer(this)
    locationRenderer.render()
    this.cameras.main.setBounds(
  0,
  0,
  640,
  400,
)

    this.add.text(20, 110, "Momo's Little World", {
      fontSize: '16px',
      color: '#5a3d4b',
    })
  }
}