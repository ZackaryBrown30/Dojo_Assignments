from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
#     print(f"name submitted: {request.form['name']}")
#     print(f"email submitted: {request.form['email']}")
    return render_template("index.html", name_on_template=name_from_form, email_on_template=email_from_form)

if __name__ == "__main__":
    app.run(debug=True)