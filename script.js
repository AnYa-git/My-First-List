let buttonPlus = document.getElementById("btn+");
let buttonMinus = document.getElementById("btn-");
let container = document.getElementById("div-container");

function createCard() {
  let box = document.createElement("div");
  box.classList.add("custom-div");
  container.append(box);
}

buttonPlus.addEventListener("click", createCard);

buttonMinus.addEventListener("click", () => {
  let lastDiv = container.querySelector(".custom-div:last-of-type");
  if (lastDiv) {
    lastDiv.remove();
  }
});
