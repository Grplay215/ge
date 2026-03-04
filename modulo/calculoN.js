
var resultado
var verificacao
var escolar

var notaexam
var resultadoexame

function calcularMedia(N1, N2, N3, N4) {
    let nota1 = Number(N1)
    let nota2 = Number(N2)
    let nota3 = Number(N3)
    let nota4 = Number(N4)


    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        verificacao = "ERRO: Não é permitido deixar espaços brancos"

    }else if (nota1 == 0 || nota1 == 100 || nota2 == 0 || nota2 == 100 || nota3 == 0 || nota3 == 100 || nota4 == 0 || nota4 == 100 ) {
        verificacao = "ERRO: Só é permitido números entre 0 e 100"

    }else {
        resultado = (nota1 + nota2 + nota3 + nota4) / 4
        
    }

    return {
        resultado: Number(resultado.toFixed(2)),
        verificacao: verificacao
    }
    
}

function passou() {

    if (resultado < 50) {
        escolar = " REPROVADO"
        
    }else if (resultado >=50 || resultado < 69.9) {
        escolar = " EXAME"
        
    } else if (resultado >= 70) {
        escolar = " APROVADO"
        
    }
    return escolar
    
}
function resulexam(){
    if (notaexam >= 60) {
        resultadoexame = "APROVADO"
    } else if (notaexam <=59.9) {
        resultadoexame = "REPROVADO"
    }

    return resultadoexame
    
}
function exame(EXAME){

    let = notafinal = EXAME

   
    notaexam = (nota1 + nota2 + nota3 + nota4 + notafinal) / 5
    return Number(notaexam)

}



let calc = calcularMedia(1, 10, 1, 5)

let exibicao = resultado

let mostrar = passou()

console.log(`${exibicao}    ${mostrar}`)


module.exports = {
    
    calcularMedia,
    passou,
    exame,
    resulexam
}