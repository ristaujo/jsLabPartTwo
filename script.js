/* let choice = prompt("Do you want to play?");
if (choice === "yes") {
  let userName = prompt("What is your name?");
  let userHealth = 40;
  let grantHealth = 10;
  
  let userWins = 0;
  let grantWins = 0;
  
  while (userHealth > 0 && grantHealth > 0) {
    userHealth -= Math.floor((Math.random() * 2) + 1);
    grantHealth -= Math.floor((Math.random() * 2) + 1);
  
    console.log(` ${userName}'s health is ${userHealth}`)
    console.log(` Grant's health is ${grantHealth}`)
  
  
    if (grantHealth <= 0) {
      userWins ++;
      grantHealth = 10;
      console.log("Grant is defeated and user get " + userWins + "win")
    } if (userWins === 3) {
      console.log(`${userName} is the winner!`);
      break;
    }
    if (userHealth <= 0) {
      console.log("Grant is the winner");
      break;
    }
    
  }


} */
/* function startCombat() {
  let userHealth = 40;
  let grantHealth = 10;
  
  let userWins = 0;
  let grantWins = 0;
  
  while (userHealth > 0 && grantHealth > 0) {
    userHealth -= Math.floor((Math.random() * 2) + 1);
    grantHealth -= Math.floor((Math.random() * 2) + 1);
  
    console.log(` ${userName}'s health is ${userHealth}`)
    console.log(` Grant's health is ${grantHealth}`)
  
  
    if (grantHealth <= 0) {
      userWins ++;
      grantHealth = 10;
      console.log("Grant is defeated and user get " + userWins + "win")
    } if (userWins === 3) {
      console.log(`${userName} is the winner!`);
      break;
    }
    if (userHealth <= 0) {
      console.log("Grant is the winner");
      break; 
    }
  } 
} */

let character = null;
let play = false;

function getDamage() {
  let damage = Math.floor((Math.random() * 5) + 1);
  return damage;
}

function startCombat() {
  let play = prompt("Would you like to attack or quit?");

  //while (play === "attack") {


    let userHealth = 40;
    let grantHealth = 10;
    
    let userWins = 0;
    let grantWins = 0;
    
    while (userHealth > 0 && grantHealth > 0) {

      userHealth -= getDamage();
      grantHealth -= getDamage();
    
      console.log(` ${character}'s health is ${userHealth}`)
      console.log(` Grant's health is ${grantHealth}`)


    
    
    
      if (grantHealth <= 0) {
        userWins ++;
        grantHealth = 10;
        console.log("Grant is defeated and user gets win number " + userWins)
      } if (userWins === 3) {
        console.log(`${character} is the winner!`);
        break;
      }
      if (userHealth <= 0) {
        console.log("Grant is the winner");
        break; 
      }
    }
  } 
//} 

function startGame() {
  let play = prompt("Would you like to play?");
  if (play === "yes") {
    character = prompt("Please enter your character's name:");
    console.log(character);
    startCombat();
  }
}



startGame();
//startCombat();
//getDamage();