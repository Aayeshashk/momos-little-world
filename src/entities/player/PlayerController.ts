import Phaser from 'phaser'
import type { Player } from './Player'
import { PlayerRenderer } from './PlayerRenderer'
import { CollisionSystem } from '../../systems/CollisionSystem'

export class PlayerController {
  private scene: Phaser.Scene
  private player: Player
  private collisionSystem: CollisionSystem

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  private keys: Record<
    'W' | 'A' | 'S' | 'D',
    Phaser.Input.Keyboard.Key
  >

  constructor(
    scene: Phaser.Scene,
    player: Player,
  ) {
    this.scene = scene
    this.player = player
    this.collisionSystem = new CollisionSystem()

    this.cursors =
      scene.input.keyboard!.createCursorKeys()

    this.keys = scene.input.keyboard!.addKeys(
      'W,A,S,D',
    ) as Record<
      'W' | 'A' | 'S' | 'D',
      Phaser.Input.Keyboard.Key
    >
  }

  update() {
    let velocityX = 0
    let velocityY = 0

    if (
      this.cursors.left.isDown ||
      this.keys.A.isDown
    ) {
      velocityX = -1
      this.player.setDirection('left')
    }

    if (
      this.cursors.right.isDown ||
      this.keys.D.isDown
    ) {
      velocityX = 1
      this.player.setDirection('right')
    }

    if (
      this.cursors.up.isDown ||
      this.keys.W.isDown
    ) {
      velocityY = -1
      this.player.setDirection('up')
    }

    if (
      this.cursors.down.isDown ||
      this.keys.S.isDown
    ) {
      velocityY = 1
      this.player.setDirection('down')
    }

    if (velocityX === 0 && velocityY === 0) {
      this.player.isMoving = false
      this.player.animationFrame = 0
      this.player.animationTimer = 0
      return
    }

    this.player.isMoving = true

    this.player.animationTimer +=
      this.scene.game.loop.delta

    if (this.player.animationTimer >= 150) {
      this.player.animationTimer = 0

      this.player.animationFrame =
        (this.player.animationFrame + 1) % 2

      this.player.updateAnimation()
    }

    const length = Math.sqrt(
      velocityX * velocityX +
      velocityY * velocityY,
    )

    velocityX /= length
    velocityY /= length

    const delta =
      this.scene.game.loop.delta / 1000

    const nextX =
      this.player.x +
      velocityX * this.player.speed * delta

    const nextY =
      this.player.y +
      velocityY * this.player.speed * delta

    const blocked =
      this.collisionSystem.isPositionBlocked(
        nextX,
        nextY,
        PlayerRenderer.WIDTH,
        PlayerRenderer.HEIGHT,
      )

    if (!blocked) {
      this.player.x = nextX
      this.player.y = nextY
    }
  }
}