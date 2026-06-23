let aftercalculate = false;
let count = 0;
fontsizechange = 6;
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

/*function fontsize() {
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
}; */

function fontsizeincrease() {
    let display = document.getElementById("display");
    if (display.value.length > (15 + count * 5) && display.value.length <= 45) {
        display.style.fontSize = (35 - fontsizechange) + "px";
        count += 1;
        fontsizechange += (6 - count);
    }
    if (display.value.length === 50) {
        alert("これ以上は表示されません");
    }
}

function fontsizedecrease() {
    let display = document.getElementById("display");
    if (display.value.length <= 15) {
        display.style.fontSize = "35px";
    } else if (display.value.length <= (15 + count * 5)) {
        fontsizechange -= (6 - count);
        count -= 1;
        display.style.fontSize = (35 - fontsizechange) + "px";
        }
    }


document.addEventListener("keydown", function(event) {
    console.log("count: " +count);
    console.log("size: " + fontsizechange);
    if ("0123456789".includes(event.key)) {
        addNumber(event.key);
        fontsizeincrease();
    }
    
    if ("+-*/".includes(event.key)) {
        addOperator(event.key);
        fontsizeincrease()
    }
    if (event.key === "Backspace") {
        backspace();
        fontsizedecrease();
    }
    if (event.key === "Enter") {
        calculate();
    }
});
