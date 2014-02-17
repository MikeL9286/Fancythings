(function (Main, $, undefined) {

    Main.IsSafari = function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
            return true;
        return false;
    }

    Main.AttachEventListeners = function () {
        $(window).bind('resize orientationchange', function () {
            Footer.Resize();
        });

        $(window).bind('load', function () {
            Footer.Resize();
        });
    }

    Main.AttachEventListeners();

} (window.Main = window.Main || {}, jQuery))