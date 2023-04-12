from flask import Flask, render_template, request, make_response, flash

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        string = request.form['string']
        resp = make_response('Cookie was set', 200)
        resp.set_cookie('string', string)
        return resp
    else:
        string = request.cookies.get('string')
        return render_template('index.html', string=string)

if __name__ == '__main__':
        app.run(host='0.0.0.0', port=81, debug=True)
