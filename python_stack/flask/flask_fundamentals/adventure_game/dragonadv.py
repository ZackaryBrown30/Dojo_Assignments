from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          
def game():
    return 'Would you like to play a game?<br> y / n type into your Url after the /'  # Return the string 'Hello World!' as a response

@app.route('/n')          
def game1():
    return 'Happy Haloween'

@app.route('/y')          
def game2():
    return 'You sense you are in danger<br> there is an unnatural buzzing sound <br> as you walk you come upon a tall bald man <br> do you engage or walk <br> engage / walk'  # Return the string 'Hello World!' as a response

@app.route('/y/engage')          
def game3():
    return 'The man shouts "RUN" the dragon is coming <br> run / stay'  

@app.route('/y/engage/run')          
def game4():
    return 'You see a dragon fly overhead as you run <br> left or right'

@app.route('/y/engage/stay')          
def game5():
    return ' A fire breathing dragon approaches.. <br> You are lunch'


@app.route('/y/walk')
# and('/y/engage/run/left')and('/y/engage/run/right')
def game6():
    return 'You continue until you meet another man <br> He is a scraggly traveler <br> turn-back / engage'  

@app.route('/y/walk/engage')          
def game7():
    return 'You wake up.. to a rooster dancing to DMX, it is trying to impress you'  

@app.route('/y/walk/turn-back')          
def game8():
    return 'You see yourself rapidly approaching being chased by a dragon<br> the dragon eats you, the other you gets away'  

if __name__=="__main__":
    app.run(debug=True)