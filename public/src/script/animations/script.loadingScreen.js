export function loadingScreen(){
    const screen = document.createElement("div");
    screen.id = "screen"
    screen.classList.add("loading");
    document.body.appendChild(screen);

    // Incluindo 3 esferas
    for(let i = 0; i<3; i++){
        let esfera = document.createElement("div");
        esfera.classList.add("esfera");
        screen.appendChild(esfera);
    }
}
export function rmLoading(){
    const screen = document.getElementById("screen");
    
    setTimeout(()=>{

    },2000)
    document.body.removeChild(screen);
    
}
    
    
