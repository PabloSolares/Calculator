
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const displayAfterValue = document.querySelector('.value-after')
const displayValueCurrent = document.querySelector('.value-before')

// const display = new Display(displayAfterValue,displayvalueCurrent);
let currentValue = '';
let afterValue = '';
let typeOperation = '';
let result = '';
const calc = new Calculadora();

numbers.forEach( button => {
    button.addEventListener('click', () => {
        addNumber(button.innerText)
    })
})

operators.forEach( button => {
    button.addEventListener('click', () => {
        if(button.value == "borrar"){
            displayValueCurrent.textContent = displayValueCurrent.textContent.toString().slice(0, -1);
            if(displayValueCurrent.textContent == ''){
                currentValue = ''
            }
        }
        if(button.value != "igual" && button.value != "borrar"){
            
            typeOperation = button.value
            displayValueCurrent.className = 'paddingCero'
            displayAfterValue.textContent = afterValue.innerText;
            afterValue = Number(currentValue);
            afterValue += button.innerHTML
            currentValue = '';
            
        } 
        if(button.value == "igual" && button.value != "borrar") {
            currentValue = parseFloat(currentValue);
            afterValue = parseFloat(afterValue);
            result = calc[typeOperation](Number(afterValue), Number(currentValue) )

            currentValue = result;
            afterValue = '';
            printNumber();
        }
    })
})


const addNumber = (number) => {
    if(number == '.' && currentValue.includes('.')) return 
    currentValue += number;
    printNumber()
}

const printNumber = () => {
    displayValueCurrent.textContent = currentValue;
    displayAfterValue.textContent = afterValue;
}








