<!DOCTYPE html>
<html>

<head>
    <title>FORM</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <form method="post">
        <ul>
            <li>
                <label for="name">Titre</label>
                <input type="text" name="titre_annonce" autocomplete="off">
            </li>
            <li>
                <label for="imgs">Image</label>
                <input type="file" name="img_annonce">
            </li>
            <li>
                <label for="msg">Message:</label>
                <textarea name="message_annonce"></textarea>
            </li>

            <li><button type="submit" name="valider">Envoyer</button></li>
        </ul>
    </form>

</body>

</html>
<?php

if (isset($_POST['valider'])) { // formulaire securisé
    if (isset($_POST['titre_annonce']) and isset($_POST['img_annonce']) and isset($_POST['message_annonce'])) {
        if (!empty($_POST['titre_annonce']) and !empty($_POST['img_annonce']) and !empty($_POST['message_annonce'])) {
            $titres = htmlspecialchars($_POST['titre_annonce']);
            $imgs = $_POST['img_annonce'];
            $messages = htmlspecialchars($_POST['message_annonce']);


            echo "
             <form class='results'>
             <ul  >
             <li><h2> Titre:$titres</h2> </li>
             <br>
             <li><p> <img src='$imgs' width='100' height='100'> </p></li>
             <br>
             <li><p> $messages </p></li>
             </ul>
             </form>
             ";
        }
    }

    $dsn = "mysql:dbname=annonce;host=localhost:3306";
    try {
        $option = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        );

        $connexion = new PDO($dsn, "root", "", $option);
    } catch (PDOException $e) {
        printf("Echec connexion : %s\n", $e->getMessage());
    }
    $sql = 'insert into `article`  (titre_annonce, message_annonce, img_annonce) values (:titre_annonce, :message_annonce, :img_annonce)';

    $reponse = $connexion->prepare($sql);
    $reponse->execute(array(":titre_annonce" => $titres, ":message_annonce" => $messages, "img_annonce" => $imgs));
}
?>