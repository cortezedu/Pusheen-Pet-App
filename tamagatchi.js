console.log("Tamagatchi script running...")

const petButton = document.querySelector("#pet-button")
const feedButton = document.querySelector("#feed-button")
const bathButton = document.querySelector("#bath-button")
const singButton = document.querySelector("#sing-button")

const happyLabel = document.querySelector("#happy")
const fullLabel = document.querySelector("#full")
const cleanLabel = document.querySelector("#clean")
const energyLabel = document.querySelector("#energy")

const petStatus = document.querySelector("#pet-status")
const petImage = document.querySelector("#pet-image")

const petName = document.querySelector("#pet-name")
const interactLabel = document.querySelector("#interact-label")

let happiness = 50
let fullness = 50
let cleaness = 50
let energy = 50


petName.addEventListener("change", (e)=> {
  interactLabel.innerHTML = `<h3>Interact with ${petName.value}!</h3>`
})

petButton.addEventListener("click", (e)=> {
  happiness += 10
  happyLabel.innerHTML = `${happiness}`
  cleaness -= 5
  cleanLabel.innerHTML = `${cleaness}`
  fullness -= 2
  fullLabel.innerHTML = `${fullness}`
  energy -= 5
  energyLabel.innerHTML = `${energy}`
})

feedButton.addEventListener("click", (e)=> {
  fullness += 10
  fullLabel.innerHTML = `${fullness}`
  happiness += 2
  happyLabel.innerHTML = `${happiness}`
  cleaness -= 5
  cleanLabel.innerHTML = `${cleaness}`
  energy -= 10
  energyLabel.innerHTML = `${energy}`
})

bathButton.addEventListener("click", (e)=> {
  cleaness += 10
  cleanLabel.innerHTML = `${cleaness}`
  energy += 5
  energyLabel.innerHTML = `${energy}`
  happiness -= 5
  happyLabel.innerHTML = `${happiness}`
  fullness -= 3
  fullLabel.innerHTML = `${fullness}`
})

singButton.addEventListener("click", (e)=> {
  energy += 10
  energyLabel.innerHTML = `${energy}`
  cleaness -= 2
  cleanLabel.innerHTML = `${cleaness}`
  happiness -= 2
  happyLabel.innerHTML = `${happiness}`
  fullness -= 3
  fullLabel.innerHTML = `${fullness}`
})