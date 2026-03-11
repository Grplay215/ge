/*************************************************************************************
 *  Objetivo: projeto para realizar calculo de medias escolares
 *  Autor: gabriel renato
 *  Data: 29/01/26
 *  Versão: 1.0
 * ***********************************************************************************/

const readline = require('readline')

const entradaDedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDedados.question('Qual o nome do aluno? ', function (nome) {
    let nomeDoAluno = nome

    entradaDedados.question('Qual o genero do aluno? ', function (sexo) {
        let genero = String(sexo).toUpperCase()

        entradaDedados.question('Qual o nome do professor? ', function (professor) {
            let nomedoprofessor = professor

            entradaDedados.question('Qual o genero do professor? ', function (sexo2) {
                let genero2 = String(sexo2).toUpperCase()

                entradaDedados.question('Qual o nome do curso? ', function (curso) {
                    let nomedocurso = curso

                    entradaDedados.question('Qual a diciplina? ', function (materia) {
                        let diciplina1 = materia

                        entradaDedados.question('Qual a nota 1? ', function (N1) {
                            let notas1 = Number(N1)

                            entradaDedados.question('Qual a nota 2? ', function (N2) {
                                let notas2 = Number(N2)

                                entradaDedados.question('Qual a nota 3? ', function (N3) {
                                    let notas3 = Number(N3)

                                    entradaDedados.question('Qual a nota 4? ', function (N4) {
                                        let notas4 = Number(N4)


                                        let extorico = require('./modulo/calculoN.js')
                                        let esco = extorico.calcularMedia(notas1, notas2, notas3, notas4)
                                        let lar = extorico.passou()
                                        let resultado = extorico.resultadonota()
//                                                  ------------------------------------------
//                                                  ------------------------------------------
                                        if (resultado >=50 && resultado < 69.9) {

                                            entradaDedados.question(`nota insulficiente para ser aprovado, por favor digte a nota do exame: `, function (EXAME) {
                                                let notadoexame = Number(EXAME)

                                                let ex = extorico.exame(notadoexame)
                                                let resex = extorico.resulexam()

                                                if (genero == 'FEMININO' || genero2 == 'FEMININO') {
                                                    console.log(`
                                                        A aluna ${nomeDoAluno} foi ${resex} na disciplina ${diciplina1}.
                                                        Curso: ${nomedocurso}
                                                        Professora: ${nomedoprofessor}
                                                        Notas da aluna: ${notas1}, ${notas2}, ${notas3}, ${notas4}, ${notadoexame}
                                                        Média Final: ${esco}
                                                        Média final do Exame: ${ex}`)
                                                } else if (genero == 'MASCULINO' || genero2 == 'MASCULINO') {
                                                    console.log(`
                                                        O aluno ${nomeDoAluno} foi ${resex} na disciplina ${materia}.
                                                        Curso: ${nomedocurso}
                                                        Professor: ${nomedoprofessor}
                                                        Notas do aluno: ${notas1}, ${notas2}, ${notas3}, ${notas4}, ${Number(notadoexame)}
                                                        Média Final: ${esco}
                                                        Média final do Exame: ${ex}`)
                                                } else if (genero == 'FEMININO' || genero2 == 'MASCULINO') {
                                                    console.log(`
                                                        O aluna ${nomeDoAluno} foi ${resex} na disciplina ${materia}.
                                                        Curso: ${nomedocurso}
                                                        Professor: ${nomedoprofessor}
                                                        Notas da aluna: ${notas1}, ${notas2}, ${notas3}, ${notas4}, ${Number(notadoexame)}
                                                        Média Final: ${esco}
                                                        Média final do Exame: ${ex}`)
                                                } else if (genero == 'MASCULINO' || genero2 == 'FEMININO') {
                                                    console.log(`
                                                        O aluno ${nomeDoAluno} foi ${resex} na disciplina ${materia}.
                                                        Curso: ${nomedocurso}
                                                        Professora: ${nomedoprofessor}
                                                        Notas do aluno: ${notas1}, ${notas2}, ${notas3}, ${notas4}, ${Number(notadoexame)}
                                                        Média Final: ${esco}
                                                        Média final do Exame: ${ex}`)
                                                }

                                            })

                                        } else if(genero == 'MASCULINO' || genero2 == 'MASCULINO') {
                                            console.log(`
                                                O aluno ${nomeDoAluno} foi ${lar} na disciplina ${materia}.
                                                Curso: ${nomedocurso}
                                                Professor: ${nomedoprofessor}
                                                Notas do aluno: ${notas1}, ${notas2}, ${notas3}, ${notas4}
                                                Média Final: ${resultado}
                                                `)
                                        }


                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})