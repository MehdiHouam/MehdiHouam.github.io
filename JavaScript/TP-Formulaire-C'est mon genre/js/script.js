
$("#nom").on("keyup", function () {
    //Mettre en maj le tout
    $(this).val($(this).val().toUpperCase());
    //Condition si inferieur a 3 impossible
    if ($(this).val().length < 3) {
        $(this).css({
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("<p>Veuillez rentrer au minimum 3 caractères.</p>");
        $("#confirmation").prop('disabled', true);
    }
    else {
        $(this).css({
            outline: "solid lime",
            outlineOffset: "-1px",
            color: "green"
        });
        $("#texterror").html("");
        mehdihouam(); //Va verifier si tout les input sont en vert pour activer le boutton envoyer
    }
});

$("#prenom").on("keyup", function () {

    //Mettre en maj la premiere lettre en JS
    // this.value = this.value[0].toUpperCase() + this.value.substring(1);

    //Mettre en maj la premiere lettre en jquery
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function ($1) {
        return $1.toUpperCase();
    }));

    //condition si inferieur a 3
    if ($(this).val().length < 3) {
        $(this).css({
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("<p>Veuillez rentrer au minimum 3 caractères.</p>");
        $("#confirmation").prop('disabled', true);
    }
    else {
        $(this).css({
            outline: "solid lime",
            outlineOffset: "-1px",
            color: "green"
        });
        $("#texterror").html("");
        mehdihouam(); //Va verifier si tout les input sont en vert pour activer le boutton envoyer
    }
});
$("#codesecret").on("keyup", function () {

    //condition si inferieur a 3
    if ($(this).val().length < 3) {
        $(this).css({
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("<p>Veuillez rentrer au minimum 3 caractères.</p>");
        $("#confirmation").prop('disabled', true);
    }
    else {
        $(this).css({
            outline: "solid lime",
            outlineOffset: "-1px",
            color: "green"
        });
        $("#texterror").html("");
        mehdihouam(); //Va verifier si tout les input sont en vert pour activer le boutton envoyer
    }
});

$("#email").on("keyup click", function () {

    //Mettre en maj la premiere lettre en jquery
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); }));

    //condition
    if ($("#email").val() == "") { //Si la textbox vide
        $("#email").css({
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("");
        $("#confirmation").prop('disabled', true);
    }

    //Autre Facon de faire le match email
    // emailcheck = $(this);
    // mailformat = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // if (mailformat.test(emailcheck.val())) { ton code quand ca marche } else {ton code quand ca marche pas}

    else if ($(this).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) { //Si la textbox (mail) est conforme a l'expression reguliere
        $("#email").css({
            outline: "solid lime",
            outlineOffset: "-1px",
            color: "green"
        });
        $("#texterror").html("");
        mehdihouam(); //Va verifier si tout les input sont en vert pour activer le boutton envoyer
    }

    else {
        $("#email").css({ //Quand il commence a ecrire n'importe quoi
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("<p>Veuillez rentrer un mail valide.</p>");
        $("#confirmation").prop('disabled', true);
    }
});
$("#alertebox").hide();

$("#alertebox").css({
    textAlign: "center",
    width: "300px",
    backgroundColor: "black",
    marginLeft: "30%"
});

function alertclose() {
    $("#alertebox").hide();
}
//Boutton pour envoyer avec question oui ou non
$("#confirmation").on("click", function () {
    if (confirm('Confirmez-vous l’envoi des informations ?')) {
        console.log('ok');
        $("#alertespan").html("Formulaire Bancaire");
        $("#prenomalert").html("Votre prenom: OK ");
        $("#nomalert").html("Votre Nom: OK");
        $("#emailalert").html("Votre mail: OK");
        $("#alertebox").show();

    } else {
        console.log('cancel');
    }
});

//Mettre le boutton disable au demarrage
$("#confirmation").prop('disabled', true);

//Le boutton pour reset et remettre en couleur par default les input..etc
$("#annuler").on("click", function () {
    $("#confirmation").prop('disabled', true);

    //Autre facon de changer le background
    // $("#nom").css("background-color", "yellow");

    $("#nom").css({
        outline: "solid black",
        outlineOffset: "-1px",
        color: "white"
    });

    $("#prenom").css({
        outline: "solid black",
        outlineOffset: "-1px",
        color: "white"
    });

    $("#email").css({
        outline: "solid black",
        outlineOffset: "-1px",
        color: "white"
    });

    $("#datedenaissance").css({
        outline: "solid black",
        outlineOffset: "-1px",
        color: "white"
    });
    $("#codesecret").css({
        outline: "solid black",
        outlineOffset: "-1px",
        color: "white"
    });

    $("#texterror").html("");
});

//Date avec condition si la date est valide ou pas
$("#datedenaissance").on("change", function () {

    if ($(this).val()) {

        $(this).css({
            outline: "solid lime",
            outlineOffset: "-1px",
            color: "green"
        });
        $("#texterror").html("");
        mehdihouam();
    }
    else {
        $("#datedenaissance").css({
            outline: "solid crimson",
            outlineOffset: "-1px",
            color: "crimson"
        });
        $("#texterror").html("<p>Veuillez entrer une date.</p>");
        $("#confirmation").prop('disabled', true);
    }
});


// $('input[name=customRadio]').is(checked) condition si le radio est checked ou non


//Une function pour verifier si tout mes condition sont valide ou pas pour activer ou pas le boutton
//le mehdihouam(); est mit en haut dans nom prenom mail date quand ca marche, si tout est ok la condition va activer le boutton
function mehdihouam() {
    if ((!$("#nom").val() == "") && (!$("#prenom").val() == "")&& (!$("#codesecret").val() == "") && (!$("#email").val() == "") && ($("#datedenaissance").val())) {
        $("#confirmation").prop('disabled', false);
    }
    else {
        $("#confirmation").prop('disabled', true);
    }

}

