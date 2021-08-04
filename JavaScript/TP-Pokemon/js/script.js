var pokemoncadre = document.getElementById("cadre");
var pokemonimage = document.getElementsByClassName("derouler");
var titretest = document.getElementById("titretestes");
var photos = document.getElementById("photo");
var splited;


for (i = 0; i < pokemonimage.length; i++) {
    pokemonimage[i].addEventListener("click", function () {
        console.log(this.src);
        splited = this.src.split("Pokemon/")[1];
        pokemoncadre.src = splited;
        titretest.innerHTML = this.alt;
       
    });
}
var feuxelement = document.querySelector(".elementfeuxss");
var eauxelement = document.querySelector(".elemtneauxs");
var terreelement = document.querySelector(".elementterres");
var ventelement = document.querySelector(".elementvents");
var evolutionelement = document.querySelector(".elementevolutions");


// var ljd = document.querySelector
// var mehdihouam = ["elementfeuxss", "elemtneauxs", "elementterres", "elementvents", "elementevolutions"];


var feux = document.getElementById("ElementFeux");
var eau = document.getElementById("ElementEau");
var terre = document.getElementById("ElementTerre");
var vent = document.getElementById("ElementVent");
var evolution = document.getElementById("ElementEvolution");

var afficher = document.getElementById("ElementAfficher");


feux.addEventListener("click", function () {

    // feuxelement.style.visibility = "hidden";
    // mehdihouam[0].style.display = "none";
    // document.getElementsByClassName('ElementFeux')[0].style.display = 'none';

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');

    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
    photos.className += " photoeditedfeux";

    eauxelement.className += " mehdihouam";
    terreelement.className += " mehdihouam";
    ventelement.className += " mehdihouam";
    evolutionelement.className += " mehdihouam";

});

eau.addEventListener("click", function () {
    // eauxelement.style.visibility = "hidden";
    // mehdihouam[1].style.display = "none";

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');


    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
    photos.className += " photoeditedeau";

    feuxelement.className += " mehdihouam";
    terreelement.className += " mehdihouam";
    ventelement.className += " mehdihouam";
    evolutionelement.className += " mehdihouam";
});

terre.addEventListener("click", function () {
    // terreelement.style.visibility = "hidden";
    // mehdihouam[2].style.display = "none";

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');

    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
    photos.className += " photoeditedterre";

    feuxelement.className += " mehdihouam";
    eauxelement.className += " mehdihouam";
    ventelement.className += " mehdihouam";
    evolutionelement.className += " mehdihouam";
});

vent.addEventListener("click", function () {
    // ventelement.style.visibility = "hidden";
    // mehdihouam[3].style.display = "none";

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');

    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
    photos.className += " photoeditedvent";

    feuxelement.className += " mehdihouam";
    eauxelement.className += " mehdihouam";
    terreelement.className += " mehdihouam";
    evolutionelement.className += " mehdihouam";
});

evolution.addEventListener("click", function () {
    // evolutionelement.style.visibility = "hidden";
    // mehdihouam[4].style.display = "none";

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');

    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
    photos.className += " photoeditedevolution";

    feuxelement.className += " mehdihouam";
    eauxelement.className += " mehdihouam";
    terreelement.className += " mehdihouam";
    ventelement.className += " mehdihouam";
});




afficher.addEventListener("click", function () {

    feuxelement.classList.remove('mehdihouam');
    eauxelement.classList.remove('mehdihouam');
    terreelement.classList.remove('mehdihouam');
    ventelement.classList.remove('mehdihouam');
    evolutionelement.classList.remove('mehdihouam');

    photos.classList.remove('photoeditedfeux');
    photos.classList.remove('photoeditedeau');
    photos.classList.remove('photoeditedterre');
    photos.classList.remove('photoeditedvent');
    photos.classList.remove('photoeditedevolution');
});
//
var nomplaypause = document.getElementById("PlayPause");
var myAudio = document.getElementById("AttrapezLesTous");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  nomplaypause.innerHTML = "Pause";
  
};
myAudio.onpause = function() {
  isPlaying = false;
  nomplaypause.innerHTML = "Play";
};
//
  function PikaCHUU() {
    var audio = new Audio("RessourcesTP7/pikapikaaa.mp3");
    audio.play();
  };

  function bluepokeboobs(){
      var audio = new Audio("RessourcesTP7/yellowpokemon.mp3")
      audio.play();
  }
  function ethoplvlup(){
    var audio = new Audio("RessourcesTP7/lvlup.mp3");
    audio.play();
}

function weezinng(){
    var audio = new Audio("RessourcesTP7/weezing.mp3");
    audio.play();
}
function jiglyy(){
    var audio = new Audio("RessourcesTP7/jigglyy.mp3");
    audio.play();
}