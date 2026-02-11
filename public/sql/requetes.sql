-- Créer la base de données
CREATE DATABASE maygourmet;
-- Afficher les bases de données
SHOW DATASES;


-- Créer la table equipe
CREATE TABLE equipe IF NOT EXISTS(
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

-- afficher les tables existantes 
SHOW TABLES;

-- Ajouter un membre dans l'équipe
INSET INTO equipe(nom, prenom, telephone, poste, dresse_postale, presentation, date_recrutement) VALUES("SAID","Fatima", "sfatima@gmail.com", "0639678798", "Gérante", "4 Rue de la Mosquée 97600 Mamoudzou", "Passionnée de cuisine traditionnelle","2015-02-01" );

-- Insérer plusieurs lignes à la fois
INSERT INTO equipe (nom, prenom, mail, telephone, poste, adresse_postale, presentation, date_recrutement) VALUES("ALI","Said", "said@gmail.com", "0639678700", "Chef cuisine", "34 Rue Mhogoni 97600 Mamoudzou", "Passionnée de cuisine traditionnelle","2015-07-01" ),
 ("COMBO", "Nourdine", "combo@gmail.com", "0634212345", "serveur", "678 Rue Poujou Passam 97600 Mamoudzou", "Passionné des fruits de mer", "2024-09-15"),
 ("DJANFAR", "Amina", "amina@gmail.com", "0654678945", "Aprentis cuisine", "12 Rue Dziani 97615 Labatoire","Passionnée de plats de grand-mère", "2025-04-03");

 -- Supprimer une ligne de la table 
 DELETE FROM equipe WHERE id = 1;
 
-- Modifier un champ pour une ligne spécifique
UPDATE equipe SET nom ="ALI BABA" WHERE id = 2;


-- Créer la table 'Fournisseur'
CREATE TABLE fournisseur IF NOT EXISTS(
    id_fournisseur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    responsable VARCHAR(155) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    telephone VARCHAR(100),
    adresse_postale VARCHAR(255),
    presentation_forunisseur VARCHAR(255)
);
-- Supprimer la colonne id_produit de la table fournisseur
alter table fournisseur drop id_produit;



-- Créer la table 'produit'
CREATE TABLE produit(
    id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    presentation VARCHAR(155),
    prix INT NOT NULL,
    origin VARCHAR(30) NOT NULL,
    disponibilite BOOLEAN DEFAULT False,
    type_culture VARCHAR(30),

    -- J'associe la table produit à la table fournisseur en utilisant les identifiants de chaque table
    id_fournisseur INT NOT NULL,
    FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur)
);

-- Ajouter une ligne dans la table founisseur
insert into fournisseur (nom, responsable, mail, telephone, adresse_postale, presentation_forunisseur ) 
values("Mayotte Exotique", "ALI Abou", "contact@exotique.yt", "0693010203", "123 Rue Bille Gates 97605 Passamainty","Exploitation agricole. Il propose des argumes, des orange."); 

-- Ajouter une ligne dans la table founisseur
insert into fournisseur (nom, responsable, mail, telephone, adresse_postale, presentation_forunisseur) 
values("Mayotte Exotique", "ALI Abou", "contact@exotique.yt", "0693010203", "123 Rue Bille Gates 97605 Passamainty","Exploitation agricole. Il propose des argumes, des orange."); 


select * from fournisseur ;

insert into produit(nom, presentation, prix, origin, categorie, type_culture, disponibilite, id_fournisseur)
VALUES("Thon pwere", "Bon pour la barbecue, grillade, sauces", 10, "Mayotte", "Poisson", "bio", 1, 3);


select *  from produit;

