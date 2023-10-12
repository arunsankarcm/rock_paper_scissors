//function to play a single round

function playRound(computerSelection,playerSelection){
   playerSelection=playerSelection.toLowerCase();


 if(playerSelection!='rock' && playerSelection!='paper' && playerSelection!='scissors'){
        return 'invalid selection'
}

const options = ['rock', 'paper', 'scissors'];
computerSelection=options[Math.floor(Math.random()*3)];
console.log(computerSelection);

if(playerSelection==computerSelection){
    return 'tie'
}else if(
    (playerSelection=='rock' && computerSelection=='scissors')||
    (playerSelection=='scissors' && computerSelection=='paper')||
    (playerSelection=='paper' && computerSelection=='rock')
){
    return 'you win'
}else{
    return 'you lose'
}
}

const playerSelection= prompt("enter your choice");
const computerSelection='';
console.log(playRound(computerSelection,playerSelection));