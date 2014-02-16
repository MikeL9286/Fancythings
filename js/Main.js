(function (Main, $, undefined) {

    Main.IsSafari = function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
            return true;
        return false;
    }

    //window.addEventListener('load', function () {
    //    $('footer').removeAttr('style');
    //}, false);

} (window.Main = window.Main || {}, jQuery))