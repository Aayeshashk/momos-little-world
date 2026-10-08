import Phaser from 'phaser'
import type { PlayerDirection } from './Player'
import type { PlayerAppearance } from './PlayerAppearance'

export class PlayerRenderer {
  public static readonly WIDTH = 16
  public static readonly HEIGHT = 24

  private scene: Phaser.Scene

  constructor(scene: Phaser.Scene) {
    this.scene = scene
  }

  render(
    appearance: PlayerAppearance,
    direction: PlayerDirection = 'down',
    animationFrame = 0,
  ): Phaser.GameObjects.Container {
    const character = this.scene.add.container(0, 0)

    const graphics = this.scene.add.graphics()

    this.drawBody(
      graphics,
      appearance,
      animationFrame,
    )

    this.drawFace(
      graphics,
      direction,
    )

    this.drawHair(
      graphics,
      appearance,
      direction,
    )

    this.drawOutfit(
      graphics,
      appearance,
    )

    this.drawShoes(
      graphics,
    )

    this.drawAccessory(
      graphics,
      appearance,
      direction,
    )

    character.add(graphics)

    return character
  }

  private drawBody(
    graphics: Phaser.GameObjects.Graphics,
    appearance: PlayerAppearance,
    animationFrame: number,
  ) {
    const skinColors: Record<
      PlayerAppearance['skinTone'],
      number
    > = {
      light: 0xffdfc4,
      peach: 0xf7c9a9,
      tan: 0xd99b72,
      deep: 0x9c6048,
    }

    graphics.fillStyle(
      skinColors[appearance.skinTone],
      1,
    )

    // Head
    graphics.fillRect(
      -6,
      -12,
      12,
      10,
    )

    // Neck
    graphics.fillRect(
      -2,
      -2,
      4,
      3,
    )

    // Arms
    graphics.fillRect(
      -7,
      1,
      3,
      8,
    )

    graphics.fillRect(
      4,
      1,
      3,
      8,
    )

    // Small movement variation.
    // Frame 0 = normal position.
    // Frame 1 = slightly shifted arms.
    if (animationFrame === 1) {
      graphics.fillRect(
        -7,
        2,
        3,
        7,
      )

      graphics.fillRect(
        4,
        0,
        3,
        8,
      )
    }
  }

  private drawFace(
    graphics: Phaser.GameObjects.Graphics,
    direction: PlayerDirection,
  ) {
    const eyeColor = 0x4b3542

    graphics.fillStyle(
      eyeColor,
      1,
    )

    if (direction === 'down') {
      // Eyes
      graphics.fillRect(
        -4,
        -7,
        2,
        2,
      )

      graphics.fillRect(
        2,
        -7,
        2,
        2,
      )

      // Mouth
      graphics.fillRect(
        -1,
        -3,
        2,
        1,
      )

      return
    }

    if (direction === 'left') {
      graphics.fillRect(
        -4,
        -7,
        2,
        2,
      )

      graphics.fillRect(
        -3,
        -3,
        1,
        1,
      )

      return
    }

    if (direction === 'right') {
      graphics.fillRect(
        2,
        -7,
        2,
        2,
      )

      graphics.fillRect(
        2,
        -3,
        1,
        1,
      )

      return
    }

    // Facing up:
    // No visible eyes or mouth.
  }

  private drawHair(
    graphics: Phaser.GameObjects.Graphics,
    appearance: PlayerAppearance,
    direction: PlayerDirection,
  ) {
    const hairColor = 0x5a3d4b

    graphics.fillStyle(
      hairColor,
      1,
    )

    if (appearance.hairStyle === 'short') {
      graphics.fillRect(
        -7,
        -14,
        14,
        5,
      )

      if (direction === 'up') {
        graphics.fillRect(
          -8,
          -11,
          16,
          6,
        )
      } else {
        graphics.fillRect(
          -8,
          -11,
          3,
          7,
        )

        graphics.fillRect(
          5,
          -11,
          3,
          7,
        )
      }
    }

    if (appearance.hairStyle === 'long') {
      graphics.fillRect(
        -7,
        -14,
        14,
        5,
      )

      if (direction === 'up') {
        graphics.fillRect(
          -8,
          -11,
          16,
          13,
        )
      } else {
        graphics.fillRect(
          -8,
          -11,
          4,
          13,
        )

        graphics.fillRect(
          4,
          -11,
          4,
          13,
        )
      }
    }

    if (appearance.hairStyle === 'ponytail') {
      graphics.fillRect(
        -7,
        -14,
        14,
        5,
      )

      if (direction === 'up') {
        graphics.fillRect(
          -8,
          -11,
          16,
          6,
        )

        graphics.fillRect(
          7,
          -7,
          4,
          6,
        )
      } else {
        graphics.fillRect(
          -8,
          -11,
          3,
          7,
        )

        graphics.fillRect(
          5,
          -11,
          3,
          7,
        )

        graphics.fillRect(
          7,
          -10,
          4,
          5,
        )
      }
    }
  }

  private drawOutfit(
    graphics: Phaser.GameObjects.Graphics,
    appearance: PlayerAppearance,
  ) {
    const outfitColors: Record<
      PlayerAppearance['outfit'],
      number
    > = {
      dress: 0xf3a6c8,
      hoodie: 0xb9a7df,
      pajamas: 0x9ed8e8,
    }

    graphics.fillStyle(
      outfitColors[appearance.outfit],
      1,
    )

    if (appearance.outfit === 'dress') {
      graphics.fillRect(
        -6,
        1,
        12,
        9,
      )

      graphics.fillRect(
        -8,
        5,
        16,
        5,
      )
    }

    if (appearance.outfit === 'hoodie') {
      graphics.fillRect(
        -7,
        1,
        14,
        9,
      )

      graphics.fillRect(
        -4,
        0,
        8,
        3,
      )
    }

    if (appearance.outfit === 'pajamas') {
      graphics.fillRect(
        -6,
        1,
        12,
        9,
      )
    }
  }

  private drawShoes(
    graphics: Phaser.GameObjects.Graphics,
  ) {
    graphics.fillStyle(
      0x5a3d4b,
      1,
    )

    graphics.fillRect(
      -6,
      10,
      5,
      3,
    )

    graphics.fillRect(
      1,
      10,
      5,
      3,
    )
  }

  private drawAccessory(
    graphics: Phaser.GameObjects.Graphics,
    appearance: PlayerAppearance,
    direction: PlayerDirection,
  ) {
    if (appearance.accessory === 'none') {
      return
    }

    if (appearance.accessory === 'bow') {
      graphics.fillStyle(
        0xf3a6c8,
        1,
      )

      graphics.fillRect(
        -10,
        -13,
        4,
        4,
      )

      graphics.fillRect(
        6,
        -13,
        4,
        4,
      )

      graphics.fillRect(
        -2,
        -12,
        4,
        3,
      )
    }

    if (appearance.accessory === 'hat') {
      graphics.fillStyle(
        0xd6b3df,
        1,
      )

      graphics.fillRect(
        -8,
        -16,
        16,
        3,
      )

      graphics.fillRect(
        -5,
        -19,
        10,
        4,
      )
    }

    if (appearance.accessory === 'backpack') {
      graphics.fillStyle(
        0xc47f83,
        1,
      )

      // Backpack is most visible from behind.
      if (direction === 'up') {
        graphics.fillRect(
          -9,
          1,
          18,
          9,
        )
      } else {
        graphics.fillRect(
          -9,
          2,
          3,
          8,
        )

        graphics.fillRect(
          6,
          2,
          3,
          8,
        )
      }
    }
  }
}