const sema=document.getElementById("sema")
const btn_vermelho=document.getElementById("btn_vermelho")
const btn_amarelo=document.getElementById("btn_amarelo")
const btn_verde=document.getElementById("btn_verde")
const btn_auto=document.getElementById("btn_auto")

const troca_colors=()=>{
   const cores=['vermelho','amarelo','verde']
   
}

const vermelho=()=>{
     sema.src='img/vermelho.png'
}

const amarelo=()=>{
    sema.src='img/amarelo.png'
}

const verde=()=>{
    sema.src='img/verde.png'
}


const auto=()=>{
    setInterval(troca_colors, 1000)
}

btn_vermelho.addEventListener("click",()=>{
    vermelho()
})

btn_amarelo.addEventListener("click",()=>{
    amarelo()
})

btn_verde.addEventListener("click",()=>{
    verde()
})

btn_auto.addEventListener("click",()=>{
    auto()
})
