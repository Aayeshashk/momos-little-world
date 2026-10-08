import Phaser from 'phaser'
import { WORLD_PALETTE } from '../types/palette'
import type { TileType } from '../types/tile'
import { TILE_SIZE } from '../types/game'

export class TileRenderer {
  private scene: Phaser.Scene

  constructor(scene: Phaser.Scene) {
    this.scene = scene
  }

  drawTile(x: number, y: number, type: TileType) {
    const graphics = this.scene.add.graphics()

    const colors: Record<TileType, number> = {
      grass: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.grass).color,
      path: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.path).color,
      water: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.water).color,
      flower: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.flowerPink).color,
      tree: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.tree).color,
      building: Phaser.Display.Color.HexStringToColor(WORLD_PALETTE.wood).color,
    }

    graphics.fillStyle(colors[type], 1)
    graphics.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE,
    )

    return graphics
  }
}