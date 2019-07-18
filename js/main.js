$(window).on('load', function() {

	// Cache selectors
	var lastId,
	banerAl = $('.banner-principal').height(),
	topMenu = $(".navbar-nav"),
	topMenuHeight = topMenu.outerHeight()+112,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	    	var item = $($(this).attr("href"));
	    	if (item.length) { return item; }
	    });
	    $('.img-pop').on('click',function(){
	    	$('.slider').slick('setPosition');
	    });
	    $('.slide').slick({
	    	fade: true,
	    });



	    if ($(window).scrollTop() > banerAl - 112){
	    	$('header').css('background','#003e52');
	    }else{
	    	$('header').css('background','#003e5200');
	    }


	    $(".nav-link").click(function() {
	    	let href = $(this).attr('href');
	    	$('html, body').animate({
	    		scrollTop: $(href).offset().top - 112
	    	}, 500);
	    });



	    $(function() {
	    	$(window).scroll(function() {
	    		if ($(window).scrollTop() > banerAl - 112) {
	    			$('header').css('background','#003e52');
	    		} else {
	    			$('header').css('background','#003e5200');
	    		}
	    	});
	    });

	    $(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
   	if ($(this).offset().top < fromTop)
   		return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
   	lastId = id;
       // Set/remove active class
       menuItems
       .parent().removeClass("active")
       .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


	});

function restartSlick() {
	setTimeout(function(){$('.slide').slick('setPosition'); }, 200);
}