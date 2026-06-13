let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    // Prevent multiple operators in a row
    if (display.value && !isOperator(display.value[display.value.length - 1])) {
        display.value += op;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/', '.'].includes(char);
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Evaluate the expression
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
}