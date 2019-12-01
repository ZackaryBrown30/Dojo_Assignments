from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def game():
    return render_template('index.html')

@app.route('/play')
def boxify():
    return render_template('index.html', num=3, )
# replace .boxes with appropriate call method. 

@app.route('/play/<x>')
def boxify('x'):
    return render_template('index.html', num_times = int(x) ,  )
# replace .boxes with appropriate call method. 

app.run(debug = True)