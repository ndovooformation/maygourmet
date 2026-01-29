const express = require('express');

const app = express();


// API ROUTE pour la page racine : localhost:3004/
app.get('/', (req, res) => {
    // Message à afficher : Bienvenue chez MayGourmet
    res.write("<h1> Bienvenue chez MayGourmet </h1>");
    res.end();
});

// API ROUTE pour la page d'accueil localhost:3004/appi/accueil
app.get('/api/accueil', (req, res) => {
    console.log("Je passe dans /api/accueil");

    // Le type d'encodage du texte retourné en réponse
    res.writeHead(200, { "content-type": "text/html;charset=utf-8"}); 

    // Le contenu qui sera affiché côté navigateur web
    res.write("<p> Je suis à l'accueil</p>");

    // Fin de la réponse
    res.end();
});





module.exports = app;