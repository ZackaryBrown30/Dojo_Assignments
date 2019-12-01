from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def rendertable():
    all_users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
    for user in all_users:
        print(user['first_name'])
        print(user['last_name'])
    return render_template("index.html", users = all_users)



app.run(debug=True)