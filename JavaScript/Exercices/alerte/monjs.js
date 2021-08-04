//EXERCICE 1
window.addEventListener("load", function () {

    var MONTITREE = document.querySelector('h1');
    MONTITREE.innerHTML = "MON TITRE";

    var myButton = document.getElementById("ClickMoi");
    myButton.addEventListener("click", function () {
        alert('Hello');
    });
});
function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}