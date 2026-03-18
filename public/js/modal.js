// Récupérer le modal
let modal = document.querySelector("#myModal");

// Récupérer le bouton qui ouvre le modal
let boutonModal = document.querySelector("#myBtn");

// Récupère l'élement <span> de la classe .close qui ferme le modal
let spanModal = document.querySelector(".close");

// Lorsque l'utilisateur clique sur le bouton, le modal s'ouvre

boutonModal.addEventListener("click",() => {
    modal.style.display = "block";
});


// Lorsque l'utilisateur clique le <span> (la croix x), le modal se ferme
spanModal.addEventListener("click", () => {
    modal.style.display = "none";
});


// Lorsque je clique en dehors de la fénêtre, la fenêtre se ferme.
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}




 