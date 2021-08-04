var nombre =document.getElementById("nombre");
var texte =document.getElementById("texte");
var bouton =document.getElementById("bouton");


bouton.addEventListener("click",function(){
    location.href="../index2.html?texte="+texte.value+"&nombre="+nombre.value
    });