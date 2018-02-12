//Изменение диаграмм с одним значением
var CircleDiagrammOne = function(sel){
	var circles = document.querySelectorAll(sel);
	[].forEach.call(circles,function(el){
			var valEl = parseFloat(el.innerHTML);
			dashvalEl = valEl*282/100;
			el.innerHTML = '<svg width="95" height="95"><circle transform="rotate(-90)" r="45" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+dashvalEl+'px 282px;" r="45" cx="-47.5" cy="47.5" /></svg>';
			
	});
};
CircleDiagrammOne('.dial-percentages');

//Изменение диаграмм с многими значениями
var CircleDiagrammAll = function(sel){
	var circles = document.querySelectorAll(sel);
	[].forEach.call(circles,function(el){
			var result = el.innerHTML.split( /(?=(?:\d{3})+(?!\d))/ );
			var valEl1 = parseFloat(result[0]);
			var valEl2 = parseFloat(result[1]);
			var valEl3 = parseFloat(result[2]);
			var valEl4 = 100 - valEl1 - valEl2 - valEl3;
			dashvalEl1 = valEl1*245/100;
			dashvalEl2 = valEl2*245/100+dashvalEl1;
			dashvalEl3 = valEl3*245/100+dashvalEl2;
			dashvalEl4 = valEl4*245/100+dashvalEl3;
			el.innerHTML = '<svg width="95" height="95"><circle transform="rotate(-90)" r="39" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+dashvalEl4+'px 245px;" r="39" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+dashvalEl3+'px 245px;" r="39" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+dashvalEl2+'px 245px;" r="39" cx="-47.5" cy="47.5" /><circle transform="rotate(-90)" style="stroke-dasharray:'+dashvalEl1+'px 245px;" r="39" cx="-47.5" cy="47.5" /></svg>';
			
	});
};
CircleDiagrammAll('.dial-percentages-all');