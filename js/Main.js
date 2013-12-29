(function (Main, $, undefined) {

    var SetSocialBarStyle = function () {
        if (window.pageYOffset == 0)
            $('section.SocialIcons').addClass('SocialIconsDark');
        else
            $('section.SocialIcons').removeClass('SocialIconsDark');

    };

    $(document).ready(SetSocialBarStyle);
    $(window).scroll(SetSocialBarStyle);
} (window.Main = window.Main || {}, jQuery))