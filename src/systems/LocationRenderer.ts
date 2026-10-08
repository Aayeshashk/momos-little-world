import Phaser from 'phaser'
import { TOWN_LOCATIONS } from '../data/world/locations'
import { TILE_SIZE } from '../types/game'
import type { LocationType } from '../types/location'

export class LocationRenderer {
  private scene: Phaser.Scene

  constructor(scene: Phaser.Scene) {
    this.scene = scene
  }

  render() {
    TOWN_LOCATIONS.forEach((location) => {
      this.drawLocation(
        location.id,
        location.x,
        location.y,
        location.width,
        location.height,
      )
    })
  }

  private drawLocation(
    type: LocationType,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    const graphics = this.scene.add.graphics()

    const colors: Record<LocationType, number> = {
      forest: 0x4f7654,
      pond: 0x6db6c9,
      park: 0xd9b5c8,
      garden: 0xa8c98b,
      house: 0xc47f83,
      cafe: 0xe8b6a8,
      shop: 0xd6b3df,
      'town-square': 0xe8c9a8,
    }

    graphics.fillStyle(colors[type], 0.75)

    graphics.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      width * TILE_SIZE,
      height * TILE_SIZE,
    )
    this.scene.add.text(
  x * TILE_SIZE + 4,
  y * TILE_SIZE + 4,
  type,
  {
    fontSize: '8px',
    color: '#ffffff',
  },
)
  }
}