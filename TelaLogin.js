const nome = document.getElementById('inputNome')
const senha = document.getElementById('inputSenha')

const userFixo = "admin"
const senhaFixa = "12345"

const botao = document.getElementById('btn-enviar')

botao.addEventListener('click', e => {

    e.preventDefault()
    const user = nome.value
    const password = senha.value
    validarUser(user, password)
})
function validarUser(user, password) {
    if(user === userFixo && password === senhaFixa){
        nome.classList.remove('errado')
        nome.classList.add('correto')
        senha.classList.remove('errado')
        senha.classList.add('correto')
        return true;
    }
    else {
        nome.classList.remove('correto')
        nome.classList.add('errado')
        senha.classList.remove('correto')
        senha.classList.add('errado')
        alert('Erro! Usuário ou senha errados')
    }
}