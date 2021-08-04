<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    
<h1 class="text-center">ajouter un stagiaire</h1>
<form action="" method="POST">
<div class="col-2 m-auto   ">
<label class="text-center" for="">NOM</label><br>
<input  type="text" name="nom" value=""><br><br>
<label  for="">PRENOM</label><br>
<input  type="text"name="prenom"value="" ><br><br>
<button type="submit" name="submit"class="btn btn-primary mx-2">envoyer</button><button formaction="index.php"  class="btn btn-primary">retour</button>

</div>
</form>
</body>
</html>
<?php





if (isset($_POST['submit'])) {
    $dsn= "mysql:dbname=formation;host=localhost:3306";
    try{
        $option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND=>'set names utf8');
        $connexion= new PDO($dsn,"root","",$option);

    }catch(PDOException $e){
        printf('echec de connexion: %s\n', $e->getMessage());
    }


$sql ="insert into membres(nom_membre,login_membre) values (:nom,:login)";
    $reponse=$connexion->prepare($sql);
$nom =$_POST["nom"];
    $prenom=$_POST["prenom"];
    // $reponse->execute(array(":nom"=>$nom,":login"=>$prenom));

$reponse->bindValue()


    
    header("location:index.php");


}
?>

