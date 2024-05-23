export const CONFIG = {
  width: 60,
  height: 60,
}

export const LEVELS = {
  LV1: [
    ['brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'tank', null, null, 'brick'],
    ['wall', null, null, null, 'wall'],
    ['wall', 'brick', 'brick', null, 'wall'],
    ['wall', null, null, null, 'wall'],
    ['brick', null, 'tank-hero', null, 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick'],
  ],
  LV2: [
    ['wall', 'wall', 'wall', 'wall', 'wall'],
    ['brick', null, null, null, 'brick'],
    [null, null, null, null, 'brick'],
    ['brick', 'brick', 'brick', null, null],
    ['brick', 'tank', 'brick', null, 'brick'],
    ['brick', null, null, null, 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick'],
  ],
}
