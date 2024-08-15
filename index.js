var randomNumber1 = 0 ;
var randomNumber2 = 0 ;

var isp1rolled = false;
var isp2rolled = false;


function rollP1(){
randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 ;
randomNumber1 = Math.floor(randomNumber1) + 1 ;

if(randomNumber1 === 1){
    document.querySelector(".img1").src = "images/dice1.png"; 
}else if (randomNumber1 === 2){
    document.querySelector(".img1").src = "images/dice2.png";
}else if (randomNumber1 === 3){
    document.querySelector(".img1").src = "images/dice3.png";
}else if (randomNumber1 === 4){
    document.querySelector(".img1").src = "images/dice4.png";
}else if (randomNumber1 === 5){
    document.querySelector(".img1").src = "images/dice5.png";
}else{
    document.querySelector(".img1").src = "images/dice6.png";
}

isp1rolled =true ;
checkWinner();

}

function rollP2 (){

randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 ;
randomNumber2 = Math.floor(randomNumber2) + 1 ;

if(randomNumber2 === 1){
    document.querySelector(".img2").src = "images/dice1.png"; 
}else if (randomNumber2 === 2){
    document.querySelector(".img2").src = "images/dice2.png";
}else if (randomNumber2 === 3){
    document.querySelector(".img2").src = "images/dice3.png";
}else if (randomNumber2 === 4){
    document.querySelector(".img2").src = "images/dice4.png";
}else if (randomNumber2 === 5){
    document.querySelector(".img2").src = "images/dice5.png";
}else{
    document.querySelector(".img2").src = "images/dice6.png";
}

isp2rolled = true;
checkWinner();

}

function checkWinner(){
    if(isp1rolled && isp2rolled){
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").textContent = "Tied";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins";
}
isp1rolled = false;
isp2rolled = false;

    }
}

