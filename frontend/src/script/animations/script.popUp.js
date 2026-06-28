const bntCadastro = document.getElementById("cadastre");// Botão cadastro superior
const txtCadastro = document.getElementById("lCadastra");
const formLogin = document.getElementById("formLogin") // Formulario de login
const formCadastro = document.getElementById("formCadastro")// Formulario de cadastro

// Função para animação do login e cadastro:
function popUpLoginCad(){
    formLogin.classList.add("popDown");
    formLogin.classList.remove("popUp");

    formCadastro.classList.add("popUp");
    formLogin.classList.remove("DownUp");
    formCadastro.style.display = "flex";
}

let count; // Contador de interações
// Chamando Função de animação de cadastro:
bntCadastro.addEventListener("click",() => {
    count += 1;
    popUpLoginCad()});
txtCadastro.addEventListener("click", () => popUpLoginCad());