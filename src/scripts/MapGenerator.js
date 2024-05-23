import {CONFIG, TILES} from './config.js'
import Tile from './Tile.js'

export default class MapGenerator {
  constructor(ctx) {
    this.ctx = ctx
  }

  generate = (level) => {
    for (let row = 0; row < level.length; row++) {
      for (let col = 0; col < level[row].length; col++) {

        const tileCode = level[row][col]
        if (tileCode === 0) continue

        this.createTile(tileCode, col, row)
      }
    }
  }

  createTile = (tileCode, col, row) => {
    const tileData = TILES[tileCode]
    if (!tileData) return

    const x = col * CONFIG.width
    const y = row * CONFIG.height

    // добавьте проверку на тип тайла и создавайте новые сущности тут
    let tile = new Tile(tileData.src, x, y)

    tile.onLoad(() => {
      this.ctx.drawImage(tile.img, tile.x, tile.y)
    })
  }
}
