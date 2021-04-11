// let btn2 = document.querySelector('#btn2');

// // btn2.onclick = function(){
// //     console.log("You clicked me")
// // }


// // let scream = function(){
// //     console.log("AAAAAAA");
// //     console.log('STOP TOUCHING MEE');
// // }
// // let leave  = function(){
// //     console.log(`Huh`)
// // }

// // btn2.onmouseenter= scream;
// // btn2.onmouseleave= leave;

// btn2.addEventListener('click', () => {alert(`you clicked me`)} ) 
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

