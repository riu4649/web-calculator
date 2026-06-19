import tkinter as tk
history = []
file = open('history.txt', 'a')
while True:
    num1 = float(input("数字1: "))
    num2 = float(input("数字2: "))
    operator = input("演算子 (+ - * /): ")

    if operator == "+":
        result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        if num2 == 0:
            print("0では割れません") 
            continue
        result = num1 / num2
    else:
        print("無効な演算子です")
        exit()

    print("結果:", result)
    history.append(f"{num1} {operator} {num2} = {result}")
    file.write(f"{num1} {operator} {num2} = {result}\n")
    ans = input("1:続ける\n2:履歴を見る\n3:終わる\n")
    if int(ans) >= 2:
        print("\n===== 計算履歴 =====")
        for item in history:
            print(item)
        if int(ans) == 3:
            break