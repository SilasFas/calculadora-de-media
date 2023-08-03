const form = document.getElementById('formAtividade')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = parseFloat(prompt('Digite a nota minima:'))

let linhas = ''


form.addEventListener('submit', function (event) {
    event.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediafinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotAtividade = document.getElementById('notaAtividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {

        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotAtividade.value}</td>`
        linha += `<td>${inputNotAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '<tr>'

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotAtividade.value = ''
}

function atualizaTabela() {
    const corpoTablea = document.querySelector('tbody')
    corpoTablea.innerHTML = linhas
}

function atualizaMediafinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}