(function (Navbar, $, undefined) {

    new Headroom(document.querySelector('.navbar'),
        {
            tolerance: 5,
            offset: 5
        }).init();

    $('#contactLink a').leanModal({closeButton: "#lean-modal-close"});

}(window.Navbar = window.Navbar || {}, jQuery))