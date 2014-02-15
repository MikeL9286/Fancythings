(function (Main, $, undefined) {
    
    $(window).load(function() {
        $('footer').removeAttr('style');
        Main.ResizeFooter();
    });

    Main.IsSafari = function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
            return true;
        return false;
    }

    Main.ResizeFooter = function () {
        var windowHeight = $(window).height();
        var socialHeight = $('.SocialIcons').height();
        var contentHeight = $('.Content').height();

        var footerMargin = $('footer').css('margin-top');
        footerMargin = footerMargin.substring(0, (footerMargin.length - 2));
        
        var footerHeight = windowHeight - (socialHeight + contentHeight) - footerMargin;
        $('.footerSize').html('wh: ' + windowHeight + ' ww: ' + $(window).width() + ' s: ' + socialHeight + ' c: ' + contentHeight + ' m: ' + footerMargin + ' f: ' + footerHeight);

        $('footer').height(footerHeight);
    }

    $(window).on("orientationchange", function (event) {
        if (Main.IsSafari())
            resizePortalsForSafari
    });

    $(window).bind('resize, orientationchange', Main.ResizeFooter);

} (window.Main = window.Main || {}, jQuery))