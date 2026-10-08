import Phaser from 'phaser'
import { Player } from '../entities/player/Player'
import { PlayerController } from '../entities/player/PlayerController'
import { LocationRenderer } from '../systems/LocationRenderer'
import { WorldRenderer } from '../systems/WorldRenderer'

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

    const player = new Player(
      this,
      320,
      240,
    )

    const playerController =
      new PlayerController(
        this,
        player,
      )

    this.cameras.main.startFollow(player)

    this.events.on('update', () => {
      playerController.update()
    })

    this.add.text(
      20,
      110,
      "Momo's Little World",
      {
        fontSize: '16px',
        color: '#5a3d4b',
      },
    )
  }
}