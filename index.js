console.log("welcome");
const computerChoiceDis = document.getElementById("computer-choice");
const userChoiceDis = document.getElementById("user-choice");
const resultDis = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let compChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDis.innerHTML = userChoice;
    gnerateCompChoice();
    generateResult();
  })
);

function gnerateCompChoice() {
    const randomChoice =Math.floor(Math.random()*3)+1;
    console.log(randomChoice);

if(randomChoice == 1){
    // computerChoiceDis.innerHTML="rock"
    compChoice="rock"
}

if(randomChoice == 2){
    // computerChoiceDis.innerHTML="paper"
    compChoice="paper"
}

if(randomChoice == 3){
    // computerChoiceDis.innerHTML="scissor"
    compChoice="scissor"
}
computerChoiceDis.innerHTML=compChoice;
}

function generateResult(){

if(compChoice === userChoice){
    result="It's a Draw"
}
if(compChoice=="rock" && userChoice=="paper"){
    result="You Win :)"
}
if(compChoice=="rock" && userChoice=="scissor"){
    result="You Lose !"
}
if(compChoice=="paper" && userChoice=="scissor"){
    result="You Win :)"
}
if(compChoice=="papeer" && userChoice=="rock"){
    result="You Lose !"
}
if(compChoice=="scissor" && userChoice=="rock"){
    result="You Win :)"
}
if(compChoice=="scissor" && userChoice=="paper"){
    result="You Lose !"
}



resultDis.innerHTML=result;
}