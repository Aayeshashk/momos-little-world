import type {
  PlayerAppearance,
} from '../entities/player/PlayerAppearance'

export class AppearanceSystem {
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

  setAppearance(
    appearance: PlayerAppearance,
  ) {
    this.appearance = {
      ...appearance,
    }
  }

  updateAppearance(
    changes: Partial<PlayerAppearance>,
  ) {
    this.appearance = {
      ...this.appearance,
      ...changes,
    }
  }
}