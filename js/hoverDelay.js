;(function($){
	$.fn.hoverDelay = function(options){
		var defaults = {
			hoverDuring:200,
			outDuring:200,
			hoverEvent:function(){
				$.noop();
			},
			outEvent:function(){
				$.noop();
			}
		};
		var sets = $.entend(defaults,options || {});
		var hoverTimer,outTimer;
		return $(this).each(function(){
			$(this).hover(function(){
				clearTimeout(outTimer);
				hoverTimer = setTimeout(sets.hoverEvent,sets.hoverDuring);
			},function(){
				clearTimeout(hoverTimer);
				outTimer = setTimeout(sets.outEvent,sets.outDuring);
			});
		});
	}
})(jQuery);