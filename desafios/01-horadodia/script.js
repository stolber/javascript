function carregar() {
    
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia!'
        imagem.src = 'pictures/manha.jpg'
        document.body.style.background = '#99BFBB'
    }
    else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde!'
        imagem.src = 'pictures/tarde.jpg'
        document.body.style.background = '#CCB886'
    }
    else {
        msg.innerHTML = 'Boa noite!'
        imagem.src = 'pictures/noite.jpg'
        document.body.style.background = '#171C26'
    }
}