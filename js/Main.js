(function (Main, $, undefined) {
    
    $(window).load(function() {
        $('footer').removeAttr('style');
        Main.ResizeFooter();
    });

    Main.ResizeFooter = function () {
        var windowHeight = $(window).height();
        var socialHeight = $('.SocialIcons').height();
        var contentHeight = $('.Content').height();

        var footerMargin = $('footer').css('margin-top');
        footerMargin = footerMargin.substring(0, (footerMargin - 2));
        
        var footerHeight = windowHeight - (socialHeight + contentHeight) - footerMargin;
        $('.footerSize').html('wh: ' + windowHeight + ' ww: ' + $(window).width() + ' s: ' + socialHeight + ' c: ' + contentHeight + ' m: ' + footerMargin + ' f: ' + footerHeight);

        $('footer').height(footerHeight);
    }

    window.addEventListener('resize', Main.ResizeFooter, false);

} (window.Main = window.Main || {}, jQuery))