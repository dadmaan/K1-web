document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('#count').animationCounter({
            start: 0,
            end: 100,
            step: 1,
            delay: 130,
            txt: ' %'
            });
        setTimeout(function () {
            $('#loading').css('height', '0');
            $('.animation-loading').css('display', 'none');
            $('#topNav').css('position', 'fixed');
        }, 15000);

    });
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