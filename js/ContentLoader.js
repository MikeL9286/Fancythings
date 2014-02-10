(function (ContentLoader, $, undefined) {

    ContentLoader.Redirect = function(route) {
        // var baseUrl = "http://localhost:34503/Index.html/";
		var baseUrl = "http://mikel9286.github.io/Fancythings";
		// var baseUrl = "file:///C:/Users/Michael/Documents/Visual%20Studio%202012/Projects/FancyThings/Fancythings/";
        window.location.href = baseUrl + "?route=" + route;
    }

    ContentLoader.Load = function () {
        var currentUrl = window.location.href;
        var body = $("div#body");

        if (currentUrl.indexOf("Blog") != -1) {
            body.load("views/blog/Index.html");
        }
        else if (currentUrl.indexOf("Services") != -1) {
            body.load("views/services/index.html");
        }
        else if (currentUrl.indexOf("About") != -1) {
            body.load("views/about/index.html");
        }
        else {
            body.load("views/home/Index.html");
        }
    };

} (window.ContentLoader = window.ContentLoader || {}, jQuery))