from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def game():
    return render_template('index.html')

@app.route('/play')
def boxify():
    return render_template('index.html', num=3, )
# replace .boxes with appropriate call method. 

@app.route('/play/<int:num>/<color>')
def boximultify(num, color):
    return render_template('index.html', num=num, color=color)
# replace .boxes with appropriate call method. 

app.errorhandler(404)
def bad_link():
    return "Bad link please return to index.html/"


app.run(debug = True)