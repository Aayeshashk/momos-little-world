import type {
  CustomizationCategory,
  CustomizationUIState,
} from './CustomizationUIState'

import type {
  SkinTone,
  HairStyle,
  Outfit,
  Accessory,
} from '../entities/player/PlayerAppearance'

import type { Player } from '../entities/player/Player'

export class CustomizationUIController {
  private state: CustomizationUIState

  constructor(
    initialState: CustomizationUIState,
  ) {
    this.state = {
      ...initialState,
    }
  }

  getState(): CustomizationUIState {
    return {
      ...this.state,
    }
  }

  setCategory(
    category: CustomizationCategory,
  ) {
    this.state.activeCategory = category
  }

  getActiveCategory(): CustomizationCategory {
    return this.state.activeCategory
  }

  setSkinTone(
    skinTone: SkinTone,
  ) {
    this.state.selectedSkinTone = skinTone
  }

  setHairStyle(
    hairStyle: HairStyle,
  ) {
    this.state.selectedHairStyle = hairStyle
  }

  setOutfit(
    outfit: Outfit,
  ) {
    this.state.selectedOutfit = outfit
  }

  setAccessory(
    accessory: Accessory,
  ) {
    this.state.selectedAccessory = accessory
  }

  applyToPlayer(
    player: Player,
  ) {
    player.setAppearance({
      skinTone: this.state.selectedSkinTone,
      hairStyle: this.state.selectedHairStyle,
      outfit: this.state.selectedOutfit,
      accessory: this.state.selectedAccessory,
    })
  }
}