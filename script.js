let buttonPlus = document.getElementById("btn+");
let buttonMinus = document.getElementById("btn-");
let container = document.getElementById("div-container");
let input = document.getElementById("text-input");

// CREATION D'UNE FONCTION QUI PERMET D'AJOUTER DES DIV
function createCard() {
  let box = document.createElement("div");
  box.classList.add("custom-div");

  // ON MET LE CONTENU DE L'INPUT ET UN CONTENU PAR DEFAUT SI AUCUNE VALEUR
  box.textContent = input.value || "Tu n'as rien écris !";

  container.append(box);

  // VIDER L'INPUT APRES L'AJOUT
  input.value = "";
}

// AJOUT DE L'EVENEMENT CLICK SUR LE BOUTON + POUR AJOUTER UNE DIV
buttonPlus.addEventListener("click", createCard);

// AJOUT DE L'EVENEMENT keydown SUR INPUT POUR AJOUTER UNE DIV A CHAQUE CLICK SUR LA TOUCHE ENTRER
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createCard();
  }
});

// AJOUT DE L'EVENEMENT CLICK SUR LE BOUTON - POUR SUPPRIMER LA DERNIERE DIV
buttonMinus.addEventListener("click", () => {
  let lastDiv = container.querySelector(".custom-div:last-of-type");
  if (lastDiv) {
    lastDiv.remove();
  }
});
