var lancement = document.getElementById("depart");
var lancementetgagants = document.getElementById("lancementetgagant");

class Voiture {
    constructor(x, y, imgvoiture) {
        this.x = x;
        this.y = y;
        this.dessiner(imgvoiture);

    }
}
class course {
    constructor(arrivage, contarebour, gagnant, verticol, hauteure, imgregles) {
        this.arrivage = arrivage;
        this.contarebour = contarebour;
        this.gagnant = gagnant;
        this.verticol = verticol;
        this.hauteure = hauteure;
        this.dessiner(imgregles);
    }
}

var prenom = prompt("Entrez votre Prénom voiture rouge:");
if (prenom == "") {
    prenom = "Vous"
}

var ordinateur = prompt("Entrez le Pseudo a votre ennemie voiture bleu:");
if (ordinateur == "") {
    ordinateur = "ordinateur"
}
course.prototype.dessiner = function (imgregles) {
    var imageregles = document.createElement("img");//marche
    this.courses = imageregles;//marche
    this.courses.src = imgregles;//marche
    this.courses.style.height = "300px";//marche
    this.courses.style.width = "350px";//marche
    this.courses.style.borderRadius = "50%";//marche
    this.courses.style.position = "absolute";//marche
    this.courses.style.right = this.verticol + "px";//marche
    this.courses.style.top = this.hauteure + "px";//marche
    document.body.appendChild(this.courses);//marche
}
Voiture.prototype.dessiner = function (imgvoiture) {
    var imagevoitures = document.createElement("img");
    this.voitures = imagevoitures;
    this.voitures.src = imgvoiture;
    this.voitures.style.width = "350px";
    this.voitures.style.position = "absolute";
    this.voitures.style.right = this.x + "px";
    this.voitures.style.top = this.y + "px";

    document.body.appendChild(this.voitures);
};
var car1 = new Voiture(0, 200, "img/car1.png", 1000);
var car2 = new Voiture(0, 410, "img/car2.png", 1000);
var courseregles = new course(1000, 3000, "winner is " + prenom, 600, -300, "img/winner.jpg");

Voiture.prototype.deplacementes = function (deplacer) {
    this.x += deplacer;
    this.voitures.style.right = this.x + "px";
}
course.prototype.deplacement = function (deplace) {
    this.hauteure += deplace;
    this.courses.style.top = this.hauteure + "px";
}
lancement.addEventListener("click", function () {
    var tempsdelai = 15;
    var gg = setInterval(function playgame() {
        if (car1.x < courseregles.arrivage || car2.x < courseregles.arrivage) {//tant que la distance de la voiture (0) est inferieur a 1000
            car1.deplacementes(Math.floor(Math.random() * 15));
            car2.deplacementes(Math.floor(Math.random() * 15));
        }
        else if (courseregles.hauteure < 150) { //si une voiture atteinds la ligne d'arrivé donc on afficher le winner image
            courseregles.deplacement(Math.floor(Math.random() * 5));
        }

        else if (car1.x > courseregles.arrivage) {//gagant 1 sil arrrive a la ligne
            lancementetgagants.innerHTML = courseregles.gagnant;
        }
        else if (car2.x < courseregles.arrivage) {//gagant 2 sil arrrive a la ligne
            lancementetgagants.innerHTML = " jouer " + ordinateur + " gagnant";
        }
        else {//stop linterval
            clearInterval(gg);
        }
    }, tempsdelai);
});


// autre facon de lancer un setinterval 
/*var idVar = setInterval(() => {
    functionvitesse()
  }, 15);

  function functionvitesse() {
    if (car1.x < courseregles.arrivage || car2.x < courseregles.arrivage) {//tant que la distance de la voiture (0) est inferieur a 1000
        car1.deplacementes(Math.random(Math.random() * 15));
        car2.deplacementes(Math.random(Math.random() * 15));
    }
    else if (car1.x > courseregles.arrivage) {
        lancementetgagants.innerHTML = courseregles.gagnant;
    }
    else if (car2.x < courseregles.arrivage) {
        lancementetgagants.innerHTML = " jouer " + ordinateur + " gagnant";
    }
    else if (courseregles.hauteure < 150) { //si une voiture atteinds la ligne d'arrivé donc on afficher le winner image
        courseregles.deplacement(Math.floor(Math.random() * 5));
        clearInterval(id);
    }
  }
  function myStopFunction() {
    clearInterval(idVar);
  }
  */