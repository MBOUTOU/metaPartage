const ClickparentButton = document.querySelector(".clickparent");
const BlockLinks = document.querySelector(".flottant-block");
const BlackElement = document.querySelector(".id-black");
const BodyStyle = document.querySelector("body");

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



// la partie des elements de partage 
document.addEventListener("DOMContentLoaded", () =>{
  let URldelapage = window.location.href;

  if(URldelapage.includes("localhost")){
    URldelapage = "https://github.com/MBOUTOU/metaPartage";
  }
  const EncodeUrlPage = encodeURIComponent(URldelapage);
  const MessageProduit = encodeURIComponent("Découvrer cette belle affiche de qualité");
  

  function partagerSurFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${EncodeUrlPage}`, '_blank', 'noopener,noreferrer');
  };

  function partagerSurWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=${MessageProduit}%20${EncodeUrlPage}`, '_blank', 'noopener,noreferrer');
  };

  function partagerSurLinkedIn() {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${EncodeUrlPage}`, '_blank', 'noopener,noreferrer');
  };

  function ouvrirInstagram() {
    window.open(`https://www.instagram.com/ton_nom_d_utilisateur/`, '_blank', 'noopener,noreferrer');
  };

const btnFacebook = document.querySelector(".sharFacebook");
const btnInstagram = document.querySelector(".sharInsta");
const btnLinkedIn = document.querySelector(".sharLinkdin");
const btnWhatsApp = document.querySelector(".sharWhatsapp")

if(btnFacebook){
  btnFacebook.addEventListener('click', partagerSurFacebook)
}

if(btnWhatsApp){
  btnWhatsApp.addEventListener('click', partagerSurWhatsApp);
}

if(btnInstagram){
  btnInstagram.addEventListener("clicl", ouvrirInstagram)
};

if(btnLinkedIn){
  btnLinkedIn.addEventListener("click", partagerSurLinkedIn)
}
})






