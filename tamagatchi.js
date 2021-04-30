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

let happiness = 75
let fullness = 75
let cleaness = 75
let energy = 75


petName.addEventListener("change", (e)=> {
  interactLabel.innerHTML = `<h3>Interact with ${petName.value}!</h3>`
})

petButton.addEventListener("click", (e)=> {
  happiness += 10
  cleaness -= 5
  fullness -= 2
  energy -= 5
  if (fullness < 1 | cleaness < 1 | energy < 1) {
    petButton.disabled = "True"
    feedButton.disabled = "True"
    bathButton.disabled = "True"
    singButton.disabled = "True"
    petImage.innerHTML = '<img src="img/ghost.gif" />'
    petStatus.innerHTML = "Goodbye..."
  } else if (fullness < 40 | cleaness < 40 | energy < 40) {
    petImage.innerHTML = '<img src="img/angry.gif" />'
    happiness -= 5
    if (fullness < 40) {
      petStatus.innerHTML = "I'm too hungry!"
    } else if (cleaness < 40) {
      petStatus.innerHTML = "Clean me!"
    } else if (energy < 40) {
      petStatus.innerHTML = "I'm too tired!"
    }
  } else if (happiness > 90) {
    petImage.innerHTML = '<img src="img/very-happy.gif" />'
    petStatus.innerHTML = "Oppa Gangnam Style!!"
  } else if (happiness < 40) {
    petImage.innerHTML = '<img src="img/lazy.gif" />'
    petStatus.innerHTML = "I'm bored!!"
  } else {
    petImage.innerHTML = '<img src="img/pet.gif" />'
    petStatus.innerHTML = "I like pets!"
  }
  
  happyLabel.innerHTML = `${happiness}`
  cleanLabel.innerHTML = `${cleaness}`
  fullLabel.innerHTML = `${fullness}`
  energyLabel.innerHTML = `${energy}`
})

feedButton.addEventListener("click", (e)=> {
  fullness += 10
  happiness += 2
  cleaness -= 5
  energy -= 10
  if (happiness < 1 | cleaness < 1 | energy < 1) {
    petButton.disabled = "True"
    feedButton.disabled = "True"
    bathButton.disabled = "True"
    singButton.disabled = "True"
    petImage.innerHTML = '<img src="img/ghost.gif" />'
    petStatus.innerHTML = "Goodbye..."
  } else if (happiness < 40 | cleaness < 40 | energy < 40) {
    petImage.innerHTML = '<img src="img/angry.gif" />'
    happiness -= 5
    if (happiness < 40) {
      petStatus.innerHTML = "I'm too upset!"
    } else if (cleaness < 40) {
      petStatus.innerHTML = "Clean me!"
    } else if (energy < 40) {
      petStatus.innerHTML = "I'm too tired!"
    }
  } else if (fullness < 40) {
    petImage.innerHTML = '<img src="img/very-hungry.gif" />'
    petStatus.innerHTML = "Yummy!"
  } else if (fullness < 100) {
    petImage.innerHTML = '<img src="img/little-hungry.gif" />'
    petStatus.innerHTML = "This is yummy! I'm getting full."
  } else {
    fullness -= 10
    petImage.innerHTML = '<img src="img/too-full.gif" />'
    petStatus.innerHTML = "No more please! I'm too full."
  }
  
  happyLabel.innerHTML = `${happiness}`
  cleanLabel.innerHTML = `${cleaness}`
  fullLabel.innerHTML = `${fullness}`
  energyLabel.innerHTML = `${energy}`
})

bathButton.addEventListener("click", (e)=> {
  cleaness += 10
  energy += 5
  happiness -= 3
  fullness -= 3
  if (happiness < 1 | fullness < 1 | energy < 1) {
    petButton.disabled = "True"
    feedButton.disabled = "True"
    bathButton.disabled = "True"
    singButton.disabled = "True"
    petImage.innerHTML = '<img src="img/ghost.gif" />'
    petStatus.innerHTML = "Goodbye..."
  } else if (happiness < 40 | fullness < 40 | energy < 40) {
    petImage.innerHTML = '<img src="img/angry.gif" />'
    cleaness -= 5
    happiness -= 2
    if (happiness < 40) {
      petStatus.innerHTML = "I'm not in the mood for a bath!"
    } else if (fullness < 40) {
      petStatus.innerHTML = "I'm too hungry!"
    } else if (energy < 40) {
      petStatus.innerHTML = "I'm too tired!"
    }
  } else {
    petImage.innerHTML = '<img src="img/clean.gif" />'
    petStatus.innerHTML = "I like bathes!"
  }
  
  happyLabel.innerHTML = `${happiness}`
  cleanLabel.innerHTML = `${cleaness}`
  fullLabel.innerHTML = `${fullness}`
  energyLabel.innerHTML = `${energy}`
})

singButton.addEventListener("click", (e)=> {
  energy += 10
  cleaness -= 2
  happiness += 2
  fullness -= 3
  
  if (happiness < 1 | fullness < 1 | cleaness < 1) {
    petButton.disabled = "True"
    feedButton.disabled = "True"
    bathButton.disabled = "True"
    singButton.disabled = "True"
    petImage.innerHTML = '<img src="img/ghost.gif" />'
    petStatus.innerHTML = "Goodbye..."
  } else if (happiness < 40 | fullness < 40 | cleaness < 40) {
    petImage.innerHTML = '<img src="img/angry.gif" />'
    happiness -= 2
    energy -= 5
    if (happiness < 40) {
      petStatus.innerHTML = "I'm too upset!"
    } else if (fullness < 40) {
      petStatus.innerHTML = "I'm too hungry!"
    } else if (cleaness < 40) {
      petStatus.innerHTML = "Clean me!"
    }
  } else {
    petImage.innerHTML = '<img src="img/sleep.gif" />'
    petStatus.innerHTML = "zzzZZZzzzZz"
  }
  
  happyLabel.innerHTML = `${happiness}`
  cleanLabel.innerHTML = `${cleaness}`
  fullLabel.innerHTML = `${fullness}`
  energyLabel.innerHTML = `${energy}`
})
