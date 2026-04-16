function supprimer(id) {
    const routeComplete = '/api/equipe/'+ id;

    fetch(
        routeComplete, {method: "DELETE"}
    ).then(
        (reponse) => reponse.json()
    ).then(
        (donnee) => window.location.href = donnee.routeAccueil
    ).catch(
        (erreur) => console.log(erreur)
    )
}

function modifier(id, nom, prenom, mail, telephone, poste, adresse_postale, presentation, date_recrutement) {
    document.querySelector()

}