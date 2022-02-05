const p1 = {
    score: 0,
    button: document.querySelector('#plus-one'),
    display: document.querySelector('#num-p-one')
}

const p2 = {
    score: 0,
    button: document.querySelector('#plus-two'),
    display: document.querySelector('#num-p-two')
}


const scoreCount = document.querySelector('#score-count');
const reset = document.querySelector('#reset');
const maxSelect = document.querySelector('#max-select');

let winningScore = 5;
let isGameOver = false;

function addOne(player, opponent){
        if(!isGameOver){
            player.score ++;
            if(player.score === winningScore){
                player.display.style.color = 'green';
                opponent.display.style.color = 'red';
                player.button.disabled = true
                opponent.button.disabled = true
                isGameOver = true
            }
            player.display.textContent = player.score;
        }
}

p1.button.addEventListener('click', () => addOne(p1, p2));
p2.button.addEventListener('click', () => addOne(p2, p1));

function resetScore(){
    isGameOver = false;
    for(let p of [p1, p2]){
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.style.color = 'black'
}
} 

reset.addEventListener('click', resetScore)

maxSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetScore();
})