const btn_ligar=document.getElementById("btn_ligar")
const btn_desligar=document.getElementById("btn_desligar")
const lamp=document.getElementById("lamp")

function lam_quebrada_sn() {
    return lamp.src.indexOf ('lampada-quebrada') > -1
}

function lamp_desligada () {
    if(!lam_quebrada_sn()){
        lamp.src='img/lampada-desligada.png' 
    }
}

function lamp_ligada () {
    if(!lam_quebrada_sn()){
        lamp.src='img/lampada-ligada.png'
    } 
}

function lamp_quebrada () {
    lamp.src = 'img/lampada-quebrada.png'
}

 btn_ligar.addEventListener("click",()=>{
    lamp_ligada()
})

 btn_desligar.addEventListener("click",()=>{
     lamp_desligada()
 })

 lamp.addEventListener("mouseover",()=>{
     lamp_ligada()
})

 lamp.addEventListener("mouseleave",()=>{
     lamp_desligada()
})

 lamp.addEventListener("dblclick",()=>{
    lamp_quebrada()
})
