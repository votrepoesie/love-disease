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
      const divident = Math.random() * 2 + 0.7
      const x = cx + Math.sin(i * scale) * radius / divident
      const y = cy + Math.cos(i * scale) * radius / divident
      createGif(x, y)
    }
}
  
function animate () {

    setTimeout(animate, 1500)
    document.body.innerHTML = '' 
    //recursive call to itself; remove all the other elements by clearing the body's innerHTML

    document.body.style.overflow = 'hidden'

    createGifCircle(30, 0.3, 100)
    setTimeout(createGifCircle, 300, 30, 0.3, 150)
    setTimeout(createGifCircle, 400, 30, 0.3, 160)
    setTimeout(createGifCircle, 500, 30, 0.3, 180)
    setTimeout(createGifCircle, 600, 30, 0.3, 200)
    setTimeout(createGifCircle, 700, 30, 0.3, 230)
    setTimeout(createGifCircle, 800, 30, 0.3, 260)
    setTimeout(createGifCircle, 900, 30, 0.3, 290)
    setTimeout(createGifCircle, 1000, 30, 0.3, 320)
    setTimeout(createGifCircle, 1100, 30, 0.3, 350)
    setTimeout(createGifCircle, 1200, 30, 0.3, 500)

}

const changeColor = () => {
    console.log('hello')
    const h = Math.random() * 360
    const s = 25 + 70 * Math.random() + '%'
    const l = 90 + '%'
    const color = `hsl(${h}, ${s}, ${l})`
    document.body.style.backgroundColor = color
    setTimeout(changeColor, 1200)
    //want to smooth out transitions between colors
}
 
window.addEventListener('load', animate)

changeColor()





