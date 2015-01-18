(function (Main, $, undefined) {

    imagesLoaded($('body'), function() {
        $('.loading-overlay').addClass('loaded');
    });

    $('form[role=search]').submit(function() {
    	var searchKey = $('input[name=searchKey]').val();
    	window.location = window.location.origin + '/search/' + searchKey;
    	return false;
    });

}(window.Main = window.Main || {}, jQuery))