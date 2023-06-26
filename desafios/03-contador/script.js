function calcular() {
    let inicio = document.querySelector('#txtinicio')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpasso')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossível Contar...')
        /* window.alert('[ERRO] Faltam dados.') */

    } else {
        res.innerHTML = `Contando: `
        let nInicio = Number(inicio.value)
        let nFim = Number(fim.value)
        let nPasso = Number(passo.value)

        if (nPasso <= 0) {
            window.alert('Considerar 1')
            nPasso = 1
        }

        if (nInicio < nFim) {
            // CONTAGEM CRESCENTE
            for (let c = nInicio; c <= nFim; c+= nPasso) {
                res.innerHTML += `${c} \u{2705}`
            }
        } 
            // CONTAGEM REGRESSIVA
        else {
            for (let c = nInicio; c >= nFim; c-= nPasso) {
                res.innerHTML += `${c} \u{2705}`
            }
        }
    }
}