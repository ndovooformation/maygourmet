const express = require('express');
// J'importe le pilote Mysql2 utilisé interroger la BDD MySQL
const mysql2 = require('mysql2'); 

// J'importe le pilote express-myconnection utilisé pour me connecter à la BDD
const myConnection = require('express-myconnection');

const app = express();

app.use(express.urlencoded({extended:false}));

// Je configure les éléments attendus pour me connecter à MySQL 
const optionsConnexionBaseDeDonnees = {
    host: "localhost",
    user: "root",
    password: "pd+12SQm",
    database: "maygourmet",
    port: 3306
};

/* Middleware pour se connecter à la BDD MySQL
"pool" est la stratégie de connexion à la BDD MySQL
*/
app.use(myConnection(mysql2, optionsConnexionBaseDeDonnees, "pool"));

// Je précise que les vues sont dans le dossier views
app.set('views', './views');

// Je précise que nous utilisons le moteur EJS pour les vues
app.set('view engine', 'ejs');

// Je précise que j'utilise le dossier 'public' qui contient les fichiers statics
app.use(express.static("public"));

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
    // 1. Je me connecte à la BDD grâce à la méthode getConnection()
    req.getConnection((erreur, connection) => {
        if(erreur) { // Je vérifie s'il y a une erreur lors de la connexion à la BDD
            console.log(erreur);
        } else {
            connection.query("SELECT * FROM equipe", [], (err, resultatEquipe) => {
                if (err) {
                    console.log("Erreur dans la requête SQL SELECT : ", err);
                    return res.status(500).send("Erreur dans la requête SQL SELECT :");
                } else {
                    console.log(" Mon équipe : ", resultatEquipe);

                    // Je retourne au client le résultat de la requpete SQL
                    res.render("equipe", {resultatEquipe});
                }
            });
        }
    });

});


/* J'ajoute un fournisseur dans la table fournisseur. Pour cela, j'utilise la méthode POST
*/
app.post('/api/fournisseur', (req, res) => {
    console.log("Corps de la requête : ", req.body);

});


app.get('/api/fournisseur', (req, res) => {
    res.render("fournisseur");
});



module.exports = app;