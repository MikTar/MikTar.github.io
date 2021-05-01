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
// let heading = document.querySelector('#heading');
// let btn1 = document.querySelector('#btn1');
// let body = document.querySelector('body');
// btn1.addEventListener('click', () => {
//     let r = (Math.floor(Math.random() * 255) + 1);
//     let g = (Math.floor(Math.random() * 255) + 1);
//     let b = (Math.floor(Math.random() * 255) + 1);
//     let randomRgbColor = `${r}, ${g}, ${b}`
//     heading.innerText = `rgb(${randomRgbColor})`
//     body.style.backgroundColor = `rgb(${randomRgbColor})`

// })
//-----------------------------------------------------------------------------------//
// let makeRandomColor = function(){
//     let r = (Math.floor(Math.random() * 255) + 1);
//     let g = (Math.floor(Math.random() * 255) + 1);
//     let b = (Math.floor(Math.random() * 255) + 1);
//     return `rgb(${r}, ${g}, ${b})`
// }

// let buttons = document.querySelectorAll('button');
// let h1s = document.querySelectorAll('h1');

// function colorize(groupe){
//     for(let element of groupe){
//         element.addEventListener('click', () => {
//             element.style.backgroundColor=makeRandomColor();
//             element.style.color=makeRandomColor();
//         })
//     }
// }

// colorize(buttons);
// colorize(h1s);

// //----------OR---//////////////

// let makeRandomColor = function(){
//     let r = (Math.floor(Math.random() * 255) + 1);
//     let g = (Math.floor(Math.random() * 255) + 1);
//     let b = (Math.floor(Math.random() * 255) + 1);
//     return `rgb(${r}, ${g}, ${b})`
// }

// function colorize(){
//     this.style.backgroundColor = makeRandomColor();
//     this.style.color = makeRandomColor();
// }


// let buttons = document.querySelectorAll('button');
// for(let button of buttons){
//     button.addEventListener('click', colorize)
// }

// let h1s = document.querySelectorAll('h1');
// for(let h1 of h1s){
//     h1.addEventListener('click',colorize)
// }


//-------------------------------------------------------------------//

//-----------------Обработка Формы------------------------------------//
// let input = document.querySelector('#in');
// let pass = document.querySelector('#pass');
// let btn = document.querySelector('#btn')

// input.addEventListener('keydown', function(evt){
//     if(evt.key === 'Enter'){
//         if(input.value === '' || input.value === ' ' || pass.value === '' || pass.value === ' '){
//             alert('Enter Id and PASS!')
//         }
//         else if(input.value ==='Admin' && pass.value === '123'){
//             alert(`Acces allowed`)
//         }
//     }
    
// })
// pass.addEventListener('keydown', function(evt){
//     if(evt.key === 'Enter'){
//         if(input.value === '' || input.value === ' ' || pass.value === '' || pass.value === ' '){
//             alert('Enter Id and PASS!')
//         }
//         else if(input.value ==='Admin' && pass.value === '123'){
//             alert(`Acces allowed`)
//         }
//     }
    
// })
// btn.addEventListener('click', function(){
   
//         if(input.value === '' || input.value === ' ' || pass.value === '' || pass.value === ' '){
//             alert('Enter Id and PASS!')
//         }
//         else if(input.value ==='Admin' && pass.value === '123'){
//             alert(`Acces allowed`)
//         }
    
    
// })
//----------------------- ---------------------------------------------------//

//-------------------------TWEETS--------------------------------------//
// let form = document.querySelector('#tweetForm');
// let ul = document.querySelector('#tweets');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let username = form.elements.username;
//     let tweet = form.elements.tweet;
//     let newTweet = document.createElement('li');
//     let bTag = document.createElement('b');
//     bTag.append(username.value);
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet.value}`)
//     ul.append(newTweet);
//     username.value = '';
//     tweet.value='';

  
// });


//-------------------------------------------------------------------------//

// let input = document.querySelector('#username');
// let h2 = document.querySelector('h2');

// // input.addEventListener('change', function(){
// //     console.log('skasfk')
// // })
// input.addEventListener('input', function(){
//         h2.innerText = input.value; 
//     })
    


//----------------------------------------------------------------//


//------------------------------DELETING TWEETS -----------------------//
let form = document.querySelector('#form');
let username = form.elements.username;
let tweet = form.elements.tweet;
let h2 = document.querySelector('#h2');
let asideLeft = document.querySelector('.aside-left');
let asideRight = document.querySelector('.aside-right');
let submit = document.querySelector('#submit');

form.addEventListener('submit', function(evt){
    if(username.value===''){alert('Enter username'); return}
    if(tweet.value===''){alert('Enter tweet'); return}



    evt.preventDefault();
    let ul = document.createElement('ul');
    h2.insertAdjacentElement("afterend",ul);
    let newTweet = document.createElement('li');
    let boldUsername = document.createElement('b');
    boldUsername.append(`${username.value} : `);
    let tweetValue = tweet.value;
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.toggle('delete-button')
    deleteBtn.innerText = 'delete';
    newTweet.append(boldUsername);
    newTweet.append(tweetValue);
    newTweet.append(deleteBtn);
    ul.append(newTweet);
    ul.classList.add('fadeIn')
    username.value = '';
    tweet.value = '';


    ul.addEventListener('click', function(e){
         e.target.nodeName === 'BUTTON' && newTweet.remove();
    })

})

// submit.addEventListener('click', function(){
   

// })





//--------------------------------------------------------------------------------//












