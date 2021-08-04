
var easycompleted = {

  url: "js/pays.json",

  getValue: "nom_en_gb",

  list: {
    match: {
      enabled: true
    }
  },
  theme: "square"
};

$("#test").easyAutocomplete(easycompleted);

$("#test").on("keyup", function () {
  let toto = $("#test").val();
  $("#opt").css({
    visibility: "visible",
  });
  $.ajax({
    url: "js/pays.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      let html = "";
      //   console.log(data);
      data.forEach((element) => {
        var position = element.nom_en_gb
          .toUpperCase()
          .substr(0, toto.length)
          .search(toto.toUpperCase());
        if (position !== -1) {
          //   console.log(element.nom_fr_fr);
          html +=
            "<option id='" + element.id + "'>" + element.nom_en_gb + "<br></option>";

          document.getElementById("opt").innerHTML = html;
        }
      });
    },
  });
});
$("select").on("click", "option", function () {

  $("#test").val($(this).text());

  $("#opt").css({
    visibility: "hidden",
  })
  let toto = $(this).text();
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",
    success: function (data) {
      let html = "";
      data.forEach((element) => {
        // console.log(element);
        var position = element.name
          .toUpperCase()
          .substr(0, toto.length)
          .search(toto.toUpperCase());
        if (position !== -1) {
          // console.log(element.translations.fr);
          html += "<br> Code pays : " + element.alpha2Code;
          html += "<br> Nom: " + element.translations.fr;
          html += "<br> Capital: " + element.capital;
          html += "<br> Surface: " + element.area + " km²";
          html += "<br> Population: " + element.population + " habitants";
          html += "<br> Code: " + "+" + element.callingCodes;
          html += "<br> Region: " + element.region;
          html += "<br> Monnaie: " + element.currencies[0].name
          html += "<br> Symbole: " + element.currencies[0].symbol;
          html += "<br> <img src=" + element.flag + " />";
          document.getElementById("test1").innerHTML = html;
          //MAP
          let mymap = L.map("map").setView(element.latlng, 5);
          L.tileLayer(
            'https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=dqRbqHP4NWn3QbWsMVf2',
            {
              maxZoom: 18,
              attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/%22%3EMapbox</a>',
              id: "mapbox/streets-v11",
              tileSize: 512,
              zoomOffset: -1,
            }
          ).addTo(mymap);
          L.marker(element.latlng).addTo(mymap);
        }
      });
    },
  });
});
