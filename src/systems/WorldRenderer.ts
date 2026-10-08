import Phaser from 'phaser'
import { BASIC_WORLD } from '../data/world/basicWorld'
import { TileRenderer } from './TileRenderer'

export class WorldRenderer {
  private tileRenderer: TileRenderer

  constructor(scene: Phaser.Scene) {
    this.tileRenderer = new TileRenderer(scene)
  }

  render() {
    BASIC_WORLD.forEach((row, y) => {
      row.forEach((tile, x) => {
        this.tileRenderer.drawTile(x, y, tile)
      })
    })
  }
}