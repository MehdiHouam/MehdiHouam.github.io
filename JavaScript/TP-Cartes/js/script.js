window.addEventListener("load", function () {

    var Cartes = [{
        "id": 1,
        "nom": "AsCoeur",
        "point": 11,
        "force": 8
    }, {
        "id": 2,
        "nom": "AsCarreau",
        "point": 11,
        "force": 8
    }, {
        "id": 3,
        "nom": "AsPique",
        "point": 11,
        "force": 8
    }, {
        "id": 4,
        "nom": "AsTrefle",
        "point": 11,
        "force": 8
    }, {
        "id": 5,
        "nom": "SeptCoeur",
        "point": 0,
        "force": 1
    }, {
        "id": 6,
        "nom": "SeptCarreau",
        "point": 0,
        "force": 1
    }, {
        "id": 7,
        "nom": "SeptPique",
        "point": 0,
        "force": 1
    }, {
        "id": 8,
        "nom": "SeptTrefle",
        "point": 0,
        "force": 1
    }, {
        "id": 9,
        "nom": "HuitCoeur",
        "point": 0,
        "force": 2
    }, {
        "id": 10,
        "nom": "HuitCarreau",
        "point": 0,
        "force": 2
    }, {
        "id": 11,
        "nom": "HuitPique",
        "point": 0,
        "force": 2
    }, {
        "id": 12,
        "nom": "HuitTrefle",
        "point": 0,
        "force": 2
    }, {
        "id": 13,
        "nom": "NeufCoeur",
        "point": 0,
        "force": 3
    }, {
        "id": 14,
        "nom": "NeufCarreau",
        "point": 0,
        "force": 3
    }, {
        "id": 15,
        "nom": "NeufPique",
        "point": 0,
        "force": 3
    }, {
        "id": 16,
        "nom": "NeufTrefle",
        "point": 0,
        "force": 3
    }, {
        "id": 17,
        "nom": "DixCoeur",
        "point": 10,
        "force": 4
    }, {
        "id": 18,
        "nom": "DixCarreau",
        "point": 10,
        "force": 4
    }, {
        "id": 19,
        "nom": "DixPique",
        "point": 10,
        "force": 4
    }, {
        "id": 20,
        "nom": "DixTrefle",
        "point": 10,
        "force": 4
    }, {
        "id": 21,
        "nom": "ValetCoeur",
        "point": 10,
        "force": 5
    }, {
        "id": 22,
        "nom": "ValetCarreau",
        "point": 10,
        "force": 5
    }, {
        "id": 23,
        "nom": "ValetPique",
        "point": 10,
        "force": 5
    }, {
        "id": 24,
        "nom": "ValetTrefle",
        "point": 10,
        "force": 5
    }, {
        "id": 25,
        "nom": "DameCoeur",
        "point": 10,
        "force": 6
    }, {
        "id": 26,
        "nom": "DameCarreau",
        "point": 10,
        "force": 6
    }, {
        "id": 27,
        "nom": "DamePique",
        "point": 10,
        "force": 6
    }, {
        "id": 28,
        "nom": "DameTrefle",
        "point": 10,
        "force": 6
    }, {
        "id": 29,
        "nom": "RoiCoeur",
        "point": 10,
        "force": 7
    }, {
        "id": 30,
        "nom": "RoiCarreau",
        "point": 10,
        "force": 7
    }, {
        "id": 31,
        "nom": "RoiPique",
        "point": 10,
        "force": 7
    }, {
        "id": 32,
        "nom": "RoiTrefle",
        "point": 10,
        "force": 7
    }];

    var TabOrdinateur = Cartes.slice(0);

    var TabJoueur = [];
    var TabTempBataille = [];
    var ScoreOrdi = 0;
    var ScoreJoueur = 0;

    // Fonction pour Rentrez le prenom en debut de page.
    var prenom = prompt("Entrez votre Prénom :");
    if (prenom != "") {
        document.getElementById("Monprenom").innerHTML = prenom;
    } else {
        document.getElementById("Monprenom").innerHTML = "Vous";
    }

    document.getElementById("ScoreJoueur").innerHTML = 0;
    document.getElementById("ScoreOrdi").innerHTML = 0;

    //On melange le jeu en deux aleatoirement et a la fin, il y a deux tableau de 16 cartes.
    while (TabJoueur.length < 16) TabJoueur.push(TabOrdinateur.splice(Math.floor(Math.random() * TabOrdinateur.length), 1)[0]);

    console.log(TabOrdinateur);
    console.log(TabJoueur);

    var imgCarte = document.getElementById("imgCarte");
    var macartejoueur = document.getElementById("imgMaCarte");


    imgCarte.addEventListener("click", function () {

        document.getElementById("CtBat1").style.display = "none";
        document.getElementById("CtBat2").style.display = "none";
        document.getElementById("CtBat3").style.display = "none";
        document.getElementById("CtBat4").style.display = "none";
        document.getElementById("CtBato1").style.display = "none";
        document.getElementById("CtBato2").style.display = "none";
        document.getElementById("CtBato3").style.display = "none";
        document.getElementById("CtBato4").style.display = "none";

        if ((TabJoueur.length !== 0) && (TabOrdinateur.length !== 0)) {

            console.log(TabOrdinateur);
            console.log(TabJoueur);

            document.getElementById("NombreCarteOrdi").innerHTML = TabOrdinateur.length;
            document.getElementById("NombreCarteJoueur").innerHTML = TabJoueur.length;

            document.getElementById("ScoreJoueur").innerHTML = ScoreJoueur;
            document.getElementById("ScoreOrdi").innerHTML = ScoreOrdi;

            var carteOrdinateur = TabOrdinateur[0];
            var carteJoueur = TabJoueur[0];

            console.log(carteOrdinateur);
            console.log(carteJoueur);

            var srcimgOrdinateur = TabOrdinateur[0].nom;
            console.log("Nom de la Carte de l'Ordinateur : " + srcimgOrdinateur);
            var srcimgJoueur = TabJoueur[0].nom;
            console.log("Nom de la Carte du Joueur : " + srcimgJoueur);


            var indexCarteOrdinateur = TabOrdinateur.indexOf(carteOrdinateur);
            console.log("Index de la Carte de l'Ordinateur :" + indexCarteOrdinateur);
            var indexCarteJoueur = TabJoueur.indexOf(carteJoueur);
            console.log("Index de la Carte Joueur :" + indexCarteJoueur);

            var indexfinOrdi = TabOrdinateur.length;
            console.log(indexfinOrdi);
            var indexfinJoueur = TabJoueur.length;
            console.log(indexfinJoueur);


            var recupsrc = document.getElementById("imgCarte").getAttribute("src");
            if ((recupsrc === "img/backcartegrandebatrect.png") || (recupsrc === "img/backcartegrande.png")) {
                document.getElementById("imgMaCarte").src = "img/" + srcimgJoueur + ".png";
                document.getElementById("imgMaCarteOrdinateur").src = "img/" + srcimgOrdinateur + ".png";
            }

            if (carteJoueur["force"] < carteOrdinateur["force"]) {
                document.getElementById("imgCarteOrdinateur").src = "img/backcartebleuegrande.png";
                document.getElementById("imgCarte").src = "img/backcartegrande.png";

                TabOrdinateur.push(carteJoueur);
                TabJoueur.splice(indexCarteJoueur, 1);
                TabOrdinateur.splice(indexCarteOrdinateur, 1);
                TabOrdinateur.push(carteOrdinateur);
                for (let i = 0; i < TabTempBataille.length; i++) {
                    TabOrdinateur.push(TabTempBataille[i]);
                    console.log(TabOrdinateur)
                }


                TabTempBataille = [];

                ScoreOrdi += carteOrdinateur["point"];
            }

            if (carteJoueur["force"] > carteOrdinateur["force"]) {
                document.getElementById("imgCarteOrdinateur").src = "img/backcartebleuegrande.png";
                document.getElementById("imgCarte").src = "img/backcartegrande.png";

                TabJoueur.push(carteOrdinateur);
                TabOrdinateur.splice(indexCarteOrdinateur, 1);
                TabJoueur.splice(indexCarteJoueur, 1);
                TabJoueur.push(carteJoueur);
                for (let i = 0; i < TabTempBataille.length; i++) {
                    TabJoueur.push(TabTempBataille[i]);
                    console.log(TabJoueur)
                }
                TabTempBataille = [];
                ScoreJoueur += carteJoueur["point"];
            }
            // Si les cartes ont la meme force alors on va afficher le dos de carte bataille et on va prendre les deux cartes en les mettant dans un tableau de tempo
            if (carteJoueur["force"] === carteOrdinateur["force"]) {
                document.getElementById("imgCarteOrdinateur").src = "img/backcartebleuegrandebatrect.png";
                document.getElementById("imgCarte").src = "img/backcartegrandebatrect.png";
                TabTempBataille = TabTempBataille.concat((TabJoueur.splice(0, 2).concat(TabOrdinateur.splice(0, 2))));
                console.log(TabTempBataille);
                if (TabJoueur[0].force > TabOrdinateur[0].force) {

                    document.getElementById("CtBat1").style.display = "inline-block";
                    document.getElementById("CtBat2").style.display = "inline-block";
                    document.getElementById("CtBat3").style.display = "inline-block";
                    document.getElementById("CtBat4").style.display = "inline-block";

                    document.getElementById("CtBat1").src = "img/" + TabTempBataille[0].nom + ".png";
                    document.getElementById("CtBat2").src = "img/" + TabTempBataille[1].nom + ".png";
                    document.getElementById("CtBat3").src = "img/" + TabTempBataille[2].nom + ".png";
                    document.getElementById("CtBat4").src = "img/" + TabTempBataille[3].nom + ".png";
                }
                if(TabJoueur[0].force < TabOrdinateur[0].force){
                    document.getElementById("CtBato1").style.display = "inline-block";
                    document.getElementById("CtBato2").style.display = "inline-block";
                    document.getElementById("CtBato3").style.display = "inline-block";
                    document.getElementById("CtBato4").style.display = "inline-block";
                    document.getElementById("CtBato1").src = "img/" + TabTempBataille[0].nom + ".png";
                    document.getElementById("CtBato2").src = "img/" + TabTempBataille[1].nom + ".png";
                    document.getElementById("CtBato3").src = "img/" + TabTempBataille[2].nom + ".png";
                    document.getElementById("CtBato4").src = "img/" + TabTempBataille[3].nom + ".png";
                }
            }

            if (TabJoueur.length == 0) {
                let OrdiGagnant = document.getElementById("OrdiGagnant");
                OrdiGagnant.src = "img/CoupeGagnant50-44.png";
            }

            if (TabOrdinateur.length == 0) {
                let JoueurGagnant = document.getElementById("JoueurGagnant");
                JoueurGagnant.src = "img/CoupeGagnant50-44.png";
            }
        }
    })
});

