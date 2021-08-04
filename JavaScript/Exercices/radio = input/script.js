var choix = document.getElementsByName("choix");
var choixTest = document.getElementById("choixTexte");
var bouton = document.getElementById("btn");


bouton.addEventListener("click", function() {
    for (let i = 0; i < choix.length; i++) {
        if (choix[i].checked == true) {
            choixTest.value = choix[i].value;

        }
    }

})