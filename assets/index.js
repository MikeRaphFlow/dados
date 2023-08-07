
function generarNumero() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");


document.querySelector(".img2").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Gana Facu!!🚩"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Gana Ani!🚩"
} else { document.querySelector("h1").innerHTML = "Empate! Volver a tirar" }

}

document.getElementById("boton").addEventListener("click", generarNumero)