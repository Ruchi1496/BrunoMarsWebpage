$('#sidebar-button').click(function(){
	var $this= $(this);
	$this.toggleClass('show');
	if ($this.hasClass('show')) {
		$this.text('open');
		$(".sidebar").animate({"left" : "-=170px"},"slow");
		//$this.animate({"left" : "-=170px"},"slow");
	}
	else{
		$this.text('close');
		$(".sidebar").animate({"left" : "+=170px"},"slow");
	}
});
/*
(function(){
		var parallex=$('div.front--bg');
		$(document).on('scroll',function(){
			var currScrollPos = $(document).scrollTop();
			parallex.css('background-position','0' + -currScrollPos/64 + 'px');
		});
	})();
*/