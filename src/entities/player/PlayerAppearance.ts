export type SkinTone =
  | 'light'
  | 'peach'
  | 'tan'
  | 'deep'

export type HairStyle =
  | 'short'
  | 'long'
  | 'ponytail'

export type Outfit =
  | 'dress'
  | 'hoodie'
  | 'pajamas'

export type Accessory =
  | 'none'
  | 'bow'
  | 'hat'
  | 'backpack'

export interface PlayerAppearance {
  skinTone: SkinTone
  hairStyle: HairStyle
  outfit: Outfit
  accessory: Accessory
}

export const SKIN_TONES: SkinTone[] = [
  'light',
  'peach',
  'tan',
  'deep',
]

export const HAIR_STYLES: HairStyle[] = [
  'short',
  'long',
  'ponytail',
]

export const OUTFITS: Outfit[] = [
  'dress',
  'hoodie',
  'pajamas',
]

export const ACCESSORIES: Accessory[] = [
  'none',
  'bow',
  'hat',
  'backpack',
]

export const DEFAULT_PLAYER_APPEARANCE: PlayerAppearance = {
  skinTone: 'peach',
  hairStyle: 'short',
  outfit: 'dress',
  accessory: 'none',
}