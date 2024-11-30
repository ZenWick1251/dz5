$(document).ready(function() {
    $(".menu > li").hover(
        function() {
            $(this).children("ul").stop(true, true).fadeIn(300);
        },
        function() {
            $(this).children("ul").stop(true, true).fadeOut(300);
        }
    );
});