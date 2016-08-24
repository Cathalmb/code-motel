var $ = jQuery.noConflict();
$(document).ready(function() {

	var project = {};

	project.init = function() {
		project.stickyNav();
	};

	project.stickyNav = function () {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 150) {
				$('.site-header').css({'position': 'fixed', 'box-shadow': '0px 0px 5px 0px #bcbcbc', 'height': 'auto'});
			} else {
				$('.site-header').css({'position': 'relative', 'box-shadow': '0px 0px 0px 0px rgba(0,0,0,0)'});
			}
		});
	}

	$(document).ready(project.init);

});