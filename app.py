from flask import Flask, render_template, request

app = Flask(__name__)

FICHIER_ACCIDENTS = "accidents.txt"

@app.route('/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        nom = request.form['nom']
        lieu = request.form['lieu']
        description = request.form['description']

        with open(FICHIER_ACCIDENTS, "a") as f:
            f.write(f"Accident signalé par {nom} à {lieu}. Description : {description}\n")

        return f"Accident signalé par {nom} à {lieu}. Description : {description}"

    return render_template('form.html')


@app.route('/accidents')
def liste_accidents():
    try:
        with open(FICHIER_ACCIDENTS, "r") as f:
            accidents = [line.strip() for line in f.readlines()]
    except FileNotFoundError:
        accidents = []

    return render_template('accidents.html', accidents=accidents)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
