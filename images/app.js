const scoreCount = document.querySelector('#score-count');
const plusOne = document.querySelector('#plus-one');
const plusTwo = document.querySelector('#plus-two');
const reset = document.querySelector('#reset');
const maxSelect = document.querySelector('#max-select');
const numOne = document.querySelector('#num-p-one');
const numTwo = document.querySelector('#num-p-two');


let num1 = 0
let num2 = 0

const resetPoints = () => {    
    num1 = 0;
    num2 = 0;
    numOne.innerText = num1
    numTwo.innerText = num2
    numOne.style.color = '';
    numTwo.style.color = '';}


    plusOne.addEventListener('click', () => {
        num1 ++;
        numOne.innerText = num1
        
       if(num1 === parseInt(maxSelect.value)){
           numOne.style.color = 'green';
           numTwo.style.color = 'red';
       }
       else if(num1 > parseInt(maxSelect.value)){
           resetPoints();
       }
       })


    plusTwo.addEventListener('click', () => {
        num2 ++;
        numTwo.innerText = num2
        
       if(num2 === parseInt(maxSelect.value)){
           numOne.style.color = 'red';
           numTwo.style.color = 'green';
       }
       else if(num2 > parseInt(maxSelect.value)){
        resetPoints();
    }
       })
       

reset.addEventListener('click', resetPoints)
