export function popValidation(msg){
    const popUp = document.createElement("div");
    const p = document.createElement('p');
    p.textContent = msg;
    popUp.classList.add("popValidation");
    document.body.appendChild(popUp);
    popUp.appendChild(p);

    setTimeout(()=>{
        document.body.removeChild(popUp);
    }, 1000)
}