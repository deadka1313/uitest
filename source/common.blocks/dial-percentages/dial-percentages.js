$(function(){
	// Ищем все элементы с class="dial"
	var dials = $(".dial");
	// Перебираем все .dial и пихуем туда canvas с графиком.
	for (i=0; i < dials.length; i++){
		var width = 85;
		var procent = (Number($(dials[i]).html()) > 0 && Number($(dials[i]).html()) < 100) ? Math.round(Number($(dials[i]).html()) * 10)/10 : 0;
		var lineWidth = 5;
		var size = width+(lineWidth*2);
		var lineRound = (typeof $(dials[i]).attr("data-lineRound") != 'undefined') ? true : false;
		var borderColor = $(dials[i]).css("border-color");
		var color = $(dials[i]).css("color");
		$(dials[i]).css({"width": size + 'px', "height": size + 'px'});
		// Вставляем canvas такого же размера что и родитель.
		$(dials[i]).html('<canvas id="dial' + i + '" width="' + size + '" height="' + size + '"></canvas><p>' + procent + '</p>');
		// Выравниваем текст по вертикали
		$("p", dials[i]).css({"line-height": size + 'px'});
		var canvas = document.getElementById("dial" + i);
    var context = canvas.getContext("2d");
		// считаем по формуле радианы
		var radian = 2*Math.PI*procent/100;
		// рисуем круг для фона
		context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 0, 2*Math.PI, false);
		context.lineWidth = lineWidth;
		context.strokeStyle = borderColor;
		context.stroke();
		context.beginPath();
		// рисуем круг с процентами
		context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 1.5 * Math.PI, radian+1.5 * Math.PI, false);
		context.strokeStyle = color;
    context.stroke();
	}
});