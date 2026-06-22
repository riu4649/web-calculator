let aftercalculate = false;
let count = 0;
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
            display.value = display.value + " " + operator + " ";
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

function fontsize() {
    let display = document.getElementById("display");

    if (display.value.length <= 15) {
        display.style.fontSize = "35px";
    } else if (display.value.length > 25) {
        display.style.fontSize = "20px";
    } else if (display.value.length > 20) {
        display.style.fontSize = "24px";
    } else if (display.value.length > 15) {
        display.style.fontSize = "29px";
    }
}; 

function fontsize2() {
    let display = document.getElementById("display");

    if (display.value.length <= 15) {
        display.style.fontSize = "35px";
    } else if (display.value.length > (15 + count * 5)) {
        display.style.fontSize = (display.style.fontSize - (6 - count)) + "px";
        count += 1;
    }
}
display.value.length > (15 + count * 5)

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if ("0123456789".includes(event.key)) {
        addNumber(event.key);
        fontsize();
    }
    
    if ("+-*/".includes(event.key)) {
        addOperator(event.key);
        fontsize()
    }
    if (event.key === "Backspace") {
        backspace();
        fontsize();
    }
    if (event.key === "Enter") {
        calculate();
    }
});
