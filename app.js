$('#sidebar-button').click(function(){
	var $this= $(this);
	$this.toggleClass('show');
	if ($this.hasClass('show')) {
		$this.text('open');
		$(".sidebar").animate({"left" : "-=170px"},"slow");
		
	}
	else{
		$this.text('close');
		$(".sidebar").animate({"left" : "+=170px"},"slow");
	}
});
