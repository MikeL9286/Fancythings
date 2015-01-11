(function (Navbar, $, undefined) {

    new Headroom(document.querySelector('.navbar'),
        {
            tolerance: 5,
            offset: 5
        }).init();

    $('#contactLink a').leanModal({closeButton: "#contactModal #lean-modal-close"});

    var closeModal = function() {
    	$('#contactModal form')[0].reset();
    	$('#contactModal, #lean_overlay').fadeOut(200)
    };

   	$('form[action="contact"]').submit(function() {  
      	MailerService.SendEmail($(this), closeModal);
       	return false; // prevents normal behaviour
   	});

}(window.Navbar = window.Navbar || {}, jQuery))