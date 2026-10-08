import type { TileType } from '../../types/tile'
import {
  WORLD_WIDTH_TILES,
  WORLD_HEIGHT_TILES,
} from '../../types/game'

export const BASIC_WORLD: TileType[][] = Array.from(
  { length: WORLD_HEIGHT_TILES },
  (_, y) =>
    Array.from(
      { length: WORLD_WIDTH_TILES },
      (_, x) => {
        // Pond
        if (x >= 4 && x <= 9 && y >= 3 && y <= 6) {
          return 'water'
        }
        // Forest
if (x >= 2 && x <= 12 && y >= 1 && y <= 8) {
  return 'tree'
}


        // Main vertical road
        if (x === 19 || x === 20) {
          return 'path'
        }

        // Main horizontal road
        if (y === 12 || y === 13) {
          return 'path'
        }

        return 'grass'
      },
    ),
)

