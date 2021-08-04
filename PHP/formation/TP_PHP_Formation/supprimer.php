<?php
   
    $dsn = "mysql:dbname=formation;host=localhost:3306";
    try {
        $option = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
                        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
                                       
        $connexion = new PDO($dsn, "root", "", $option);   

    } catch (PDOException $e) {
        printf("Echec connexion : %s\n", $e->getMessage());
    }

   
    $sql = "delete from membres where id_membre=:code";
    $reponse = $connexion->prepare($sql);

   
    $code= $_GET["id_membre"];

   
    $reponse->execute( array(":code"=>$code));


    header("location:index.php");
?>