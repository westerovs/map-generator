const CONFIG = {
  width: 60,
  height: 60,
}

const TILES = {
  1: {type: 'Brick', src: './src/assets/images/brick.png'},
  2: {type: 'Wall', src: './src/assets/images/wall.png'},
  3: {type: 'Tank', src: './src/assets/images/tank.png'},
  4: {type: 'TankHero', src: './src/assets/images/tank-hero.png'},
}

const LEVELS = {
  LV1: [
    [1, 1, 1, 1, 1],
    [1, 3, 0, 0, 1],
    [2, 0, 0, 0, 2],
    [2, 1, 1, 0, 2],
    [2, 0, 0, 0, 2],
    [1, 0, 4, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  LV2: [
    [2, 2, 2, 2, 2],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 3, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
}

export {
  CONFIG,
  TILES,
  LEVELS,
}
