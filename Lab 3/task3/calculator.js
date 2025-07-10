const answerInput = document.getElementById("Answer");

let expression = "";

function EnterNumber(value) {
    if (answerInput.value === "Error") {
        expression = "";
        answerInput.value = "";
    }
    // Prevent multiple decimals in one number segment
    if (value === '.') {
        const segments = expression.split(/[+\-*/]/);
        if (segments.pop().includes('.')) {
            return;
        }
    }
    expression += value;
    answerInput.value = expression;
}

function EnterOperator(operator) {
    if (expression.length === 0) return;

    const lastChar = expression[expression.length - 1];
    if ("+-*/.".includes(lastChar)) {
        // Replace the last operator with the new one
        expression = expression.substring(0, expression.length - 1) + operator;
    } else {
        expression += operator;
    }
    answerInput.value = expression;
}

function EnterClear() {
    expression = "";
    answerInput.value = "";
}

function EnterEqual() {
    // Don't evaluate if the expression is empty or ends with an operator
    const lastChar = expression.trim().slice(-1);
    if (!expression || "+-*/.".includes(lastChar)) {
        return;
    }

    try {
        // Using Function constructor is safer than eval()
        const result = new Function('return ' + expression)();
        if (!isFinite(result)) {
            throw new Error("Division by zero or invalid operation");
        }
        answerInput.value = result;
        expression = result.toString();
    } catch (e) {
        answerInput.value = "Error";
        expression = "";
    }
}

answerInput.addEventListener("keydown", function(event) {
    // Allow navigation keys without interference
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].includes(event.key)) {
        return;
    }

    // Handle special action keys
    if (event.key === 'Enter') {
        event.preventDefault();
        EnterEqual();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        expression = expression.slice(0, -1);
        answerInput.value = expression;
    } else if (event.key.toLowerCase() === 'c') {
        event.preventDefault();
        EnterClear();
    }
});


answerInput.addEventListener("keypress", function(event) {
    const char = event.key;
    const allowedNumbers = "0123456789.";
    const allowedOperators = "+-*/";

    event.preventDefault();

    if (allowedNumbers.includes(char)) {
        EnterNumber(char);
    } else if (allowedOperators.includes(char)) {
        EnterOperator(char);
    }
});
