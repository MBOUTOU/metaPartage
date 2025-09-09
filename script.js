const ClickparentButton = document.querySelector(".clickparent");
const BlockLinks = document.querySelector(".flottant-block");
const BlackElement = document.querySelector(".id-black");
const BodyStyle = document.querySelector("body")
ClickparentButton.addEventListener('click', (e) => {
  e.stopPropagation();
  BlockLinks.classList.toggle("active");
  BlackElement.classList.toggle("active");
  BodyStyle.classList.toggle("active");
});

// Empêche la fermeture si on clique dans le bloc
BlockLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Ferme le bloc si on clique en dehors
document.addEventListener("click", () => {
  BlockLinks.classList.remove("active");
  BlackElement.classList.remove("active");
  BodyStyle.classList.remove("active")
});
