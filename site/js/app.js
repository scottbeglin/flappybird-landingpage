$(document).ready(function () {

    $(".title").velocity("fadeIn", 1000)

    $(".playButton").mouseenter(function () {
        $(this)
            .velocity({
                translateY: "-10px",
                backgroundColor: "#FFEB3B"
            }, 400);
    });

    $(".playButton").mouseleave(function () {
        $(this)
            .velocity({
                translateY: "0",
                backgroundColor: "#FFC107"
            }, 200);
    });

});
