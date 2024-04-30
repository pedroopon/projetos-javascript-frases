function gerar(){
    var frases = {
        "Filipenses 4:13" : '"Tudo posso naquele que me fortalece. 💪"', "Salmos 30:5" : '"O choro pode durar uma noite, mas a alegria vem pela manhã. ✨"', "Salmos 23:1" : '"O Senhor é o meu pastor; de nada me faltará. 🙏"', "Romanos 8:31" : '"Se Deus é por nós, quem será contra nós?"', "João 15:12" : '"Amem-se uns aos outros como eu os amei. "', "Mateus 12:34" : '"A boca fala do que está cheio o coração. "', "Salmos 121:2" : '"O meu socorro vem do Senhor, que fez os céus e a terra."',
    }

    var autors = Object.keys(frases);

    var autor = autors[Math.floor(Math.random() * autors.length)]

    var frase =  frases[autor];

    document.getElementById("frases").innerHTML = frase
    document.getElementById("autor").innerHTML = autor


}