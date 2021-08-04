<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Liste Articles</title>
</head>

<?php

// Ouverture d'une connexion sur la Base magasin du SGBD MySQL
$dsn = "mysql:dbname=membres;host=localhost:3306";
try {
    $option = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');                   
    $connexion = new PDO($dsn, "root", "", $option);
    
} catch (PDOException $e) {
    printf("Echec connexion : %s\n", $e->getMessage());
}

?>
<body>
    
    <h1>Liste des Articles</h1>

    <?php

    // Récupération des articles dans la Table article
    $reponse = $connexion->query("select * from article");
    $records=$reponse->fetchAll(PDO::FETCH_COLUMN,1);
    foreach($records as $ligne){
        echo $ligne."<br>";
    }

    echo("<hr>");

    // Récupération des articles dans la Table article

    $reponse = $connexion->query("select * from login_membre");

    foreach($reponse as $ligne){
        echo $ligne["membres"]."<br>";
    }

    echo"<hr>";
    $reponse = $connexion->query("select * from login_membre");
    // Affichage de la liste des articles
    while($donnees = $reponse->fetch()){

        echo $donnees["membres"]."<br>";
    }

    // Fermer le curseur d'analyse des résultats. A faire à chaque fois que vous avez
    // terminé de traiter le retour d'une requête.
    $reponse->closeCursor();
    ?>

</body>
</html>


