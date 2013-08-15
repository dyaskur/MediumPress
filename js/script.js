$(document).ready(function(){
	var pagebody = $("#wrapper");
	var pagecontent = $("#page-wrap");
	var button = $("a#nav-toggle");
	var nav = $("#nav");
	var comment = $("#comment-sidebar");
	var bubble = $(".icon-comment-fill");
	var search_icon = $(".search-icon");
	var search_form = $("#nav-list-search");
	
	function open_nav() { 
		nav.show(100,function(){
			pagebody.delay(200).animate({
				left: "280px"
			}, 300, function(){
				nav.css('z-index', 1)
			});
			button.animate({
			    top: "-30px"
			}, { duration: 300, queue: false });
			button.fadeOut('fast');
		});
	};
	
	function close_nav() {
		nav.css('z-index', -1);
		pagebody.animate({
	        left: "0px"
	    }, 180, function(){
			nav.hide();
			button.animate({
		        top: "10px"
		    }, { duration: 180, queue: false });
			button.fadeIn('slow');
	    });
		search_form.slideUp('fast');
	};

	function open_comment(top) {
		pagecontent.animate({
			'left': "-50%",
			'margin-right': 0
		}, 300, function(){
			comment.css({
				'z-index': 1,
				'margin-top': top
			});
			bubble.fadeOut('slow');
		});
	}

	function close_comment() {
		comment.css('z-index', -1);
		pagecontent.css('margin', '0 auto').animate({
	        'left': "0px"
	    }, 180);
	    bubble.fadeIn('slow');
	}

	button.live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			open_nav();
		}
	});

	bubble.live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		var position = $(this).offset();

		if(leftval == "0px"){
			open_comment(position.top);
		}
	});

	pagebody.live("click", function(){
		var leftval = pagebody.css('left');
		var leftval2 = pagecontent.css('left');

		if(leftval == "280px") {
			close_nav();
		}
		if(leftval2 == "-50%") {
			close_comment();
		}
	});

	search_icon.live("click", function(){
		if(search_form.css('display') == "none"){
			search_form.slideDown('slow');
		} else {
			$("form[id=searchform]").submit();
		}
	});
});