(function (Footer, $, undefined) {
    
    Footer.Resize = function () {
        var windowHeight = $(window).height();
        var socialHeight = $('.SocialIcons').height();
        var contentHeight = $('.Content').height();

        var footerMargin = $('footer').css('margin-top');
        footerMargin = footerMargin.substring(0, (footerMargin.length - 2));

        var footerHeight = windowHeight - socialHeight - contentHeight - footerMargin;
        $('.footerSize').html('calc: ' + windowHeight + ' - ' + socialHeight + ' - ' + contentHeight + ' - ' + footerMargin + ' = ' + footerHeight);

        $('footer').height(footerHeight);

        console.log('resizing');
    }

    //window.addEventListener('resize orientationchange', Footer.Resize, false);

}(window.Footer = window.Footer || {}, jQuery))