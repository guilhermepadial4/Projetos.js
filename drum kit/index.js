"use strict";

const souds={
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
    div.setAttribute("class","key");
    div.textContent=text;
    div.id=text;
    document.getElementById("container").appendChild(div);
}

const display=(souds)={
    
}

display(souds);