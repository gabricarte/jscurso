function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO!] Faltam dados!')
    }
    else {
        res.innerHTML = 'Contando: '
        // Conversão dos dados do input (caixa de texto) para serem manipulados como number.
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //  c no for é o contador 
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            //contagem regressiva
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
