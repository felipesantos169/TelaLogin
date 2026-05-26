const inputEmail = document.getElementById('inputEmail')
const inputSenha = document.getElementById('inputSenha')
const inputCpf = document.getElementById('inputCpf')
const inputTelefone = document.getElementById('inputTel')
const form = document.getElementById('form')

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    const email = inputEmail.value
    const senha = inputSenha.value
    const cpf = inputCpf.value
    const telefone = inputTelefone.value
    validarEmail(email, inputEmail)
    validarSenha(senha, inputSenha)
    validarCpf(cpf, inputCpf)
    validarTelefone(telefone, inputTelefone)
})

function limparErro(informacao){
    informacao.textContent = ''
}

function validarEmail(email, inputEmail) {
    if(!regexEmail.test(email)){
        alert("Erro! Email Inválido")
        inputEmail.classList.remove('correto')
        inputEmail.classList.add('errado')
        return false;
    }
    else {
        limparErro(inputEmail)
        inputEmail.classList.add('correto')
        return true
    }
}

function validarSenha(senha, inputSenha) {
    const minLength = 6
    tamanho = senha.length
    if(tamanho < minLength){
        alert("Erro! Minímo 6 caracteres na senha")
        inputSenha.classList.remove('correto')
        inputSenha.classList.add('errado')
        return false;
    }
    else {
        limparErro(inputSenha)
        inputSenha.classList.add('correto')
        return true
    }
}

function validarCpf(cpf, inputCpf) {
    if(!regexCpf.test(cpf)){
        alert("Erro! CPF Inválido")
        inputCpf.classList.remove('correto')
        inputCpf.classList.add('errado')
        return false;
    }
    else {
        limparErro(inputCpf)
        inputCpf.classList.add('correto')
        return true
    }
}

function validarTelefone(telefone, inputTelefone) {
    if(!regexTelefone.test(telefone)){
        alert("Erro! Telefone Inválido")
        inputTelefone.classList.remove('correto')
        inputTelefone.classList.add('errado')
        return false;
    }
    else {
        limparErro(inputTelefone)
        inputTelefone.classList.add('correto')
        return true
    }
}