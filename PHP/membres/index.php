<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   
    <title>Liste Magasin</title>
</head>

<?php

require("connect_membres.php");

// Connexion à la BDD
function connect_db()
{
    $dsn = "mysql:dbname=" . BASE . ";host=" . SERVER;
    try {
        $option = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        $connexion = new PDO($dsn, USER, PASSWD, $option);
    } catch (PDOException $e) {
        printf("Echec connexion : %s\n", $e->getMessage());
        exit();
    }
    return $connexion;
}

function reqPrepare($requete, $tableau, $multiple)
{

    $connexion = connect_db();

    $statement = $connexion->prepare($requete);

    foreach ($tableau as $key => $value) {
        if (is_int($value))
            $dataType = PDO::PARAM_INT;
        else if (is_bool($value))
            $dataType = PDO::PARAM_BOOL;
        else if (is_null($value))
            $dataType = PDO::PARAM_NULL;
        else
            $dataType = PDO::PARAM_STR;

        $statement->bindValue(':' . $key, $value, $dataType);
    }

    $statement->execute();

    if ($multiple)
        $result = $statement->fetchAll(PDO::FETCH_OBJ);
    else
        $result = $statement->fetch(PDO::FETCH_OBJ);

    $statement->closeCursor();
    return $result;
    $result->closeCursor();
}

// Méthode qui permet d'exécuter une requête SQL de sélection sans paramètres
function reqSelection($requete)
{
    $connexion = connect_db();
    $result =  $connexion->query($requete);
    return $result;
    $result->closeCursor();
}


// Création de la liste des Stagiaires
function get_all_membres()
{

    $resultat = reqSelection("select * from membres");
    $membres = array();

    foreach ($resultat as $row) {
        $membres[] = $row;
    }
    return $membres;
}


?>

<body>
    <h1 class="w-100 text-center">Liste des Stagiaires</h1>

    <div>
    <table class="table table-bordered w-50 m-auto mt-4">
  <thead>
    <tr>
      <th class="text-center" scope="col">ID</th>
      <th class="text-center" scope="col">Nom</th>
      <th class="text-center" scope="col">Prenom</th>
      <th class="text-center" scope="col">Supression</th>
    </tr>
  </thead>

        <?php

        $membres = get_all_membres();

        foreach ($membres as $ligne) {
            $id = $ligne["id_membre"];
            $prenom = $ligne["login_membre"];
            $nom = $ligne["nom_membre"];
            echo
            "<tbody>
                    <tr>
                       <td class=text-center>" . $ligne["id_membre"] . "</td>
                       <td><a href='update.php?id_membre=$id&login_membre=$prenom&nom_membre=$nom'  title=Prenom> " . $ligne["login_membre"] . "</a></td>
                       <td>" .  $ligne["nom_membre"] . "</td>
                       <td class=text-center><a href='delete.php?id_membre=$id' title=Supprimez>Supprimez</a></td>
                    </tr>";
        }
        ?>
    </tr>
    <tr>
        <td class="text-center" colspan="12"><a href="ajouter.php" title="Stagiaires">Ajouter un Stagiaires</a></td>
    </tr>
  </tbody>
</table> 

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>