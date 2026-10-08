export type TileType =
  | 'grass'
  | 'path'
  | 'water'
  | 'flower'
  | 'tree'
  | 'building'

export const BLOCKED_TILES: TileType[] = [
  'water',
  'tree',
  'building',
]