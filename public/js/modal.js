// Récupérer le modal de création
let modalCreate = document.querySelector("#myModal");

// Récupérer le bouton qui ouvre le modal de création
let boutonModalCreate = document.querySelector("#myBtn");

// Récupère l'élement <span> de la classe .close qui ferme le modal
let spanModal = document.querySelector(".close");

// Lorsque l'utilisateur clique sur le bouton, le modal s'ouvre

boutonModalCreate.addEventListener("click",() => {
    modalCreate.style.display = "block";
});


// Lorsque l'utilisateur clique le <span> (la croix x), le modal se ferme
spanModal.addEventListener("click", () => {
    modalCreate.style.display = "none";
});


// Lorsque je clique en dehors de la fénêtre, la fenêtre se ferme.
window.onclick = function(event) {
    if(event.target == modalCreate) {
        modalCreate.style.display = "none";
    }
}


// Récupérer le modal de création
// let modalEdit = document.querySelector("#myModalEdit");

// Récupérer le bouton qui ouvre le modal de création
// let boutonModalEdit = document.querySelectorAll("#boutonModifier");

// boutonModalEdit.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         e.preventDefault;
//         modalEdit.style.display = "block";

//         console.log(btn);

//     })

    
// })



// Lorsque je clique en dehors de la fénêtre, la fenêtre se ferme.
window.onclick = function(event) {
    if(event.target == modalEdit) {
        modalEdit.style.display = "none";
    }
}

// 1. Récupérer le bouton qui ouvre le modal pour la modification
let boutonModalModifier = document.querySelector("#boutonModifier");



// 2. Lorsque l'utilisateur clique sur le bouton, le modal de modification s'ouvre
boutonModalModifier.addEventListener("click",() => {
    modal.style.display = "block";
});

