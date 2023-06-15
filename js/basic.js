console.log('Olá, Javascript!')

var userName = 'Anselmo Santos'
// dessa forma que criamos variáveis //

document.getElementById('user-name').innerHTML = userName
// dessa forma, chamamos um elemento por seu id //

// Variáveis //

/* var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi) */

// Operadores matemáticos //

/* var n1 = 7
var n2 = 2.5

console.log(typeof n1)
console.log(typeof n2) */

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

/* var total = n1 / n2
console.log(total) */

// Operadores de comparação //

/* var v1 = 5
var v2 = 5

var resultado = v1 === v2
console.log(resultado) */

// Funções //

/* function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(5, 100) */

/* function boasVindas(nome) {

    alert(nome + ', sejam bem vindos(a)')
}

boasVindas('Anselmo') */

/* function soma(n1, n2) {
    return n1 + n2
}

var resultado = soma(5, 5)
console.log(resultado) */

// Controle de fluxos //


/* var saldo = 1000

function saque(valor) {

    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700) {
        console.log('Valor do saque é superior ao permitido por operação')
    } else {
        saldo = saldo - valor
    }
}

saque(100)
console.log(saldo) */

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve deduzir do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta que o valor é superior ao máximo permitido por operação

// Arrays //

/* var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

console.log(gaveteiro[0])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO')
personagens.push('R2D2')
// .push('nome desejado') acrescenta mais um item no array
console.log(personagens)
personagens.pop()
// .pop() exclui o último item do array

console.log(personagens)

personagens = personagens.filter(function(p){
    return p !== 'Darth Vader'
})

console.log(personagens) */

// Controles de repetição (loops) //

/* var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.forEach(function(p){
    console.log(p)
})

for (var i in personagens) {
    console.log(personagens[i])
}

for (var i = 0; i<= 10; i++) {
    console.log(i)
    // código vai executar até a condição retornar false
} */

// Objetos //

/* var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

/* yoda.nome = 'Mestre Yoda'
yoda.idade = 100
yoda.jedi = true
yoda.outro_campo = 'Alguma coisa' */

//console.log(yoda)
//yoda.mostraIdade() */

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)