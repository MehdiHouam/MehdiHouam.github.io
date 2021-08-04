$("#recherche").on("click", function () {

    let fluxHTML = "";
    $.ajax({
        url: "https://api.zippopotam.us/fr/" + $("#champtext").val(),
        type: "GET",
        dataType: "Json",

        success: function (data) {
            console.log(data.nom);
            $("#listedecommune").html(fluxHTML);
        },
        error: function (error) {
            error = alert("ce code postal n'existe pas");
        }
    });
});