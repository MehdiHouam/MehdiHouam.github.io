//Details de chaque input
var pseudo = document.getElementById("Pseudo");
var mdp = document.getElementById("Motdepasse");
var confirmations = document.getElementById("Confirmation");
var mail = document.getElementById("email");
//Verifications
var verificationpseudo = document.getElementById("verificationPseudo");
var verificationmdp = document.getElementById("verificationMDP");
var verificationconfirmation = document.getElementById("verificationconfirmation");
var verificationmail = document.getElementById("verificationMail");
//ALERTE
var alertbox = document.getElementById("alertebox");
var alertspan = document.getElementById("alertespan");
var alertform = document.getElementById("maforminfo");
//Function Input
var inputcheck = document.getElementsByClassName("checkinput");
var envoyerdocument = document.getElementById("envoyer");
var verificationdetout = document.getElementById("checkenvoyer");
var resetbutton = document.getElementById("reseted");
//RECEPTION
var receptionpseudo = document.getElementById("ReceivePseudo");
var receptionmdp = document.getElementById("ReceiveMDP");
var receptionconfirmation = document.getElementById("Receiveconfirmation");
var receptionmail = document.getElementById("ReceiveMail");

//Var
for (i = 0; i < inputcheck.length; i++) {
    inputcheck[i].addEventListener("keyup", function () {
        if (pseudo.value !== "") { //Pseudo
            pseudo.style.outline = "solid green";
            pseudo.style.outlineOffset = "-1px";
            verificationpseudo.innerText = "Pseudo: Ok";
        }

        else {
            pseudo.style.outline = "solid crimson";
            pseudo.style.outlineOffset = "-1px";
            verificationpseudo.innerText = "Pseudo: Non";
        }

        //

        if (mdp.value !== "") { //Mot de passe
            mdp.style.outline = "solid green";
            mdp.style.outlineOffset = "-1px";
            verificationmdp.innerText = "Mot de passe: Ok";
        }
        else {
            mdp.style.outline = "solid crimson";
            mdp.style.outlineOffset = "-1px";
            verificationmdp.innerText = "Mot de passe: Non";
        }

        //

        if (mdp.value !== confirmations.value) { //Confirmation
            confirmations.style.outline = "solid crimson";
            confirmations.style.outlineOffset = "-1px";
            verificationconfirmation.innerText = "Confirmation: Non";
        }
        else if (confirmations.value === "") {
            confirmations.style.outline = "solid crimson";
            confirmations.style.outlineOffset = "-1px";
            verificationconfirmation.innerText = "Confirmation: Non";
        }
        else {
            confirmations.style.outline = "solid green";
            confirmations.style.outlineOffset = "-1px";
            verificationconfirmation.innerText = "Confirmation: Ok";
        }
        //
        if (mail.value !== "") { //Mail
            mail.style.outline = "solid green";
            mail.style.outlineOffset = "-1px";
            verificationmail.innerText = "Mail: Ok";
        }
        else {
            mail.style.outline = "solid crimson";
            mail.style.outlineOffset = "-1px";
            verificationmail.innerText = "Mail: Non";
        }
        //
    });
};
inputcheck[i].addEventListener("focusin", function () {
    this.style.outline = "solid #23272a";
});

function alertebonjour() {
    alertbox.style.display = "none";
    alertform.style.display = "block";
    // alertform.style.visibility = "visible";
}
function alertefunction() {
    alertbox.style.display = "inline-block";
    alertform.style.display = "none";
    // alertform.style.visibility = "hidden";
}

var d = new Date();
verificationdetout.addEventListener("click", function () {
    if ((verificationpseudo.innerHTML == "Pseudo: Ok") && (verificationmdp.innerHTML == "Mot de passe: Ok") && (verificationconfirmation.innerHTML == "Confirmation: Ok") && (verificationmail.innerHTML === "Mail: Ok")) {
        alertefunction();
        alertspan.innerHTML = "Vos information sont correct vous pouvez envoyer maintenant <br><hr>Vos Information: <br>"
            + "Mail: " + mail.value
            + "<br> Mot de passe: " + mdp.value
            + "<br><hr>Date: "
            + d.getDate() + "/"
            + d.getMonth() + "/"
            + d.getFullYear() + "<br> Time: "
            + d.getHours() + ":"
            + d.getMinutes();
        this.style.display = "none";
        envoyerdocument.style.display = "block";
    }
    else {
        alertefunction();
        if (verificationpseudo.innerHTML != "Pseudo: Ok") {
            alertspan.innerHTML = "Votre case Pseudo est erroné";
        }
        else if (verificationmdp.innerHTML != "Mot de passe: Ok") {
            alertspan.innerHTML = "Votre case Mot de passe est erroné";
        }
        else if (verificationconfirmation.innerHTML != "Confirmation: Ok") {
            alertspan.innerHTML = "Votre Confirmation est erroné";
        }
        else if (verificationmail.innerHTML != "Mail: Ok") {
            alertspan.innerHTML = "Votre Mail est erroné";
        }
        else {
            alertefunction();
            alertspan.innerHTML = "Votre connexion internet est erroné";
        }
    }
});

resetbutton.addEventListener("click", function () {
    verificationpseudo.innerText = "Pseudo: Non";
    verificationmdp.innerText = "Mot de passe: Non";
    verificationconfirmation.innerText = "Confirmation: Non";
    verificationmail.innerText = "Mail: Non";
    alertefunction();
    alertspan.innerHTML = "Tout a ete reset";
    verificationdetout.style.display = "inline-block";
    envoyerdocument.style.display = "none";
});

envoyerdocument.addEventListener("click", function () {

});

function getUrlVars() {
    var vars = {};
    var url = decodeURIComponent(window.location.href.replace(/\+/g, '%20'));
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}
///
document.getElementById("datedemande").valueAsDate = d;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("max", today);