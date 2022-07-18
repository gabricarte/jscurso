function gerar() {
    let num = document.getElementById('numero').value;
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número! ')
    }
    else {
        let n = Number(num.value) //transformando string em número
        let c = 1 // contador 
        tab.innerHTML = ` ` // Antes de mostrar a tabuada, limpa ela
        while (c <= 10) {
            let item = document.createElement('option') //criar uma variável, que crie um elemento "option" no html 
            item.text = `${num} x ${c} = ${num * c}` //escreve o texto dentro do "option"
            tab.appendChild(item) // adiciona o que foi escrito no texto na tabuada 
            c++
        }
    }
}