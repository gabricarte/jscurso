function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')//Elements está no plural. fsex = Sexo do formulário
        var idade = ano - Number(fano.value) //Value para utilizar o que está dentro do input
        var gênero = ''
        var img = document.createElement('img') //cria um elemento img
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //Se o primeiro radio for o que está checked, o gênero recebe "homem"
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21) {
                //jOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21) {
                //jOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else {
                //idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}