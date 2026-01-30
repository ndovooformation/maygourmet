const express = require('express');

const app = express();

// Je précise que les vues sont dans le dossier views
app.set('views', './views');

// Je précise que nous utilisons le moteur EJS pour les vues
app.set('view engine', 'ejs');

// API ROUTE pour la page racine : localhost:3004/
app.get('/', (req, res) => {
    // Message à afficher : Bienvenue chez MayGourmet
    res.write("<h1> Bienvenue chez MayGourmet </h1>");
    res.end();
});

// API ROUTE pour la page d'accueil localhost:3004/appi/accueil
app.get('/api/accueil', (req, res) => {
    console.log("Je passe dans /api/accueil");

    res.render('accueil');
    // Le type d'encodage du texte retourné en réponse
    //res.writeHead(200, { "content-type": "text/html;charset=utf-8"}); 

    // Le contenu qui sera affiché côté navigateur web
    //res.write("<p> Je suis à l'accueil</p>");

    // Fin de la réponse
    //res.end();
});

app.get('/api/equipe', (req, res) => {
    console.log("Je passe dans la route API REST /api/equipe");
    res.render('equipe');
});





module.exports = app;