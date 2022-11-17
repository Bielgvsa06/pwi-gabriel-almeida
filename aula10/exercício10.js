function calculaMedia (nomeAluno, nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3)/3
    return console.log (' A nota do aluno', nomeAluno , 'é:' , resultado.toFixed(2))
}

calculaMedia(' Oelando', 2.5, 10.0, 6.0)











const decideNumero = (numero) => {
    if ( numero >= 6) {
        return console.log('O número', numero, 'é maior que 6')
    } else {
        return console.log('O número', numero, 'é menor que 6')
    }
}
let numeroDeFora = 15
decideNumero (7)
decideNumero (12)
decideNumero (numeroDeFora)
