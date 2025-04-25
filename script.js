let body = document.querySelector("body")
let tenis = document.querySelector (".imagem-tenis")

function mudarvisual(cor, imagem){
    tenis.classList.add("troca-efeito")
    setTimeout(() => {   tenis.classList.add("troca-efeito")
        tenis.classList.remove("troca-efeito")
        
    }, 500);



    body.style.background = cor
    tenis.src = imagem

}
