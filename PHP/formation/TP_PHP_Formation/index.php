<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <?php   
    $dsn= "mysql:dbname=formation;host=localhost:3306";
    try{
        $option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND=>'set names utf8');
        $connexion= new PDO($dsn,"root","",$option);

    }catch(PDOException $e){
        printf('echec de connexion: %s\n', $e->getMessage());
    }



    $sql='delete from membres where id_membre=:supp';
    $reponse=$connexion->query('select * from membres');
   
   
   

    
?>
<h1 class="text-center">Liste des Stagiaires</h1>
<table class="table table-dark table-striped">
<thead>
<tr>
<th>id</th>
<th>nom</th>
<th>prenom</th>
<th>supprimer</th>
</tr>
</thead>
<tbody>
    
<?php
    foreach($reponse as $ligne){
       $nom=$ligne['nom_membre'];
       $prenom=$ligne['login_membre'];
       $id=$ligne['id_membre'];
       
        echo
        
         "<tr><th>".$ligne["id_membre"]."</th>
         <td><a href='modifier.php?nom=$nom&prenom=$prenom&id_membre=$id'>".$ligne["nom_membre"]."</a></td>
         <td>".$ligne["login_membre"]."</td>
         <td><a name='supp' href='supprimer.php?id_membre=$id'>supprimer</a><tr>";
         }

?>
<?php
 

?>

</tbody>
</table>
<table class="table table-dark table-striped">
<tr><td class="text-center"><a href="ajouter.php ">ajouter un stagiaire</a></td></tr>
</table>
</body>
</html>