let num = document.getElementById('txtnum')
let list = document.getElementById('flista')
let res = document.querySelector('#res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (Array.isArray(l) && l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addN() {
    if (isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = ''
    num.focus()
}

function fim() {
    if (valores.length == 0) {
        window.alert('Adicione valores!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores) {
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p>O menor valor informado foi ${menor} e o maior ${maior}.</p>` 
    }
}