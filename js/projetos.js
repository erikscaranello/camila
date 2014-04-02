$(document).ready(function(){
	//reponsavel pelos PROJETOS

	$('.box-projetos').find('ul').children().on('mouseover',function(e){

		var item = $(this).find('.view-intro').children('img');

		item.attr('src','images/'+ item.attr('alt')+ '_hover.png');

	}).on('mouseout',function(e){

		var item = $(this).find('.view-intro').children('img');

		item.attr('src','images/'+ item.attr('alt')+ '.png');

	});
});


$(document).ready(function(){
	$('#pesquisa').mouseover(function(){
		var nomeId = $(this).attr('id');
		$(this).attr('src', 'images/' + nomeId + "_hover.png");
	});

	$('#pesquisa').mouseout(function(){
		var nomeId = $(this).attr('id');
		$(this).attr('src', 'images/' + nomeId + ".png");
	});

	$('#pesquisa').click(function(){
	
		var hostName = window.location.hostname ;
		window.open("/images/Artigo_Camila_Pinotti.pdf", "_blank");
	});
});