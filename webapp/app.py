from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():

    result = None

    if request.args.get("num1") and request.args.get("num2"):

        num1 = float(request.args.get("num1"))
        num2 = float(request.args.get("num2"))
        operator = request.args.get("operator")

        if operator == "+":
            result = num1 + num2

        elif operator == "-":
            result = num1 - num2

        elif operator == "*":
            result = num1 * num2

        elif operator == "/":
            if num2 == 0:
                result = "0では割れません"
            else:
                result = num1 / num2

        else:
            result = "無効な演算子です"

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)