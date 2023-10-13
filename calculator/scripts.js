const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstValue = '';
let isResultDisplayed = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (isResultDisplayed && !isNaN(value)) {
            currentInput = '';
            isResultDisplayed = false;
        }

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput !== '') {
                if (operator && firstValue) {
                    switch (operator) {
                        case '+':
                            currentInput = parseFloat(firstValue) + parseFloat(currentInput);
                            break;
                        case '-':
                            currentInput = parseFloat(firstValue) - parseFloat(currentInput);
                            break;
                        case '*':
                            currentInput = parseFloat(firstValue) * parseFloat(currentInput);
                            break;
                        case '/':
                            if (currentInput !== '0') {
                                currentInput = parseFloat(firstValue) / parseFloat(currentInput);
                            } else {
                                currentInput = 'Error';
                            }
                            break;
                        default:
                            currentInput = 'Error';
                    }
                    operator = '';
                    firstValue = '';
                } else {
                    firstValue = currentInput;
                }
                currentInput = '';
            }
            operator = value;
        } else if (value === '=') {
            if (operator && firstValue && currentInput) {
                switch (operator) {
                    case '+':
                        currentInput = parseFloat(firstValue) + parseFloat(currentInput);
                        break;
                    case '-':
                        currentInput = parseFloat(firstValue) - parseFloat(currentInput);
                        break;
                    case '*':
                        currentInput = parseFloat(firstValue) * parseFloat(currentInput);
                        break;
                    case '/':
                        if (currentInput !== '0') {
                            currentInput = parseFloat(firstValue) / parseFloat(currentInput);
                        } else {
                            currentInput = 'Error';
                        }
                        break;
                    default:
                        currentInput = 'Error';
                }
                operator = '';
                firstValue = '';
                currentInput = currentInput.toString();
                isResultDisplayed = true;
            }
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            firstValue = '';
            isResultDisplayed = false;
        } else {
            currentInput += value;
        }

        resultInput.value = currentInput;
    });
});
