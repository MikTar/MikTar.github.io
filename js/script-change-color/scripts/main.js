
let heading = document.querySelector('#heading');
let btn1 = document.querySelector('#btn1');
let body = document.querySelector('body');
btn1.addEventListener('click', () => {
    let r = (Math.floor(Math.random() * 255) + 1);
    let g = (Math.floor(Math.random() * 255) + 1);
    let b = (Math.floor(Math.random() * 255) + 1);
    let randomRgbColor = `${r}, ${g}, ${b}`
    heading.innerText = `rgb(${randomRgbColor})`
    body.style.backgroundColor = `rgb(${randomRgbColor})`

})

