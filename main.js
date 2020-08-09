const players = document.querySelectorAll(".player");

const player1 = document.querySelector("#player1"),
  player2 = document.querySelector("#player2");

const attack1 = player1.querySelector(".attack"),
  heal1 = player1.querySelector(".heal");

const attack2 = player2.querySelector(".attack"),
  heal2 = player2.querySelector(".heal");

// let activePlayer = null;
let activePlayer = player1;
let activePlayers = [player1, player2]

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Player {
  constructor() {
    this.ap = 10
    this.hp = 50
    this.def = 5
  }

  attack(enemy) { // this could even be outside the class....
    let attackPoints = generateRandomNumber(1, 10)
    console.log(`before: ${enemy.hp}`)
    enemy.hp -= attackPoints
    console.log(`after: ${enemy.hp}`)
  }

  heal() {
    console.log(`before: ${this.hp}`)
    let extraPoints = generateRandomNumber(1, 10)
    if (this.hp + extraPoints > 50) {
      this.hp += 50 - this.hp
    } else {
      this.hp += extraPoints
    }
    console.log(`after adding ${extraPoints} health points: ${this.hp}`)
  }
}

const p1 = new Player();
const p2 = new Player();

attack1.addEventListener("click", () => {
  if (activePlayer === player1) {
    p1.attack(p2) // I believe I could use an object or an array to avoud doing this
    activePlayer = player2
  }
})

heal1.addEventListener("click", () => {
  if (activePlayer === player1) {
    p1.heal()
    activePlayer = player2
  }
})

attack2.addEventListener("click", () => {
  if (activePlayer === player2) {
    p2.attack(p1)
    activePlayer = player1
  }
})

heal2.addEventListener("click", () => {
  if (activePlayer === player2) {
    p2.heal()
    activePlayer = player1
  }
})

