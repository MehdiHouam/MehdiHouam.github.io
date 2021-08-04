//Variable
var codebutton = document.getElementById("codeButton");
var codename = document.getElementById("codeName");

var namebutton = document.getElementById("nameButton");
var namename = document.getElementById("nameName")

var versionbutton = document.getElementById("versionButton");
var versionname = document.getElementById("versionName");

var agentbutton = document.getElementById("agentButton");
var agentname = document.getElementById("agentName");

//Function
codebutton.addEventListener("click", function() {
    codename.value = navigator.appCodeName;
});

namebutton.addEventListener("click", function() {
    namename.value = navigator.appName;
});

versionButton.addEventListener("click", function() {
    versionname.value = navigator.appVersion;
});

agentButton.addEventListener("click", function() {
    agentname.value = navigator.userAgent;
});