
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
    
<h1 class="text-center">Modifier un stagiaire</h1>
<form action="" method="POST">
<div class="col-2 m-auto   ">
<label class="text-center" for="">NOM</label><br>
<input  type="text" name="nom" value="<?php echo $_GET['nom']?>"><br><br>
<label  for="">PRENOM</label><br>
<input  type="text"name="prenom"value="<?php echo $_GET['prenom']?>" ><br><br>
<button type="submit" name="submit" class="btn btn-primary mx-2">envoyer</button><button formaction="index.php" class="btn btn-primary">annuler</button>

</div>
</form>
</body>
</html>
<?php

if(isset($_POST["submit"])){

    $dsn= "mysql:dbname=formation;host=localhost:3306";
    try{
        $option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND=>'set names utf8');
        $connexion= new PDO($dsn,"root","",$option);

    }catch(PDOException $e){
        printf('echec de connexion: %s\n', $e->getMessage());
    }


    $sql ="update membres set nom_membre=:nom, login_membre=:prenom where id_membre=:id_membre";
    $reponse=$connexion->prepare($sql);

    $id_membre=$_GET['id_membre'];
    $nom=$_POST["nom"];
    $prenom=$_POST["prenom"];

   
    
    // $reponse->execute(array(":nom"=>$nom,":prenom"=>$prenom,":id_membre"=>$id_membre));
$reponse->bindValue(":nom",$nom,PDO::PARAM_STR);
$reponse->bindValue(":prenom",$prenom,PDO::PARAM_STR);
$reponse->execute(array(":nom"=>$nom,":prenom"=>$prenom,":id_membre"=>$id_membre));    





    
    header("location:index.php");

}

 
?>