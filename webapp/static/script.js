function addNumber(number) {
            let display = document.getElementById("display");
            display.value = display.value + number;
        }

function clearDisplay() {
            let display = document.getElementById("display");
            display.value = "";
        }
function addOperator(operator) {
            let display = document.getElementById("display");
            display.value = display.value + operator;
}

function calculate() {
            let display = document.getElementById("display");
            if (display.value !== "") {
                display.value = eval(display.value);
            }
}

function backspace() {
            let display = document.getElementById("display");
            display.value = display.value.slice(0, display.value.length - 1);
}