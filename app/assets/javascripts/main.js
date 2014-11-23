(function (Main, $, undefined) {

    imagesLoaded($('body'), function() {
        $('.loading-overlay').addClass('loaded');
    });

}(window.Main = window.Main || {}, jQuery))