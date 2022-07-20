let lista = []
let num = document.getElementById('txtnumb')

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) { // funções para verificar se é um número e se já está na lista 
        let tab = document.getElementById('seltab')
        let n = Number(num.value)
        lista.push(n)
        let item = document.createElement('option') //criar uma variável, que crie um elemento "option" no html 
        item.text = `Valor ${n} adicionado.` //escreve o texto dentro do "option"
        tab.appendChild(item) // adiciona o que foi escrito no texto no selection
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function finalizar() {
    //obtendo elementos com DOM
    let cad = document.getElementById('cad')
    let maior = document.getElementById('maior')
    let menor = document.getElementById('menor')
    let soma = document.getElementById('soma')
    let media = document.getElementById('media')
    let list = document.getElementById('list')

    list.innerHTML = `${lista}`

    let cada = lista.length
    cad.innerHTML = `Ao todo, temos ${cada} números cadastrados.`


    //maior e menor valores
    lista.sort()
    let ultimo = lista.at(-1); //  método at() recebe um valor inteiro e retorna o item referente ao index dele
    let primeiro = lista[0]
    maior.innerHTML = `O maior valor informado foi o ${ultimo}.`
    menor.innerHTML = `O menor valor informado foi o ${primeiro}.`

    //soma
    let acum = 0
    for (let i = 0; i < lista.length; i++) {
        acum += lista[i]
    }
    soma.innerHTML = `Somando todos os valores, temos ${acum}`

    //média

    let med = acum / cada
    media.innerHTML = `A média dos valores digitados é ${med}`

}