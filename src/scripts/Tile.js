class Tile {
  constructor(src, x, y) {
    this.img = new Image()
    this.img.src = src
    this.x = x
    this.y = y
  }

  onLoad(callback) {
    this.img.onload = callback
  }

  render(context) {
    context.drawImage(this.img, this.x, this.y)
  }
}

export default Tile
