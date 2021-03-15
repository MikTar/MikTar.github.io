
let maxNum = parseInt(prompt('Enter max number'));

while (!maxNum){
    maxNum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt('Enter your first guess'));
while(!guess){
    guess = parseInt(prompt('Enter a valid guess'));
}

let attempts = 0;

while (parseInt(guess) !== targetNum) {  
    attempts++;
    if(guess === 'q') {
        attempts--;
       break; 
       } 
    if(guess > targetNum) {
       guess= prompt('Too high, try another one      (type "Q" to quit)');
     
    } 
    else if (guess <targetNum) {
        guess = prompt('Too low,try another one      (type "Q" to quit)');
    }
    else if (!parseInt(guess)) {
        guess = prompt('Enter a valid guess       (type "Q" to quit)');
   }
   
}

if (guess = 'q'){
   alert(`Ok...quit... You used ${attempts} guesses. The answer was ${targetNum}`)
}
else if (guess === targetNum) {
    alert(`You win! It took you ${attempts} guesses`)
}
console.log(`targetNum is ${targetNum}`)






















// const arr=[
//     ['a','b','c'],
//     ['d','e','f','j'],
//     ['h','i','g','k','l']
// ]

// for (let i = 0; i < arr.length; i++){
//     row = arr[i]

//     for(let j =0 ; j<row.length; j++ )
//     console.log(row[j])
// }


// for(let row of arr){
//     for(let l of row){
//         console.log(l)
//     }
// }
