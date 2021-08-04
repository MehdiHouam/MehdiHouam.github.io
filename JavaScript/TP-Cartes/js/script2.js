

    var imgCarte = document.getElementById("imgCarte");



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