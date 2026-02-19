from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

accidents = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/report', methods=['POST'])
def report():
    data = request.get_json()
    accidents.append(data)
    return jsonify({"status": "ok"})

@app.route('/accidents')
def get_accidents():
    return jsonify(accidents)

if __name__ == "__main__":
    app.run(debug=True)
