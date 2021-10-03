function first() {
            
    let value1 = prompt('Введите первое значение');
    let value2 = prompt('Введите второе значение');
    let number = parseInt(value1);;
    let number1 = parseInt(value2);
    if (!Number(number) || !Number(number1)) {
        alert('Некорректный ввод!');
    }
    let result = number.toString(number1);
    alert(result);
}

function second() {

    let value1 = prompt('Введите первое значение');
    let number = parseInt(value1);
    if (!Number(number)) {
        alert('Некорректный ввод!');
        return;
    }

    let value2 = prompt('Введите второе значение');
    let number1 = parseInt(value2);
    if (!Number(number1)) {
        alert('Некорректный ввод!');
        return;
    }

    let result = number + number1;
    let result2 = number / number1;
    alert(`Ответ: ${result}, ${result2}`);
}
