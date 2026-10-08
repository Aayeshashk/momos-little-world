import { BASIC_WORLD } from '../data/world/basicWorld'
import { TOWN_LOCATIONS } from '../data/world/locations'
import {
  TILE_SIZE,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from '../types/game'
import type { TileType } from '../types/tile'
import { BLOCKED_TILES } from '../types/tile'

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

  isTileInsideWorld(
    tileX: number,
    tileY: number,
  ): boolean {
    return this.isInsideWorld(
      tileX * TILE_SIZE,
      tileY * TILE_SIZE,
    )
  }

  isTileBlocked(
    tileX: number,
    tileY: number,
  ): boolean {
    if (!this.isTileInsideWorld(tileX, tileY)) {
      return true
    }

    const tile = BASIC_WORLD[tileY][tileX]

    return this.isBlocked(tile)
  }

  isPositionBlocked(
    x: number,
    y: number,
    width: number,
    height: number,
  ): boolean {
    const halfWidth = width / 2
    const halfHeight = height / 2

    const points = [
      { x: x - halfWidth, y: y - halfHeight },
      { x: x + halfWidth, y: y - halfHeight },
      { x: x - halfWidth, y: y + halfHeight },
      { x: x + halfWidth, y: y + halfHeight },
    ]

    const blockedByTile = points.some((point) => {
      if (!this.isInsideWorld(point.x, point.y)) {
        return true
      }

      const tileX = Math.floor(point.x / TILE_SIZE)
      const tileY = Math.floor(point.y / TILE_SIZE)

      return this.isTileBlocked(tileX, tileY)
    })

    if (blockedByTile) {
      return true
    }

    return this.isBuildingBlocked(
      x,
      y,
      width,
      height,
    )
  }

  private isBuildingBlocked(
    x: number,
    y: number,
    width: number,
    height: number,
  ): boolean {
    const playerLeft = x - width / 2
    const playerRight = x + width / 2
    const playerTop = y - height / 2
    const playerBottom = y + height / 2

    const buildingTypes = [
      'house',
      'cafe',
      'shop',
    ]

    return TOWN_LOCATIONS
      .filter((location) =>
        buildingTypes.includes(location.id),
      )
      .some((building) => {
        const buildingLeft =
          building.x * TILE_SIZE

        const buildingRight =
          (building.x + building.width) *
          TILE_SIZE

        const buildingTop =
          building.y * TILE_SIZE

        const buildingBottom =
          (building.y + building.height) *
          TILE_SIZE

        return (
          playerRight > buildingLeft &&
          playerLeft < buildingRight &&
          playerBottom > buildingTop &&
          playerTop < buildingBottom
        )
      })
  }
}