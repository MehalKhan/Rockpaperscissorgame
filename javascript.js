/*
let random = Math.floor(Math.random() * 10 ) + 1;

console.log(random)

if (random < 3 ){
    console.log('Rock')
}else if (random < 6){
    console.log('Paper')
}else if (random > 6){
    console.log('scissor')
}else{
    console.log("null")
}
*/

/* get computer to choose between rock, paper,scissor*/
function getComputerChoice() {
    let random = Math.floor(Math.random() * 10 ) + 1;

    if (random < 3 ){
        return('rock');
    }else if (random < 6){
        return('paper');
    }else{
        return('scissor');
    } 
}


/* get human to make a choice between rock, paper, scissor*/ 
function getHumanChoice(){
    let choice = (prompt("Choose between rock, paper, or scissor: "))
    return choice

}
  


let humanScore = 0;
let computerScore = 0;



function playRound(getHumanChoice, getComputerChoice) {
    

    
    while (humanScore < 3 && computerScore < 3 ){
        let human = getHumanChoice().toLowerCase();
        let computer = getComputerChoice().toLowerCase();
        
        console.log("Human choice is: " + human);
        console.log("Computers choice: " + computer);

        if (human === computer) {
            console.log("draw")    
        }else if ((human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock") || (human === "scissor" && computer === "paper")) {
            humanScore++;  console.log("You Win this round!" + human + "beats" + computer) 
        }else if ((computer === "rock" && human === "scissor") || (computer === "paper" && human === "rock") || (computer === "scissor" && human === "paper")) {
            computerScore++;  console.log("You Lose this round!" + computer + "beats" + human) 
        }else {
            console.log("Invalid choice, choose again")
        }
        console.log("Score - Human: " + humanScore + ", Computer: " + computerScore);
    }
    
    if (humanScore === 3){
        return ("You win!")
    }else{
        return ("YOU LOSE!")
    }    
}


console.log(playRound(getHumanChoice,getComputerChoice))



