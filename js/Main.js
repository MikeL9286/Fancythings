(function (Main, $, undefined) {
    
    $(window).load(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $(".Portals").attr("style", "max-width:33.83%");
        }

        $('footer').removeAttr('style');
        Main.ResizeFooter();
    });

    Main.ResizeFooter = function () {
        var socialHeight = $('.SocialIcons').height();
        var contentHeight = $('.Content').height();

        var footerMargin = $('footer').css('margin-top');
        footerMargin = footerMargin.substring(0, (footerMargin - 2));
        
        var footerHeight = $(window).height() - (socialHeight + contentHeight) - footerMargin;
        $('footer').height(footerHeight);
        $('.footerSize').html('ws: ' + $(window).height() + ' ss: ' + socialHeight + ' cs: ' + contentHeight + ' fs: ' + footerHeight);
        alert('resized footer');
    }

    window.addEventListener('resize', Main.ResizeFooter, false);

} (window.Main = window.Main || {}, jQuery))