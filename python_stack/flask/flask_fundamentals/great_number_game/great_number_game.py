from flask import Flask, render_template, redirect, session, request
import random

app = Flask(__name__)
app.secret_key = "hooplahmufadoozah"

@app.route('/')
def index():
    if 'number' not in session: 
        session['number'] = random.randomint(1,100)
    return render_template('index.html', number = session['number'])

@app.route('/play')
def game():
    session['number'] = request.form['input']

if __name__ == "__main__":
    app.run(debug=True)