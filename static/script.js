let aftercalculate = false;
let count = 0;
const historyArea = document.getElementById("history");
let fontsizechange = 6;

//文字を追加
function addDisplay(number) {
            let display = document.getElementById("display");
            if("0123456789.".includes(number)){
                if (aftercalculate === true || display.value == 0) {
                    display.value = number;
                    aftercalculate = false;
                }
                else {
                    display.value = display.value + number;
                }
            }

            else {
                if (number === "start") {
                    if (aftercalculate === true || display.value == 0) {
                        display.value = '(';
                        aftercalculate = false;
                    }
                    else {
                        display.value = display.value + '(';
                    }
                }

                else {
                    if (aftercalculate === true || display.value == 0) {
                        display.value = ')';
                        aftercalculate = false;
                    }
                    else {
                        display.value = display.value + ')';
                    }
                }
            }
            fontsizeincrease();
        }

//演算子を追加
function addOperator(operator) {
            console.log(operator)
            let display = document.getElementById("display");
            let lastword = display.value.at(-1);
            if (lastword != " ") {
                display.value = display.value + " " + operator + " ";
            fontsizeincrease();
            }
            
}

//表示をクリア
function clearDisplay() {
            let display = document.getElementById("display");
            display.value = "";
        }


//計算をする
function calculate() {
            let display = document.getElementById("display");
            let result = display.value;
            aftercalculate = true;
            if (display.value !== "") {
                historyArea.innerHTML = `
                <p class="history-text">
                ${result} =
                <span class="history-answer">${eval(result)}</span>
                <button class="history-delete"><img src="static/delete.png" alt="delete"></button>
                </p>
                `
                + historyArea.innerHTML;
                display.value = eval(display.value);
            }
}


//一文字削除
function backspace() {
            let display = document.getElementById("display");
            let lastword = display.value.at(-1);
            if (lastword === " ") {
                display.value = display.value.slice(0,display.value.length -3);
            }
            else {
                display.value = display.value.slice(0, display.value.length - 1);
            }
            fontsizedecrease();
}

//文字サイズを増加させる
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

//文字サイズを減少させる
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

//キーボードの処理
document.addEventListener("keydown", function(event) {
    if ("0123456789.".includes(event.key)) {
        addDisplay(event.key);
    }
    
    if (event.key == "(") {
        addDisplay("start");
    }

    if (event.key == ")") {
        addDisplay("end");
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

//履歴からの入力の処理
historyArea.addEventListener("click", function(event) {
    let display = document.getElementById("display");

    if (event.target.classList.contains("history-answer")) {
        display.value += event.target.textContent;
    }
    if (event.target.closest(".history-delete")) {
        const historyItem = event.target.closest(".history-text");
        historyItem.remove();
    }
});