from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'this is my security key'

@app.route('/')
def index():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template('index.html', count = session['count'])

@app.route('/button')
def add_two():
    session['count'] += 1
    return redirect("/")

@app.route('/clear')
def annihilation():
    session.clear()
    return redirect("/")


# @app.error_handler_spec(404)
# def not_found (e):
#     return "sorry, this is a bad link."

if __name__ == "__main__":
    app.run(debug=True)