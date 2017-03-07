$(function() {

	$('.radio label').each(function() {
		var e = $(this);
		e.click(function() {
			e.closest('.radio').find("label").removeClass("active");
			e.addClass("active");
		});
	});
	$('.checkbox label').each(function() {
		var e = $(this);
		e.click(function() {
			if (e.find('input').is(':checked')) {
				e.addClass("active");
			} else {
				e.removeClass("active");
			};
		});
	});
	
	$('.icon-navicon').each(function() {
		var e = $(this);
		var target = e.attr("data-target");
		e.click(function() {
			$(target).slideToggle().toggleClass("nav-navicon");
		});
	});
	

})