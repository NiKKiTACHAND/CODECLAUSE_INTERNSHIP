let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let backgroundText = document.getElementById("backgroundText"); 

function gradientChange(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    backgroundText.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);
