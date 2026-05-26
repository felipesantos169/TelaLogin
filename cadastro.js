const inputEmail = document.getElementById('inputEmail')
const inputSenha = document.getElementById('inputSenha')
const inputCpf = document.getElementById('inputCpf')
const inputTelefone = document.getElementById('inputTel')
const feedback = document.getElementById('feedback')
const form = document.getElementById('form')

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    const email = inputEmail.value
    const senha = inputSenha
    const cpf = inputCpf
    const telefone = inputTelefone
    validarEmail(email)
    validarSenha(senha)
    validarCpf(cpf)
    validarTelefone(telefone)
})

function limparErro(informacao){
    informacao.textContent = ''
}

function validarEmail(email) {
    if(!regexEmail(email)){
        console.log("Erro! Email Inválido")
        feedback.classlist.add('errado')
        return false;
    }
    else {
        limparErro(email)
        feedback.classlist.add('correto')
        console.log('Válido')
        return true
    }
}

function validarSenha(senha) {
    const minLength = 6
    tamanho = senha.length
    if(tamanho < minLength){
        console.log("Erro! Minímo 6 caracteres")
        feedback.classlist.add('errado')
        return false;
    }
    else {
        limparErro(senha)
        feedback.classlist.add('correto')
        console.log('Válida')
        return true
    }
}

function validarCpf(cpf) {
    if(!regexCpf(cpf)){
        console.log("Erro! CPF Inválido")
        feedback.classlist.add('errado')
        return false;
    }
    else {
        limparErro(cpf)
        feedback.classlist.add('correto')
        console.log('Válido')
        return true
    }
}

function validarTelefone(telefone) {
    if(!regexTelefone(telefone)){
        console.log("Erro! Telefone Inválido")
        feedback.classlist.add('errado')
        return false;
    }
    else {
        limparErro(telefone)
        feedback.classlist.add('correto')
        console.log('Válido')
        return true
    }
}