const bgColor = 'black'
const gifURL = 'heart.gif'
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
  
function setup () {
    document.body.style.backgroundColor = bgColor
    document.body.style.overflow = 'hidden'
    createGifCircle(30, 0.3, 100)
    setTimeout(createGifCircle, 100, 30, 0.3, 150)
    setTimeout(createGifCircle, 200, 30, 0.3, 160)
    setTimeout(createGifCircle, 250, 30, 0.3, 190)
    setTimeout(createGifCircle, 300, 30, 0.3, 210)
    setTimeout(createGifCircle, 300, 30, 0.3, 230)
    setTimeout(createGifCircle, 350, 30, 0.3, 250)
    setTimeout(createGifCircle, 350, 30, 0.3, 270)
    setTimeout(createGifCircle, 400, 30, 0.3, 300)
    setTimeout(createGifCircle, 400, 30, 0.3, 350)
    createGifCircle(1, 0.6, 1)
}

const changeColor = () => {
    console.log('hello')
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const color = `rgb(${r}, ${g - 70}, ${b + 80})`
    document.body.style.backgroundColor = color
    setTimeout(changeColor, 300)
}
 
window.addEventListener('load', setup)

changeColor()

setTimeout(() => {
    document.location.reload();
}, 1500);
