from flask import render_template, request, redirect, url_for, flash
from main import main
from .forms import NameForm

@main.route("/")
def home():
    return render_template("index.html")

@main.route("/greet", methods=["GET", "POST"])
def greet():
    form = NameForm()
    name = None
    if form.validate_on_submit():
        name = form.name.data
        flash(f"Halo, {name}!", "success")
        form.name.data =""
    return render_template("greet.html", form=form ,name=name)

@main.route("/calc", methods=["GET", "POST"])
def calc():
    result = None
    if request.method == "POST":
        try:
            num1 = float(request.form["num1"])
            num2 = float(request.form["num2"])
            operation = request.form["operation"]

            if operation == "add":
                result = num1 + num2
            elif operation == "sub":
                result = num1 - num2
            elif operation == "mul":
                result = num1 * num2
            elif operation == "div":
                if num2 == 0:
                    flash("Can't divide by 0!", "error")
                    return redirect(url_for("main.calc"))
                result = num1 / num2

            flash("Successfully calculated!", "success")
        except ValueError:
            flash("Enter valid numbers!", "error")

    return render_template("calc.html", result=result)
