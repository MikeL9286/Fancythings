(function (Footer, $, undefined) {
    
    Footer.Resize = function () {
        $('footer').css('display', 'absolute');
        Footer.ChangePosition();
    }

    Footer.ChangePosition = function () {
        var content = $('.Content');
        var bottomOfContent = content.offset().top + content.height();
        var footer = $('footer');
        var topMarginOfFooter = parseInt($('.footerContainer').css('margin-top').substring(0, $('.footerContainer').css('margin-top').length - 2));
        var topOfFooter = footer.offset().top - topMarginOfFooter;
        var bottomOfFooter = footer.offset().top + footer.height();

        if (topOfFooter <= bottomOfContent && footer.attr('style') == 'position:fixed') {
            footer.attr('style', 'position:absolute');
        }
        else if (bottomOfFooter < window.innerHeight) {
            footer.attr('style', 'position:fixed');
        }
    }

}(window.Footer = window.Footer || {}, jQuery))