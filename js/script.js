function Init() {
	$("#header-container").slideDown(500);
	setTimeout(function(){
		$("#main").slideDown(500);
		setTimeout(function() {
			$("#footer-container").animate({height: 'toggle'}, 500);
			setTimeout(function() {
				$("aside").animate({width: 'toggle'}, 500);
			}, 500);
		}, 1000);
	}, 500);
}
$(function(){
	$("aside > ul > li a").tooltipsy({
	offset: [20,0],
	delay: 0,
	show: function(e, $el) {
		$el.fadeIn(400);
	},
	hide: function(e, $el) {
		$el.fadeOut(400);
	}
	});
	$("#twitholder").tweet({
		avatar_size: 32,
		count: 2,
		username: "nickcis",
		template: "<a href=\"{tweet_url}\">{tweet_raw_text}</a>{time}",
		loading_text: "Cargando"
	});
	//Init();
});
