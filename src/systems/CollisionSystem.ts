import { BASIC_WORLD } from '../data/world/basicWorld'
import type { TileType } from '../types/tile'
import { BLOCKED_TILES } from '../types/tile'
import {
  TILE_SIZE,
  WORLD_WIDTH,
  WORLD_HEIGHT,
} from '../types/game'

export class CollisionSystem {
  isBlocked(tile: TileType): boolean {
    return BLOCKED_TILES.includes(tile)
  }

  isInsideWorld(x: number, y: number): boolean {
    return (
      x >= 0 &&
      y >= 0 &&
      x < WORLD_WIDTH &&
      y < WORLD_HEIGHT
    )
  }

  isTileInsideWorld(tileX: number, tileY: number): boolean {
    return this.isInsideWorld(
      tileX * TILE_SIZE,
      tileY * TILE_SIZE,
    )
  }

  isTileBlocked(tileX: number, tileY: number): boolean {
    if (!this.isTileInsideWorld(tileX, tileY)) {
      return true
    }

    const tile = BASIC_WORLD[tileY][tileX]

    return this.isBlocked(tile)
  }
}