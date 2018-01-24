document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () { topnavShadow() };

    function topnavShadow() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topNav").style.backgroundColor = "white";
            document.getElementById("topNav").style.boxShadow = "0 1px 30px grey";
        }
        else {
            document.getElementById("topNav").style.backgroundColor = "transparent";
            document.getElementById("topNav").style.boxShadow = "none";
        }
    }
});
function menuToggler(x) {
    x.classList.toggle("change");
}
function openMenu() {
    document.getElementById("menu-overlay").classList.toggle("overlayVisible");
    document.getElementById("topNav").classList.toggle("topnavVisible");
}
function closeMenu() {
    document.getElementById("menu-overlay").classList.remove("overlayVisible");
    document.getElementById("topNav").classList.toggle("topnavVisible");
}