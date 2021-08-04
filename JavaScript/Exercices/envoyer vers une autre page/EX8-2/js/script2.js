var decoupage = "=";

var lien = location.href.split("?");
var partienombre = lien[1].split("&")[1].split(decoupage)[1];
var partietext = lien[1].split("&")[0].split(decoupage)[1];
var nombre = document.getElementById("nombrereponse");
var texte = document.getElementById("textereponse");
texte.innerHTML = "Votre Text est: " + partietext + " <br> <hr>";
nombre.innerHTML = "Votre Nombre est: " + partienombre;





