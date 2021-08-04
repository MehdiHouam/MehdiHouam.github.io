var postit = document.getElementById("postit");
var cache = document.getElementById("cache");
var visible = document.getElementById("visible");
var survol = document.getElementById("survol");
postit.style.visibility = "hidden";



visible.addEventListener("click", function() {
    postit.style.visibility = "initial";
    postit.innerHTML = "Merci de m'avoir cliquer dessus !"
});
cache.addEventListener("click", function() {
    postit.style.visibility = "hidden";
});

survol.addEventListener("mouseover", function() {
    postit.style.visibility = "initial";
    postit.innerHTML = "Merci de me survoler."
});

survol.addEventListener("mouseout", function() {
    postit.style.visibility = "hidden";
});
