let slider=document.getElementById("slider");
let button=document.getElementById("button");
let value=document.getElementById("value");
let password=document.getElementById("password");
let container_password=document.getElementById("container-password")

let charset="abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ123456789";

let newPassword="";

value.innerHTML=slider.value;

slider.oninput=function(){
    value.innerHTML=this.value;
}

const generatePassword=()=>{
    let pass="";
    for(let i=0, n=charset.length; i<slider.value; ++i){
        pass+=charset.charAt(Math.floor(Math.random() *n));
    }
    container_password.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

button.addEventListener("click",(evt)=>{
    generatePassword();
})


function copyPassword(){
    alert("vai");
    navigator.clipboard.writeText(newPassword);
}
