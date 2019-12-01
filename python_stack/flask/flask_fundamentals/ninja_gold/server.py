from flask import Flask, redirect, request, session, render_template
import random

app= Flask(__name__)
app.secret_key = "hooplamadoozulah"

@app.route('/')
def index():
    if 'bank' not in session:
        session['bank'] = 25
    # print or insert homie's activities
    return render_template('index.html', bank = session['bank'])

@app.route('/submit', methods=['POST'])
def submit():
    if request.form['location'] == 'farm':
        session['bank'] += random.randint(10,20)

    elif request.form['location'] == 'cave':
        session['bank'] += random.randint(5,10)

    elif request.form['location'] == 'house':
        session['bank'] += random.randint(2,5)

    elif request.form['location'] == 'casino':
        session['bank'] += random.randint(-50,50)

    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)