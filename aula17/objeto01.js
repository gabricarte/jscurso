let amigo = {
    nome: 'José', sexo: 'Masculino', peso: 85.4, engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
//o this é uma palavra auto referente ao objeto 
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)