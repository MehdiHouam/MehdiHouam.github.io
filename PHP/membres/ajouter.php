<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Liste Magasin</title>
</head>

<body>
    <h1 class="w-100 text-center p-2">Ajouter Stagiaires</h1>

    <div class="pdo w-50 text-center p-4">
        <h2>Ajouter</h2>

        <form method="POST">
        <label class="col-1" for="Prenom">Prenom</label>
        <input name="login_membre" value="" type="text" id="Prenom">
        <br>
        <label class="col-1" for="nom">Nom</label>
        <input name="nom_membre" value="" type="text" id="Nom">

        <br>
        <div class="mt-4">
        <button name="submit" type="submit" class="btn btn-danger  ">Envoyer</button>
        <button type="reset" class="btn btn-danger ">Annuler</button>
        </div>
        </form>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
<?php

if (isset($_POST["submit"])) {
// Ouverture d'une connexion sur la Base magasin du SGBD MySQL
$dsn = "mysql:dbname=membres;host=localhost:3306";
try {
    $option = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
    );

    $connexion = new PDO($dsn, "root", "", $option);
} catch (PDOException $e) {
    printf("Echec connexion : %s\n", $e->getMessage());
}

 // Préparation de la requête de suppression avec le marqueurs nommé :code
 $sql = 'insert into `membres`  (login_membre, nom_membre) values (:login_membre , :nom_membre)';
   
 $reponse = $connexion->prepare($sql);

 // Récupération du code passé en GET à partir du lien hypertexte

 $prenom = $_POST["login_membre"];
 $nom = $_POST["nom_membre"];

 $reponse->execute(array(":login_membre" => $prenom, ":nom_membre" => $nom ));

 // Retour à la liste des membres
 header("location:index.php");
}
?>


