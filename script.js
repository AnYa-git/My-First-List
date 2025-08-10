let buttonPlus = document.getElementById("btn+");
let buttonMinus = document.getElementById("btn-");
let container = document.getElementById("div-container");

// CREATION D'UNE FONCTION QUI PERMET D'AJOUTER DES DIV
function createCard() {
  let box = document.createElement("div");
  box.classList.add("custom-div");
  container.append(box);
}

// AJOUT DE L'EVENEMENT CLICK SUR LE BOUTON + POUR AJOUTER UNE DIV
buttonPlus.addEventListener("click", createCard);

// AJOUT DE L'EVENEMENT CLICK SUR LE BOUTON - POUR SUPPRIMER LA DERNIERE DIV
buttonMinus.addEventListener("click", () => {
  let lastDiv = container.querySelector(".custom-div:last-of-type");
  if (lastDiv) {
    lastDiv.remove();
  }
});
