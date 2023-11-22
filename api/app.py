from flask import Flask, render_template

app = Flask(__name__)

projetos = [
    {"nome": "API-Criança Renal ",
    "imagem":"../static/imagens/home.jpg",
    "descricao": "Um projeto voltado para crianças com IRC (Insuficiência Renal Crônica), no qual desenvolvemos um site com o objetivo de auxiliar mães e familiares.",
    "tecnologias": "Python, HTML, CSS, JavaScript",
    "link": "https://github.com/Daiene/Pixels.git"},
    {"nome": "Portfólio",
     "imagem":"../static/imagens/home_port.jpg",
     "descricao": "Projeto de design digital para a apresentação de portfólio online com informações profissionais e acadêmicas",
     "tecnologias": "Python, Flask, Boostrap, Html, CSS",
     "link": "https://github.com/ZduardoPereira/portfolio_digital_dsm.git"},
]

projetos_profissional = [

]

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profissional')
def profissional():
    return render_template('profissional.html')

@app.route('/projetos')
def academico():
    return render_template('projetos.html', projetos=projetos, projetos_profissional=projetos_profissional)



if __name__ == '__main__':
    app.run(debug=True)