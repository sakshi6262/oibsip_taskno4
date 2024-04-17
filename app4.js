let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");
let submit=document.getElementById("submit");


signinBtn.addEventListener("click",()=>{

nameField.style.maxHeight="0";
title.innerHTML="login"
signupBtn.classList.add("disable");
signinBtn.classList.remove("disable");


})

signupBtn.addEventListener("click",()=>{

    nameField.style.maxHeight="60px";
    title.innerHTML="Register"
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    
    
    })