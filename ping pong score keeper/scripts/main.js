
let img = document.querySelector('#img-pp');
let pWinner = document.createElement('h2');
let heading = document.querySelector('#heading')


const p1 = {
    score: 0,
    button: document.querySelector('#btn-pl-one'),
    display: document.querySelector('#pl-one-score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#btn-pl-two'),
    display: document.querySelector('#pl-two-score')
}

const resetButton = document.querySelector('#btn-reset');
const winningScoreSelect = document.querySelector('#score-select');
let winningScore = 5;
let isGameOver = false;



p1.button.addEventListener('click', function () {
    if (!isGameOver) {
        p1.score += 1;
        if (p1.score === winningScore) {
            isGameOver = true;
            p1.display.classList.add('winner');
            p2.display.classList.add('looser');
            p1.button.disabled = true;
            p2.button.disabled = true;
            img.src = "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            pWinner.innerText = `Player 1 win!`;
            heading.insertAdjacentElement('afterend',pWinner);
        }
        p1.display.textContent = p1.score;
    }

});


p2.button.addEventListener('click', function () {
    if (!isGameOver) {
        p2.score += 1;
        if (p2.score === winningScore) {
            isGameOver = true;
            p2.display.classList.add('winner');
            p1.display.classList.add('looser');
            p2.button.disabled = true;
            p1.button.disabled = true;
            img.src = "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            pWinner.innerText = `Player 2 win!`;
            heading.insertAdjacentElement('afterend',pWinner);
        }
        p2.display.textContent = p2.score;
    }
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
    console.log(`winningScore is: ${winningScore}`)
})

resetButton.addEventListener('click', reset)


function reset(){
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'looser')
        p.button.disabled = false;
    }
    img.src= "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGluZyUyMHBvbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    pWinner.remove();
}



