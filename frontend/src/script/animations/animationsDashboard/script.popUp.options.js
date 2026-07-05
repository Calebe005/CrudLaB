export function popUpOptions(option){
    // Recebendo elementos:
    const popExcluir = document.getElementById("popExcluir");
    const pesquisa = document.getElementById("poPesquisa");
    const formUpdate = document.getElementById("formCadastro");

    document.documentElement.style.setProperty("--position", "-250%");

    if(option == "Update"){
        setTimeout(()=>{
           formUpdate.style.display = "flex";
        }, 1000);
        
        formUpdate.classList.remove("popDown");
        formUpdate.classList.add("popUp");
        popExcluir.classList.add("popDown");
        pesquisa.classList.add("popDown");

        setTimeout(()=>{
            popExcluir.style.display = "none";
            pesquisa.style.display = "none";
        }, 2000);
    }

    if(option == "Delete"){
        setTimeout(()=>{
            popExcluir.style.display = "flex";
        }, 1000);

        popExcluir.classList.remove("popDown");
        popExcluir.classList.add("popUp");
        formUpdate.classList.add("popDown");
        pesquisa.classList.add("popDown");
       
        setTimeout(()=>{
            formUpdate.style.display = "none";
            pesquisa.style.display = "none";
        }, 1000);
    }

    if(option == "Pesquisa"){
        setTimeout(()=>{
            pesquisa.style.display = "flex";
        }, 1000);

        pesquisa.classList.remove("popDown");
        pesquisa.classList.add("popUp");
        popExcluir.classList.add("popDown");
        formUpdate.classList.add("popDown");

        setTimeout(()=>{
            popExcluir.style.display = "none";
            formUpdate.style.display = "none";
        }, 2000);
    }

    
}