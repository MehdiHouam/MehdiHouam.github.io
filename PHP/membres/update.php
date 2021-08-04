<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Liste Membres</title>
</head>


<body>
    <form method="POST">
        <h1 class="w-100 text-center p-2">UPDATE Stagiaires</h1>

        <div class="pdo w-50 text-center p-4">
            <h2>Modifier</h2>
            <label class="col-1" for="Prenom">Prenom</label>
            <input name="login_membre" type="text" id="Prenom" value="<?php echo  $_GET['login_membre'] ?>">
            <br>
            <label class="col-1" for="nom">Nom</label>
            <input name="nom_membre" type="text" id="nom" value="<?php echo $_GET['nom_membre'] ?>">

            <br>
            <div class="mt-4">
                <button name="submit" type="submit" class="btn btn-danger  ">Envoyer</button>
                <button type="reset" class="btn btn-danger ">Annuler</button>
            </div>
        </div>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
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
    $sql = 'update membres set login_membre=:login_membre, nom_membre=:nom_membre where id_membre=:code';
   
    $reponse = $connexion->prepare($sql);

    // Récupération du code passé en GET à partir du lien hypertexte
    $code = $_GET["id_membre"];
    $prenom = $_POST["login_membre"];
    $nom = $_POST["nom_membre"];

    $reponse->execute(array(":code" => $code,  ":login_membre" => $prenom, ":nom_membre" => $nom ));

    // Retour à la liste des membres
    header("location:index.php");
}
?>
</html>