const bgColor = 'black'
const gifURL = 'blinkingheart.gif'
const gifOffsetX = 75
const gifOffsetY = 75
  
function createGif (x, y) {
    const gif = document.createElement('img')
    gif.src = gifURL + '#' + Math.random()
    document.body.appendChild(gif)
    gif.style.position = 'absolute'
    gif.style.left = x + 'px'
    gif.style.top = y + 'px'
}
  
function createGifCircle (num, scale, radius) {
    for (let i = 0; i < num; i++) {
      const cx = window.innerWidth / 2 - gifOffsetX
      const cy = window.innerHeight / 2 - gifOffsetY
      const x = cx + Math.sin(i * scale) * radius
      const y = cy + Math.cos(i * scale) * radius
      createGif(x, y)
    }
}
  
function animate () {

    setTimeout(animate, 3000)
    document.body.innerHTML = ''


    document.body.style.backgroundColor = bgColor
    document.body.style.overflow = 'hidden'


    createGifCircle(30, 0.3, 100)
    setTimeout(createGifCircle, 100, 30, 0.3, 150)
    setTimeout(createGifCircle, 200, 30, 0.3, 160)
    setTimeout(createGifCircle, 300, 30, 0.3, 180)
    setTimeout(createGifCircle, 400, 30, 0.3, 250)
    setTimeout(createGifCircle, 500, 30, 0.3, 300)
    setTimeout(createGifCircle, 600, 100, 1, 360)
    createGifCircle(1, 0.6, 1)

}

const changeColor = () => {
    console.log('hello')
    const h = Math.random() * 360
    const s = 25 + 70 * Math.random() + '%'
    const l = 90 + '%'
    const color = `hsl(${h}, ${s}, ${l})`
    document.body.style.backgroundColor = color
    setTimeout(changeColor, 500)
}
 
window.addEventListener('load', animate)

changeColor()





