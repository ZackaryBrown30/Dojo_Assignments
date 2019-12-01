from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          
def greeting():
    return 'Hello understand'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def mantra():
    return "Dojo"

@app.route('/say/<name>')
def variable(name):
    return 'Hi ' + name

@app.route('/repeat/<x>/hello')
def repeat(x):
    return 'Hello <br>' * int(x)

app.run(debug=True)