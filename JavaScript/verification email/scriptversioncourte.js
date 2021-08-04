var texte = document.getElementById("text");
var btn_contrôler = document.getElementById("button");
var emailTest = /^[a-z0-9-.]+@[a-z0-9]+.[a-z]{2,5}$/;

btn_contrôler.addEventListener("click", function() {
    if (texte.value.length < 2) {
        alert("la chaine doit comporter au moins 2 caractères");
    }
    if (texte.value.match(emailTest)) {
        alert("ceci est un email");
    } else {
        alert("ceci n'est pas un email")
    }
});