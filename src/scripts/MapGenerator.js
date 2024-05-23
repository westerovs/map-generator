import {CONFIG} from './config.js'
import Brick from './Brick.js'

export default class MapGenerator {
  constructor(ctx) {
    this.ctx = ctx
    this.cells = []
  }

  generate = (level) => {
    for (let row = 0; row < level.length; row++) {
      for (let col = 0; col < level[row].length; col++) {

        const srcKey = level[row][col]
        if (!srcKey) continue

        this.createCell(srcKey, col, row)
      }
    }
  }

  createCell = (texture, col, row) => {
    const x = col * CONFIG.width
    const y = row * CONFIG.height

    const brick = new Brick(`./src/assets/images/${texture}.png`, x, y)
    brick.onLoad(() => {
      this.ctx.drawImage(brick.img, brick.x, brick.y)
      this.cells.push(brick)
    })
  }
}
