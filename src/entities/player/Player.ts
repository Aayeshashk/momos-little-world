import Phaser from 'phaser'
import {
  DEFAULT_PLAYER_APPEARANCE,
  type PlayerAppearance,
} from './PlayerAppearance'
import { PlayerRenderer } from './PlayerRenderer'
import { AppearanceSystem } from '../../systems/AppearanceSystem'
import { CustomizationSystem } from '../../systems/CustomizationSystem'

export type PlayerDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'

export class Player extends Phaser.GameObjects.Container {
  public appearance: PlayerAppearance
  public direction: PlayerDirection = 'down'
  public speed = 80
  public isMoving = false
  public animationFrame = 0
  public animationTimer = 0

  private character: Phaser.GameObjects.Container
  private renderer: PlayerRenderer
  private appearanceSystem: AppearanceSystem
  private customizationSystem: CustomizationSystem

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
  ) {
    super(scene, x, y)

    this.appearance = {
      ...DEFAULT_PLAYER_APPEARANCE,
    }

    this.appearanceSystem =
      new AppearanceSystem(
        this.appearance,
      )

    this.customizationSystem =
      new CustomizationSystem(
        this.appearance,
      )

    this.renderer = new PlayerRenderer(scene)

    this.character = this.renderer.render(
      this.appearance,
      this.direction,
      this.animationFrame,
    )

    this.add(this.character)

    scene.add.existing(this)
  }

  setDirection(
    direction: PlayerDirection,
  ) {
    if (this.direction === direction) {
      return
    }

    this.direction = direction

    this.refreshAppearance()
  }

  setAppearance(
    appearance: PlayerAppearance,
  ) {
    this.appearanceSystem.setAppearance(
      appearance,
    )

    this.customizationSystem.setAppearance(
      appearance,
    )

    this.appearance =
      this.customizationSystem.getAppearance()

    this.refreshAppearance()
  }

  updateAppearance(
    changes: Partial<PlayerAppearance>,
  ) {
    this.appearanceSystem.updateAppearance(
      changes,
    )

    this.customizationSystem.setAppearance(
      this.appearanceSystem.getAppearance(),
    )

    this.appearance =
      this.customizationSystem.getAppearance()

    this.refreshAppearance()
  }

  setSkinTone(
    skinTone: PlayerAppearance['skinTone'],
  ) {
    this.customizationSystem.setSkinTone(
      skinTone,
    )

    this.refreshFromCustomization()
  }

  setHairStyle(
    hairStyle: PlayerAppearance['hairStyle'],
  ) {
    this.customizationSystem.setHairStyle(
      hairStyle,
    )

    this.refreshFromCustomization()
  }

  setOutfit(
    outfit: PlayerAppearance['outfit'],
  ) {
    this.customizationSystem.setOutfit(
      outfit,
    )

    this.refreshFromCustomization()
  }

  setAccessory(
    accessory: PlayerAppearance['accessory'],
  ) {
    this.customizationSystem.setAccessory(
      accessory,
    )

    this.refreshFromCustomization()
  }

  getAppearance(): PlayerAppearance {
    return this.customizationSystem.getAppearance()
  }

  updateAnimation() {
    this.refreshAppearance()
  }

  private refreshFromCustomization() {
    this.appearance =
      this.customizationSystem.getAppearance()

    this.appearanceSystem.setAppearance(
      this.appearance,
    )

    this.refreshAppearance()
  }

  private refreshAppearance() {
    const oldCharacter = this.character

    this.character = this.renderer.render(
      this.appearance,
      this.direction,
      this.animationFrame,
    )

    this.remove(oldCharacter, true)
    this.add(this.character)
  }
}