var Circle = function(sel){
	var circles = document.querySelectorAll(sel);
	[].forEach.call(circles,function(el){
			var valEl = parseFloat(el.innerHTML);
			valEl = valEl*282/100;
			el.innerHTML = '<svg width="95" height="95"><circle transform="rotate(-90)" r="45" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 282px;" r="45" cx="-47.5" cy="47.5" /><text x="50%" y="50%">Text</text></svg>';
			
	});
};
Circle('.dial-percentages');