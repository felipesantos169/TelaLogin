const nome = document.getElementById('inputNome')
const senha = document.getElementById('inputSenha')

const userFixo = "admin"
const senhaFixa = "12345"

const botao = document.getElementById('btn-enviar')

botao.addEventListener('click', e => {

    e.preventDefault()
    const user = nome.value
    const password = senha.value

    validarNomeUser(user)
    validarSenhaUser(password)
})
function validarNomeUser(user) {
    if(user === userFixo){
        nome.classList.remove('errado')
        nome.classList.add('correto')
        return true;
    }
    else {
        nome.classList.remove('correto')
        nome.classList.add('errado')
        alert('Erro! Campo (Nome) errado!')
    }
}
function validarSenhaUser(password) {
    if(password === senhaFixa){
        senha.classList.remove('errado')
        senha.classList.add('correto')
        return true;
    }
    else {
        senha.classList.remove('correto')
        senha.classList.add('errado')
        alert('Erro! Campo (Senha) errado!')
    }
}