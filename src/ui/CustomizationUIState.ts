import type {
  SkinTone,
  HairStyle,
  Outfit,
  Accessory,
} from '../entities/player/PlayerAppearance'

export type CustomizationCategory =
  | 'skinTone'
  | 'hairStyle'
  | 'outfit'
  | 'accessory'

export interface CustomizationUIState {
  activeCategory: CustomizationCategory
  selectedSkinTone: SkinTone
  selectedHairStyle: HairStyle
  selectedOutfit: Outfit
  selectedAccessory: Accessory
}

export const DEFAULT_CUSTOMIZATION_UI_STATE: CustomizationUIState = {
  activeCategory: 'skinTone',
  selectedSkinTone: 'peach',
  selectedHairStyle: 'short',
  selectedOutfit: 'dress',
  selectedAccessory: 'none',
}