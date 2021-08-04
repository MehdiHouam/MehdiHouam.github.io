<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Mehdi Houam</title>
</head>
<body>
    <h1>Welcome to my space</h1>
<aside>this is a description of my cloud</aside>

<p>please dont try to hakc or you you will be hakced</p>

<button>DONT CLICK HERE</button>

<br><br><br>
<button>CLICK HERE</button>


<?php
echo "Hehe";
$path = ".";
$dh = opendir($path);
$i=1;
while (($file = readdir($dh)) !== false) {
    if($file != "." && $file != ".." && $file != "index.php" && $file != ".htaccess" && $file != "error_log" && $file != "cgi-bin") {
        echo "<a href='$path/$file'>$file</a><br /><br />";
        $i++;
    }
}
closedir($dh);
?> 
</body>
</html>