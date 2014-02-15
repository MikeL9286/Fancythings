(function (Main, $, undefined) {
    
    $(window).load(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $(".Portals").attr("style", "max-width:33.83%");
        }

        $('.Slideshow').imagesLoaded(function () {
            $('.ltkwidget-widget').removeAttr('style');
        });

        $('footer').removeAttr('style');
    });

    Main.ResizeFooter = function () {
        var socialHeight = $('.SocialIcons').height();
        var contentHeight = $('.Content').height();
        
        var footerHeight = $(window).height() - (socialHeight + contentHeight);
        $('footer').height(footerHeight);
    }

    window.addEventListener('resize', Main.ResizeFooter, false);

} (window.Main = window.Main || {}, jQuery))