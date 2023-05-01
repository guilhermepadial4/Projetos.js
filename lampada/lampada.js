const btn_On_Off=document.getElementById("btn_On_Off")
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
    if(!lam_quebrada_sn()){
    lamp.src = 'img/lampada-quebrada.png'
    }
}

function lamp_on_off () {
    if(btn_On_Off.textContent == 'Ligar'){
        lamp_ligada()
        btn_On_Off.textContent = 'Desligar'
    }else{
        lamp_desligada()
        btn_On_Off.textContent = 'Ligar'
    }
}

 btn_On_Off.addEventListener("click",()=>{
    lamp_on_off()
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
