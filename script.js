let character = null;

function getDamage() {
  let damage = Math.floor((Math.random() * 5) + 1);
  return damage;
}

function startCombat() {
  let play = prompt("Would you like to attack or quit?");

    if (play === "attack") {

      let userHealth = 40;
      let grantHealth = 10;
      
      let userWins = 0;
      let grantWins = 0;
      
      while (userHealth > 0 && grantHealth > 0) {

        userHealth -= getDamage();
        grantHealth -= getDamage();
      
        console.log(` ${character}'s health is ${userHealth}`)
        console.log(` Grant's health is ${grantHealth}`)

        let again = prompt("Would you like to attack or quit?");

        if (again === "attack"){
                
          if (grantHealth <= 0) {
            userWins ++;
            grantHealth = 10;
            console.log("Grant is defeated and user gets win number " + userWins);
          } if (userWins === 3) {
            console.log(`${character} is the winner!`);
            break;
          }
          if (userHealth <= 0) {
            console.log("Grant is the winner");
            break; 
          }
        } else if (again === "quit") {
          console.log("goodbye");
          break;
        }

      } 
    } else if (play === 'quit'){
      console.log('goodbye');
    }
  } 


function startGame() {
  let play = prompt("Would you like to play?");
  if (play === "yes") {
    character = prompt("Please enter your character's name:");
    startCombat();
  }
}



startGame();
