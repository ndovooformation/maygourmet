function supprimer(id) {
    const routeComplete = '/api/equipe/'+ id;

    fetch(
        routeComplete, {method: "DELETE"}
    ).then(
        (reponse) => response.json()
    ).then(
        (donnee) => window.location.href = donnee.routeAccueil
    ).catch(
        (erreur) => console.log(erreur)
    )
}