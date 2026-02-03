-- Créer la base de données
CREATE DATABASE maygourmet;
-- Afficher les bases de données
SHOW DATASES;


-- Créer la table equipe
CREATE TABLE equipe (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR(155) NOT NULL,
    mail VARCHAR(100), -- ce champ est facultatif
    telephone VARCHAR(100) NOT NULL,
    poste VARCHAR(80) NOT NULL,
    adresse_postale VARCHAR(255),
    presentation VARCHAR(255),
    date_recrutement DATE
);

-- afficher les tables existante 
SHOW TABLES;

-- Ajouter un membre dans l'équipe
INSERT INTO equipe (nom, prenom, mail, telephone, poste, adresse_postale, presentation, date_recrutement) VALUES("SAID","Fatima", "sfatima@gmail.com", "0639678798", "Gérante", "4 Rue de la Mosquée 97600 Mamoudzou", "Passionnée de cuisine traditionnelle","2015-02-01" );

-- Inséerer pliuers lignes à la fois
INSERT INTO equipe (nom, prenom, mail, telephone, poste, adresse_postale, presentation, date_recrutement) VALUES("ALI","Said", "said@gmail.com", "0639678700", "Chef cuisine", "34 Rue Mhogoni 97600 Mamoudzou", "Passionnée de cuisine traditionnelle","2015-07-01" ),
 ("COMBO", "Nourdine", "combo@gmail.com", "0634212345", "serveur", "678 Rue Poujou Passam 97600 Mamoudzou", "Passionné des fruits de mer", "2024-09-15"),
 ("DJANFAR", "Amina", "amina@gmail.com", "0654678945", "Aprentis cuisine", "12 Rue Dziani 97615 Labatoire","Passinoonée de plats de gran-mère", "2025-04-03");

 -- Supprimer une ligne de la table 
 DELETE FROM equipe WHERE id = 1;
 
-- Modifier un champ pour une ligne spécifique
UPDATE equipe SET nom ="ALI BABA" WHERE id = 2;