// var pokecard = document.getElementById("pokemoncard");
var img = document.getElementsByTagName("img");
var tab;
var tab1 = new Array();
var tab2 = new Array();
var tab3;
var clic = 0;
var clicMax = 2;
var erreur;

for (tab3 = [], i = 0; i < 200; i++) {
    tab3[i] = i + 1;
    console.log(tab3)
}
for (tab = [], i = 0; i < 8; i++) {
    tab[i] = tab3[Math.floor(Math.random() * 200)];
    tab3[Math.floor(Math.random() * 200)].splice;
    console.log(tab);
}
for (var i = 0; i < 8; i++) {
    tab.push(tab[i]);
}
console.log(tab);
function randoms(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}
tab = randoms(tab);
console.log(tab);
var test = "/img/dessis.png";
img[0].src = test;

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
      test = "img/Pokemon" + tab[i] + ".png";
      tab1.push(tab[i]);
      tab2.push([i]);
      console.log(tab2);
      img[i].src = test;
  
      clic = clic + 1;
  
      $("div" + [i]).transition({
        perspective: "150px",
        rotateY: "180deg",
      });
  
      if (erreur == 2) {
        img[tab2[0]].src = "/img/dessus.png";
        img[tab2[1]].src = "/img/dessus.png";
        tab2.splice(0, 2);
        erreur = 0;
      }
  
      if (clic >= clicMax) {
        console.log("test");
        if (tab1[0] == tab1[1]) {
          tab1.splice(0, 2);
          tab2.splice(0, 2);
          clic = 0;
        } else {
          tab1.splice(0, 2);
          clic = 0;
          erreur = 2;
        }
      }
    });
  }
  