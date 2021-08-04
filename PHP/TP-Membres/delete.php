<?php

// Ouverture d'une connexion sur la Base magasin du SGBD MySQL
$dsn = "mysql:dbname=membres;host=localhost:3306;charset=utf8";
try {
    $option = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

    $connexion = new PDO($dsn, "root", "", $option);
} catch (PDOException $e) {
    printf("Echec connexion : %s\n", $e->getMessage());
}

    // Préparation de la requête de suppression avec le marqueurs nommé :code
    $sql = "delete from membres where id_membre=:code";
    $reponse = $connexion->prepare($sql);

    // Récupération du code passé en GET à partir du lien hypertexte
    $code= $_GET["id_membre"];

    // Exécution de la requête préparée de suppression
    $reponse->execute( array(":code"=>$code));

    // Retour à la liste des membres
    header("location:index.php");
?>

