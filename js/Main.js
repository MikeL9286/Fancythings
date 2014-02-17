(function (Main, $, undefined) {

    Main.IsSafari = function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
            return true;
        return false;
    }

    Main.AttachEventListeners = function () {
        $('footer').css('display', 'none');

        $(window).resize(function () {
            Footer.Resize();
        });

        window.addEventListener('orientationchange', function () {
            Footer.Resize();
        }, false);

        window.addEventListener('load', function () {
            Footer.Resize();
        }, false);
    }

    Main.AttachEventListeners();

} (window.Main = window.Main || {}, jQuery))