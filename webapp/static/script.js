let aftercalculate = false;
console.log(aftercalculate);

function addNumber(number) {
            let display = document.getElementById("display");
            if (aftercalculate === true) {
                display.value = number;
                aftercalculate = false;
            }
            else {
                display.value = display.value + number;
            }
        }

function addOperator(operator) {
            let display = document.getElementById("display");
            display.value = display.value + operator;
}

function clearDisplay() {
            let display = document.getElementById("display");
            display.value = "";
        }

function calculate() {
            let display = document.getElementById("display");
            let history = document.getElementById("history");
            let result = display.value;
            aftercalculate = true;
            if (display.value !== "") {
                history.innerHTML += "<p class='history-text'>" + result + " = " + eval(result) + "</p>";
                display.value = eval(display.value);
            }
}

function backspace() {
            let display = document.getElementById("display");
            display.value = display.value.slice(0, display.value.length - 1);
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if ("0123456789".includes(event.key)) {
        addNumber(event.key);
    }
    
    if ("+-*/".includes(event.key)) {
        addOperator(event.key);
    }
    if (event.key === "Backspace") {
        backspace();
    }
    if (event.key === "Enter") {
        calculate();
    }
});
