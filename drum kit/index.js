"use strict";

const container=document.getElementById("container")

const sounds={
    "A":'boom.wav',
    "S":'clap.wav',
    "D":'hihat.wav',
    "F":'kick.wav',
    "G":'openhat.wav',
    "H":'ride.wav',
    "J":'snare.wav',
    "K":'tink.wav',
    "L":'tom.wav'
}

const create_div=(text)=>{
    const div=document.createElement("div");
    div.classList.add("key");
    div.textContent=text;
    div.id=text;
    container.appendChild(div);
}

const display=(sounds)=>{
    Object.keys(sounds).forEach(create_div);
}

const playSound=(letter)=>{
    const audio=new Audio(`./sounds/${sounds[letter]}`);
    audio.play();
}

const addEffect=(letter)=>{ 
    document.getElementById(letter).classList.add("active");
}

const removeEffect=(letter)=>{
    const div=document.getElementById(letter);
    const removeActive=()=> div.classList.remove("active");
    div.addEventListener("transitionend",removeActive);
}

const activate_div=(evt)=>{
    let letter=""
    if(evt.type == "click"){
         letter=evt.target.id;
    }else{
        letter=evt.key.toUpperCase();
    }
    const letterallowed=sounds.hasOwnProperty(letter);
    if(letterallowed){
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
}

display(sounds);

container.addEventListener("click",activate_div);

window.addEventListener("keydown",activate_div)
