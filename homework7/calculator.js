const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;
let lastNum = '';

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        };
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
        lastNum = dis2Num;
    });
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        };
        clearVar(operationName);
        lastOperation = operationName;
    });
});

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1.innerText = dis1Num;
    display2.innerText = '';
    dis2Num = '';
    tempResult.innerText = result;
};

function mathOperation(num) {
    if(lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(num || dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(num || dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(num || dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(num || dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(num || dis2Num);
    };
};

equal.addEventListener('click', () => {
    if(!dis2Num && !dis1Num) {
        return;
    } else if(!dis1Num) {
        mathOperation(lastNum)
    } else {
        mathOperation();
    };
    haveDot = false;
    clearVar();
    display2.innerText = result.toFixed(8);
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = '';
});


clearAll.addEventListener('click', () => {
    display1.innerText = '0';
    display2.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResult.innerText = '0';
});

clearLast.addEventListener('click', () => {
    display2.innerText = '';
    dis2Num = '';
});

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' || 
        e.key === '1' || 
        e.key === '2' || 
        e.key === '3' || 
        e.key === '4' || 
        e.key === '5' || 
        e.key === '6' || 
        e.key === '7' || 
        e.key === '8' || 
        e.key === '9' || 
        e.key === '.' 
    ){
        clickButtonEl(e.key);
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('x');
    } else if (e.key == 'Enter' || e.key === '=') {
        clickEqual();
    };
});

function clickButtonEl(key) {
    numbersEl.forEach(button => {
        if(button.innerText === key) {
            button.click();
        };
    });
};

function clickOperation(key) {
    operationEl.forEach(button => {
        if(button.innerText === key) {
            button.click();
        };
    });
};

function clickEqual() {
    equal.click();
};