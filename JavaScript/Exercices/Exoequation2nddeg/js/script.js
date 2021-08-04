var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var equation = document.getElementById("equation");
var deltaRes = document.getElementById("delta");
var resx1 = document.getElementById("resx1");
var resx2 = document.getElementById("resx2");
var pokemonrare = document.getElementById("thomaslepokemon");
var letsgooreset = document.getElementById("pokemonreset");
var message = document.getElementById("message");
var bouton = document.getElementById("bouttonmagique");
var reset = document.getElementById("reset");
var descriptionjeux = document.getElementById("description");
var x1;
var x2;

// function myFunction() {
//     var mehdi = finality;
//     mehdi.remove();
// }


letsgooreset.addEventListener("click", function () {
    descriptionjeux.style.display = "initial";
    titretest.innerHTML = "Bienvenue";
    bouton.disabled = false;
    bouton.style.visibility = "visible";
    letsgooreset.style.visibility = "hidden";
    a.disabled = false;
    b.disabled = false;
    c.disabled = false;
    a.value = "";
    b.value = "";
    c.value = "";
    deltaRes.style.display = "none";
    equation.style.display = "none";
    resx1.style.display = "none";
    resx2.style.display = "none";
    pokemonrare.style.display = "none";
    message.style.display = "none";
});


var titretest = document.getElementById("MehdiHouam");
bouton.addEventListener("click", function () {
    if (b.value.length === 0 && a.value.length === 0 && c.value.length === 0) {
        a.value = "";
        b.value = "";
        c.value = "";
        // deltaRes.style.display = "none";
        // equation.style.display = "none";
        // resx1.style.display = "none";
        // resx2.style.display = "none";
        // pokemonrare.style.display = "none";
        // message.style.display = "none";
        titretest.innerHTML = "Ecrie idiot";
        return false;
    }
    else {
        var delta = Math.pow(b.value, 2) - (4 * a.value * c.value);
        // deltaRes.style.display = "inherit";
        // equation.style.display = "inherit";
        // resx1.style.display = "inherit";
        // resx2.style.display = "inherit";
        // finality.style.display = "inherit";
        // message.style.display = "inherit";
        try {
            if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
                throw "Chaque entrée doit avoir une valeur";
            }

            if (a.value == 0) {
                throw "La valeur de a ne peut être nulle ";
            }

            if (isNaN(a.value) || isNaN(b.value) || isNaN(c.value)) {
                throw "Seule les valeurs numeriques sont acceptées";
            }
            if (delta == 0) {
                x1 = (-b.value) / (2 * a.value);
                x2 = x1;
                deltaRes.innerHTML = "La valeur de Delta est :" + delta;
                equation.innerHTML = "Les racines de l'équation " + a.value + "x²+" + b.value + "x+" + c.value + "= 0 sont :"
                resx1.innerHTML = "X1 = X2 =" + x1;
                deltaRes.style.display = "inherit";
                equation.style.display = "inherit";
                resx1.style.display = "inherit";
            }
            if (delta > 0) {
                x1 = (-b.value - Math.sqrt(delta)) / (2 * a.value);
                x2 = (-b.value + Math.sqrt(delta)) / (2 * a.value);
                deltaRes.innerHTML = "La valeur de Delta est :" + delta;
                equation.innerHTML = "Les racines de l'équation " + a.value + "x²+" + b.value + "x+" + c.value + "= 0 sont :"
                resx1.innerHTML = "X1 =" + x1;
                resx2.innerHTML = "X2 =" + x2;
                deltaRes.style.display = "inherit";
                equation.style.display = "inherit";
                resx1.style.display = "inherit";
                resx2.style.display = "inherit";
            }
            if (delta < 0) {
                pokemonrare.innerHTML = "Pas de racines réelles";
                pokemonrare.style.display = "inherit";
            }
        } catch (err) {
            message.innerHTML = err;
            message.style.display = "inherit";
        }

        bouton.disabled = true
        a.disabled = true;
        b.disabled = true;
        c.disabled = true;
        // a.value = "";
        // b.value = "";
        // c.value = "";
        descriptionjeux.style.display = "none";
        titretest.innerHTML = "Bah Bravo :D";
        bouton.style.visibility = "hidden";
        letsgooreset.style.visibility = "visible";
        return true;
    }

});
