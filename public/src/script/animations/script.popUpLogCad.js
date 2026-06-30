const formLogin = document.getElementById("formLogin") // Formulario de login
const formCadastro = document.getElementById("formCadastro");// Formulario de cadastro

// Função para animação do login e cadastro:
export function popUpLoginCad(pop){
    // Verificando que botão foi apertado;
    if(pop == "Cadastro"){
        formLogin.classList.add("popDown");
        formLogin.classList.remove("popUp");

        formCadastro.classList.add("popUp");
        formCadastro.classList.remove("popDown");
    }

    if(pop == "Login"){
        formLogin.classList.add("popUp");
        formLogin.classList.remove("popDown");

        formCadastro.classList.add("popDown");
        formCadastro.classList.remove("popUp");
    }
    
}


