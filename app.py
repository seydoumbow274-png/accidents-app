from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')  # Page d'accueil

@app.route('/accidents')
def accidents():
    return render_template('accidents.html')  # Page des accidents

@app.route('/contact')
def contact():
    return render_template('contact.html')  # Page de contact

if __name__ == '__main__':
    app.run(debug=True)
