let operator = '';
let previousVal = '';
let currentVal = '';

document.addEventListener("DOMContentLoaded", function () {
    let numbers = document.querySelectorAll('.numbers');
    let operators = document.querySelectorAll('.operators');
    let clear = document.querySelector('.clear');
    let equals = document.querySelector('.equals');
    let decimal = document.querySelector('.decimal');
    let previous = document.querySelector('.previous');
    let current = document.querySelector('.current');

    // get the number that is clicked, set the value in current to the value
    numbers.forEach((number) => number.addEventListener("click", function(e){
        getNumber(e.target.textContent)
        current.textContent = currentVal
    }))

    operators.forEach((op) => op.addEventListener("click", function (e){
        getOperator(e.target.textContent)
        previous.textContent = previousVal + " " + operator /*put number and operator in upper screen */
        current.textContent = currentVal;
    }))

    clear.addEventListener("click", function(){
        previousVal = '';
        currentVal = '';
        operator = '';
        previous.textContent = currentVal
        current.textContent = currentVal
    })

    equals.addEventListener("click", function(e){
        calculate()
        current.textContent = previousVal  /* make the answer appear in the screen, and clear the previous value form the top */
        previous.textContent = ''
    })

    decimal.addEventListener("click", function(e){
        addDecimal();
    })

})


function getNumber(num){
    if(currentVal.length <=7){
        currentVal += num       /*show the button clicked on the screen, with a max of 7*/
    }
}

function getOperator(op){
    operator = op;
    previousVal = currentVal;
    currentVal = '';
}

function calculate(){
    previousVal = Number(previousVal);      /*convert to a number */
    currentVal = Number(currentVal);

    if(operator === "+"){
        previousVal += currentVal
    } else if(operator === "-"){
        previousVal -= currentVal
    } else if(operator === "*"){
        previousVal *= currentVal
    } else if(operator === "/"){
        previousVal /= currentVal
    }

    previousVal = roundNumber(previousVal);  /* Run the round function */
    previousVal = previousVal.toString();
    currentVal = currentVal.toString();

}

// Round the number to 3 decimal places
function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentVal.includes(".")){
        currentVal += '.';
    }
}


// Dark mode
const container = document.querySelector('.container');
const calc = document.querySelector('.calculator')
const toggle = document.querySelector('.toggle')

// Add the class dark to the container when the toggle button is clicked
toggle.addEventListener('click',() => {
    container.classList.toggle("dark");
    // calc.classList.toggle("dark");
    
})