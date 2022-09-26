const colors = ["green", "red", "blue", "yellow"];//Cores Simples
const btn = document.getElementById("btn")//Botão que faz a troca
const color = document.querySelector(".color")//Texto que identifica a Cor

btn.addEventListener("click", function(){ //Adicionando o evento no botão
    const randomNumber = getRandomNumber() //Numero aleatorio gerado por uma function

    document.body.style.backgroundColor = colors[randomNumber]//Muda para o index do numero aleatorio de 0 a 3
    color.textContent = colors[randomNumber]//Muda o texto de color para o index de colors 0 a 3
    color.style.color = colors
})

function getRandomNumber(){//função que gera p número aleatorio 
    return Math.floor(Math.random()*colors.length)
}
