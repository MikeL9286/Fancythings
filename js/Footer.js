(function (Footer, $, undefined) {
    
    Footer.Resize = function () {
        //var windowHeight = $(window).height();
        //var socialHeight = $('.SocialIcons').height();
        //var contentHeight = $('.Content').height();

        //var footerMargin = $('footer').css('margin-top');
        //footerMargin = footerMargin.substring(0, (footerMargin.length - 2));

        //var footerHeight = windowHeight - socialHeight - contentHeight - footerMargin;
        //$('.footerSize').html('calc: ' + windowHeight + ' - ' + socialHeight + ' - ' + contentHeight + ' - ' + footerMargin + ' = ' + footerHeight);

        //$('footer').height(footerHeight);
        $('footer').css('display', 'block');
        Footer.ChangePosition();
    }

    Footer.ChangePosition = function () {
        var content = $('.Content');
        var bottomOfContent = content.offset().top + content.height();
        var footer = $('footer');
        var topOfFooter = footer.offset().top;

        if (topOfFooter <= bottomOfContent && footer.attr('style') == 'position:absolute') {
            footer.attr('style', 'position:fixed');
        }
        else {
            footer.attr('style', 'position:absolute');
        }
    }

}(window.Footer = window.Footer || {}, jQuery))