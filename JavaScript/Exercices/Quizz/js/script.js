$("#interfaceJeux").hide();//interface pour les information avant le jeux
$("#interfacecommencer").hide();// interface pour les question
$("#anecdot").hide();//Anecdot
var x = 0;
var score = 0;
$("#accueil").on("click", function () {

    score = 0;
    $("#scoregames").html("Score: " + score);
    $("#boxrep span").html("");
    $("#interfaceJeux").hide();
    $("#interfacecommencer").hide();
    $("#interfacemain").show();
})
$("#interfacemain input").on("click", function () {
    //votre nom
    var prenom = prompt("Ecrivez votre pseudo");
    if (prenom == "") {
        prenom = "Vous";
    }
    $("#Pseudo").html("Pseudo: " + prenom);
    //Interface work
    $("#interfacemain").hide();
    $("#interfaceJeux").show();
    var retour = $(this).parent().attr('id');
    var diff = $(this).attr('class');
    console.log("Difficulté : " + diff)
    var difficulter = $(this).attr("class");
    var imageaffiches = $(this).parent().children().children("img").attr("src");
    console.log("Chemain de l'image : " + imageaffiches);
    // alert(retour);
    $.ajax({
        url: "json/quizz" + retour + ".json",
        type: "GET",
        dataType: "json",

        success: function (data) {


            // var Questionnaires = data.quizz[diff][x].question;
            // var numquestion = data.quizz[diff][x].id;
            // var Reponses = data.quizz[diff][x].réponse;
            // var rep1 = data.quizz[diff][x].propositions[0];
            // var rep2 = data.quizz[diff][x].propositions[1];
            // var rep3 = data.quizz[diff][x].propositions[2];
            // var rep4 = data.quizz[diff][x].propositions[3];
            // var anecdot = data.quizz[diff][x].anecdote;
            // console.log(Reponses);
            // $("#rep1").html(data.quizz[diff][x].propositions[0]);
            // $("#rep2").html(data.quizz[diff][x].propositions[1]);
            // $("#rep3").html(data.quizz[diff][x].propositions[2]);
            // $("#rep4").html(data.quizz[diff][x].propositions[3]);
            // $("#anecdot").html("Anecdot: " + data.quizz[diff][x].anecdote);
            $("#titredejeux").html(data.thème);
            $("#difficulté").html("Niveau: " + difficulter);
            $("#imageaffiche").attr('src', imageaffiches);
            //Generateur de reponses
            var Reponses;
            var numquestion;
            function dwwm() {
                $(".dragclass").css("display", "initial");

                if (x <= 9) {
                    $("#anecdot").hide();//Anecdot

                    console.log("Question : " + data.quizz[diff][x].question)
                    Reponses = data.quizz[diff][x].réponse;
                    numquestion = data.quizz[diff][x].id;
                    $("#questionnaires").html("Questionnaire " + numquestion + ": " + data.quizz[diff][x].question);
                    $("#rep1").html(data.quizz[diff][x].propositions[0]);
                    $("#rep2").html(data.quizz[diff][x].propositions[1]);
                    $("#rep3").html(data.quizz[diff][x].propositions[2]);
                    $("#rep4").html(data.quizz[diff][x].propositions[3]);
                    $("#anecdot").html("Anecdot: " + data.quizz[diff][x].anecdote);


                    $("#rep1").css({ 'top': 0, 'left': -80 })
                    $("#rep2").css({ 'top': 0, 'left': -30 })
                    $("#rep3").css({ 'top': 0, 'left': 20 })
                    $("#rep4").css({ 'top': 0, 'left': 70 })

                    $("#boxrep span").html("Glissez la bonne reponse");
                    $("#boxrep").css('background', 'rgb(255,165,0)');
                    $("#boxrep span").css({ opacity: 1 });
                    console.log("Reponse : " + Reponses);
                    x = x + 1;
                }
                else {
                    if (score < 5) {
                        alert("vous ete nul votre score est de " + score + "/10")

                    }
                    else if (score == 5) {
                        alert("vous ete moyen votre score est de " + score + "/10")
                    }
                    else if (score == 10) {
                        alert(" 07 57 58 98 18 (no fake) ya moyen qu'on scapte ? LOL tes un geni ta fais " + score + "/10")
                    }
                    else if (score > 5) {
                        alert("vous ete bon votre score est de " + score + "/10")
                    }

                }


            }
            dwwm();
            $("#generer").on("click", function () {
                dwwm();
            });
            $("#btneffect").droppable({
                drop: function (event, ui) {

                }
            });
            //Box ou je drag
            $("#boxrep").droppable({
                drop: function (event, ui) {

                    console.log("Votre Reponse : " + ui.draggable.text());
                    var reponsedragged = ui.draggable.text();
                    if (Reponses == reponsedragged) {
                        score = score + 1;
                        alert("Bonne Reponses");
                        $(this).css('background', 'rgb(0,200,0)');
                        $("#anecdot").show();
                        $(".dragclass").css("display", "none");
                        $("#scoregames").html("Score: " + score);
                        $("#boxrep span").html("Bravo");
                        $("#boxrep span").css({ opacity: 1 });
                    }
                    else {
                        $(this).css('background', 'red');
                        score = score - 1;
                        $("#scoregames").html("Score: " + score);
                    }

                },
                over: function (event, ui) {
                    $(this).css('background', 'orange');
                    $("#boxrep span").css({ opacity: 0 });
                },
                out: function (event, ui) {
                    $(this).css('background', 'rgb(255,165,0)');
                    $("#boxrep span").css({ opacity: 1 });
                }
            });
            //Drag les 4 reponses
            $(".dragclass").draggable({
                classes: {
                    "ui-draggable": "move"
                },
                revert: "invalid",
                revertDuration: 300,
            });

        },
        error: function (data) {
            // error = alert("okok");
        }
    });//Fermeture du $.ajax
});//Fermeture du grand input
$("#valider").click(function () {
    $("#interfaceJeux").hide();
    $("#interfacecommencer").show();
});