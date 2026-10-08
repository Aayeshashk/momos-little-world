import type { LocationType } from '../../types/location'

export interface WorldLocation {
  id: LocationType
  name: string
  x: number
  y: number
  width: number
  height: number
}

export const TOWN_LOCATIONS: WorldLocation[] = [
  {
    id: 'forest',
    name: 'Whispering Forest',
    x: 2,
    y: 1,
    width: 11,
    height: 8,
  },
  {
    id: 'pond',
    name: 'Momo Pond',
    x: 4,
    y: 3,
    width: 6,
    height: 4,
  },
  {
    id: 'park',
    name: 'Cherry Blossom Park',
    x: 3,
    y: 9,
    width: 8,
    height: 3,
  },
  {
    id: 'garden',
    name: 'Sunshine Garden',
    x: 28,
    y: 8,
    width: 9,
    height: 4,
  },
  {
    id: 'house',
    name: "Momo's House",
    x: 4,
    y: 15,
    width: 8,
    height: 6,
  },
  {
    id: 'cafe',
    name: 'Momo Café & Bakery',
    x: 24,
    y: 15,
    width: 9,
    height: 6,
  },
  {
    id: 'shop',
    name: 'Little Star Shop',
    x: 4,
    y: 21,
    width: 8,
    height: 3,
  },
  {
    id: 'town-square',
    name: 'Town Square',
    x: 24,
    y: 21,
    width: 10,
    height: 3,
  },
]