import type {
  PlayerAppearance,
  SkinTone,
  HairStyle,
  Outfit,
  Accessory,
} from '../entities/player/PlayerAppearance'

export class CustomizationSystem {
  private appearance: PlayerAppearance

  constructor(
    initialAppearance: PlayerAppearance,
  ) {
    this.appearance = {
      ...initialAppearance,
    }
  }

  getAppearance(): PlayerAppearance {
    return {
      ...this.appearance,
    }
  }

  setSkinTone(
    skinTone: SkinTone,
  ) {
    this.appearance.skinTone = skinTone
  }

  setHairStyle(
    hairStyle: HairStyle,
  ) {
    this.appearance.hairStyle = hairStyle
  }

  setOutfit(
    outfit: Outfit,
  ) {
    this.appearance.outfit = outfit
  }

  setAccessory(
    accessory: Accessory,
  ) {
    this.appearance.accessory = accessory
  }

  setAppearance(
    appearance: PlayerAppearance,
  ) {
    this.appearance = {
      ...appearance,
    }
  }
}