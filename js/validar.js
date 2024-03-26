var form = document.getElementById('form')
var email = document.getElementById('email')
var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirmPassword')
var required = document.querySelectorAll('.required')
const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    if (!emailRegex.test(email.value)) {
        errorEmail(0)
        return;
    }
    else if (password.value.length <= 7) {
        errorPassword(1)
        return;
    }else if (password.value != confirmPassword.value){
        errorPasswordConf(2)
        return;
    }
    form.submit()
})


function errorEmail (index) {
    email.style.border = '2px solid #e63636'
    email.focus()
    required[index].innerText = 'Digite um e-mail válido'
    required[index].style.color = '#e63636'
}

function removeErrorEmail (index) {
    email.style.border = '2px solid #008000'
    required[index].innerText = 'e-mail valido'
    required[index].style.color = '#008000'
}

function errorPasswordConf (index) {
    confirmPassword.style.border = '2px solid #e63636'
    confirmPassword.focus()
    required[index].innerText = 'As senhas devem ser compatíveis'
    required[index].style.color = '#e63636'
}

function errorPassword (index) {
    password.style.border = '2px solid #e63636'
    password.focus()
    required[index].innerText = 'A senha deve ter no mínimo 8 caracteres'
    required[index].style.color = '#e63636'
}

function removeErrorPassword (index) {
    password.style.border = '2px solid #008000'
    required[index].innerText = 'Senha valida'
    required[index].style.color = '#008000'
}

function removePasswordConf (index) {
    confirmPassword.style.border = '2px solid #008000'
    required[index].innerText = 'Senha compatível'
    required[index].style.color = '#008000'
}

function validandoEmail () {
    if (!emailRegex.test(email.value) || email.value == '') {
        errorEmail(0)
    }else{
        removeErrorEmail(0)
    }
}

function validandoPassword () {
    if (password.value.length <= 7) {
        errorPassword(1)
        return;
    }else {
        removeErrorPassword(1)
    }
}

function validandoPassConf () {
    if (password.value == confirmPassword.value && confirmPassword.value.length >=8) {
        removePasswordConf(2)
    }else {
        errorPasswordConf(2)
    }
}