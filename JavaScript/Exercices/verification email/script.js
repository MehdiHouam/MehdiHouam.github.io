var texte = document.getElementById("text");
var button = document.getElementById("button");
var arobas = 0;
var point = 0;
var regExp = /^[A-Za-z0-9]+$/;

button.addEventListener("click", function() {
    if (text.value.length < 2) {
        alert("La chaîne de caractère dois contenir au minimum 2 lettres")
    }
    for (let i = 0; i < text.value.length; i++) {
        if (text.value[i] != "." && text.value[i] != "@" && text.value[i] != "_" && text.value[i] != text.value[1].match(regExp)) {
            alert("Vous avez rentrer un caractère invalide !")
            break
        }
    }
    for (let i = 0; i < text.value.length; i++) {
        if (text.value[0] == "@" || text.value[text.value.length - 1] == "@") {
            alert("Pas d'arobas en debut ou fin")
            arobas += 1;
            break
        } else if (text.value[i] == "@") {
            arobas += 1
        }
    }
    if (arobas == 0) {
        alert("Il faut au minimum 1 arobas dans le texte.")
    }
    for (let i = 0; i < text.value.length; i++) {
        if (text.value[0] == "." || text.value[text.value.length - 1] == ".") {
            alert("Pas d'arobas en debut ou fin")
            point += 1;
            break
        } else if (text.value[i] == ".") {
            point += 1
        }
    }
    if (point == 0) {
        alert("Il faut au minimum 1 '.' dans le texte.")
    }
})