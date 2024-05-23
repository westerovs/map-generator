import {CONFIG, LEVELS} from './config.js'
import MapGenerator from './MapGenerator.js'

export default class Game {
  constructor() {
    this.canvas = document.querySelector('#game')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = CONFIG.width * 5
    this.canvas.height = CONFIG.height * 7

    this.mapGenerator = new MapGenerator(this.ctx)
  }

  init = () => {
    this.generateMap()
  }

  generateMap = () => {
    this.mapGenerator.generate(LEVELS.LV1)
  }
}










