function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } 
    else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero =''
        
            if (fsex[0].checked) {
                
                genero = 'Homem'
                if (idade >=0 && idade < 10) {
                    img.setAttribute('src', 'imagens/crianca-m.jpg')
                } else if (idade <= 24) {
                    img.setAttribute('src', 'imagens/jovem-m.jpg')
                } else if (idade <= 50) {
                    img.setAttribute('src', 'imagens/adulto-m.jpg')
                } else {
                    img.setAttribute('src', 'imagens/idoso-m.jpg')
                }

            } else {

                genero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    img.setAttribute('src', 'imagens/crianca-f.jpg')
                } else if (idade <= 24) {
                    img.setAttribute('src', 'imagens/jovem-f.jpg')
                } else if (idade <= 50) {
                    img.setAttribute('src', 'imagens/adulto-f.jpg')
                } else {
                    img.setAttribute('src', 'imagens/idoso-f.jpg')
                }

            }
        }

    res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
    res.appendChild(img)

    }
    

/* res.innerHTML = `Idade calculada ${idade}` */