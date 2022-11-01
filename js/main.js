
$(document).ready(function () {
    

    $('.audio-play').on('click', function () {
        $(this).parent().toggleClass('d-none');
        $(this).parent().siblings().toggleClass('d-none');
        $(this).parent().parent().find('audio')[0].play();
    })

    $('.audio').on('pause', function () {
        $(this).parent().toggleClass('d-none');
        $(this).parent().siblings().toggleClass('d-none');
    });

});