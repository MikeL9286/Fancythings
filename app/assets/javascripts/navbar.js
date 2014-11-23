(function (Navbar, $, undefined) {

    new Headroom(document.querySelector('.navbar'),
        {
            tolerance: 5,
            offset: 5
        }).init();

}(window.Navbar = window.Navbar || {}, jQuery))