const[nome, email] = document.querySelectorAll("input");
const[assunto] = document.querySelector("textarea");
const botaoEnviar = document.querySelector("#botao");

function validarBotao(){
    if(nome.value && email.value.indexOf("@") && assunto.value.length >= 10){
        botaoEnviar.classList.add("ativarCorBotao");
        botaoEnviar.removeAttribute("disabled");
    }else{
        botaoEnviar.classList.remove("ativarCorBotao");
        botaoEnviar.setAttribute("disabled", "disabled");
    }
}

nome.addEventListener("input", validarBotao);
email.addEventListener("input", validarBotao);
assunto.addEventListener("textarea", validarBotao);
