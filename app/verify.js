
function guessVerify(guess) {
    const numero = +guess

if(invalidGuess(numero)) {
    elementGuess.innerHTML += `<div> Valor inválido </div>`
    return
}

if(numberOver(numero)){
    elementGuess.innerHTML += `<div> Valor inválido, o valor deve estar entre ${menorValor} e ${maiorValor}</div>`
}

if(numero === numeroSecreto) {
  
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <a href="./index.html" id="btn">Reiniciar</a>
`
document.body.style.backgroundColor = '#B5F1CC'
document.body.style.color = 'black'


} else if ( numero > numeroSecreto) {
    elementGuess.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `
} else {
    elementGuess.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `
}
}

function invalidGuess(numero) {
    return Number.isNaN(numero)

}
function numberOver(numero){
    return numero > maiorValor || numero < menorValor
}
