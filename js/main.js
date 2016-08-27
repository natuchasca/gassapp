;(function( $ ) {
	"use strict";

		/* =======================================
		 * WOW JS
		 * =======================================
		 */
		var wow = new WOW({
			mobile : false,
			offset : 60,
		});
		wow.init();

		$( '#contact' ).on( 'shown.bs.collapse', function() {
			wow.scrollHandler();
		});
	});

})( jQuery );