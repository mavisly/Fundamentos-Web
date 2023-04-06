let nome = document.getElementById("nome");

let email = document.querySelector("#email");

let assunto = document.querySelector("#assunto");

let nomeOK = false

let emailOK = false

let assuntoOK = false

let mapa = document.querySelector("#mapa")

nome.style.width = "100%";
email.style.width = "100%";

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3 ) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "#ff3838"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "#10ac84"
        nomeOK = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') && email.value.indexOf('.com')==-1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "#ff3838"
    } else {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "#10ac84"
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande. Digite no máximo 100 caracteres!"
        txtAssunto.style.color = "#ff3838"
        txtAssunto.style.display = "block"
        assuntoOK = false
    }else {
        txtAssunto.style.display = "none"
        assuntoOK = true
    }

}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    }else {
        alert("Preencha o formulário corretamente!")
    }
}

function mapaZoom(){
    mapa.style.width = "600px"
    mapa.style.height = "400px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}