<?php include 'voiture.class.php'; ?>
<?php include 'personne.php'; ?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <h1>Voiture</h1>
        <?php
        $Vehicule = new Voiture("CT-197-BF", "Noir", 1205, 570, 100, 50, 5); //poid, puissance, capacité, niv essence, nb place
       
        $Vehicule->repeindre('black'); //mise a jour couleur
        $Vehicule->distance(100, 250);
        $Vehicule->mettreessence(38); //Remplire le reservoir
        echo '<br><strong>tostring() immat: </strong>'.$Vehicule->__toString().'<br>' ;
        echo $Vehicule->toHTML(); //afficher les html ecrie en php
        $Vehicule->setAssure(true); //Activer la mise a jour ou non
        $Vehicule->getAssure(); //Obtenir le resultat de la mise a jour
        ?>
    </div>
    <div class="container">
        <h1>Fourgon</h1>
        <?php         
        $fusée = new fourgon("CT-197-BF", "Noir", 1205, 570, 100, 50, 5, 500, 5400); //poid, puissance, capacité, niv essence, nb place
        echo $fusée->toHTML(); //afficher les html ecrie en php
        ?>
    </div>
    <div class="container">
        <h1>personne</h1>
        <?php         
        $personne = new personne("Julie", "Midon", 100); //poid, puissance, capacité, niv essence, nb place
        echo $personne->toHTML(); //afficher les html ecrie en php
        ?>
    </div>
</body>

</html>