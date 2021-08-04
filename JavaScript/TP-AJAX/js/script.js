$("#champtext").keyup(function () {
    if ($(this).val() == "") {
        $("#payscode").empty();
        $("#nomcode").empty();
        $("#postalcode").empty();
    }
    else {
        ajaxpays($(this).val())
    }
});
function ajaxpays(mot) {
    let fluxHTML = "";
    let fluxcode = "";
    let fluxpays = "";

    $.ajax({
        url: "pays.json",
        type: "GET",
        dataType: "JSON",

        success: function (data) {


            console.log(data);
            data.forEach(element => {
                var position = element.nom_fr_fr.toUpperCase().substr(0,
                    mot.length).search(mot.toUpperCase());

                var images = element.alpha2.toUpperCase().substr(0,
                    mot.length).search(mot.toUpperCase());

                if (position !== -1) {
                    console.log(element.nom_fr_fr);
                    fluxHTML += "<option>" + element.nom_fr_fr + "</option>";

                }
                if (images !== -1) {
                    console.log(element.alpha2);
                    $("#drapo").attr('src', 'flags/' + element.alpha2 + '.png');
                    fluxcode += "Code du pays " + element.code;
                    fluxpays += " Postal du pays " + element.nom_fr_fr;
                    fluxHTML += "Nom du pays " + element.alpha2;
                    //  <span id="payscode">code de pays: </span>
                    //  <span id="nomcode">nom de pays: </span>
                    //  <span id="postalcode">Postal code de pays: </span>
                }
            });
            //vider le grand ul
            $("#listedecommune").empty();
            $("#listedecommune").html(fluxHTML);


            //vider le span payscode
            $("#payscode").empty();
            $("#payscode").html(fluxcode);
            //vider le span nom de code
            $("#nomcode").empty();
            $("#nomcode").html(fluxHTML);
            //vider le span code postal 
            $("#postalcode").empty();
            $("#postalcode").html(fluxpays);
        },
        error: function (error) {
            error = alert("ce pays n'existe pas");
        }
    });
}

$("#listedecommune").on("click", "option", function (event) {
    var text = $("#listedecommune option:selected").text();
    $("#champtext").val(text);
    $.getJSON('https://restcountries.eu/rest/v2/alpha/' + $('#rechercher').attr("value"), function (d) {

    });
});
