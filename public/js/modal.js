// Récupérer le modal
let modal = document.querySelector("#myModal");

// Récupérer le bouton qui ouvre le modal
let boutonModal = document.querySelector("#myBtn");

// Récupère l'élement <span> de la classe .close qui ferme le modal
let spanModal = document.querySelector(".close")[0];

// Lorsque l'utilisateur clique sur le bouton, le modal s'ouvre
boutonModal.onclick = function() {
    modal.style.display = "block";
}

// Lorsque l'utilisateur clique le <span> (la croix x), le modal se ferme
boutonModal.onclick = function() {
    modal.style.display = "none";
}