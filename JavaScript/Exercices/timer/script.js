/*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
var sp = document.getElementsByTagName("span");
var btn_start = document.getElementById("start");
var btn_stop = document.getElementById("stop");
var t;
var ms = 0, s = 0, mn = 0, h = 0;

function start() {
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;

}
function update_chrono() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }
    /*afficher les nouvelle valeurs*/
    sp[0].innerHTML = h + " h";
    sp[1].innerHTML = mn + " min";
    sp[2].innerHTML = s + " s";
    sp[3].innerHTML = ms + " ms";

}

/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
function stop() {
    clearInterval(t);
    btn_start.disabled = false;

}
function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    /*on accède aux différents span par leurs indice*/
    sp[0].innerHTML = h + " h";
    sp[1].innerHTML = mn + " min";
    sp[2].innerHTML = s + " s";
    sp[3].innerHTML = ms + " ms";
}