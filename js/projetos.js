$(window).ready(function() {
    $('.infos-projetos img').click(function(){
		if(! $('body').hasClass('escuro')) {

			var dom = $(this);

			$('body').append('<div class="escuro"></div>');
	

			$('.escuro').animate({
				left:'0',
				top:'0',
				width: '100%'
			}, 500, "linear", function() {
					$('body').append('<div id="visualizar" class="absolute">' +
					'<img class="imagem-visualizada" style="display:none;" src="images/' + dom.attr('id') + '_visualizar.png" /></div>');
					$('#visualizar').append('<div class="fechar" style="display:none;" onclick="javascript:fechar();">'+
					'<img src="images/fechar.png" /></div>');
					

					$( ".imagem-visualizada" ).load(function() {
			
						var tamanhoImagem = parseFloat($('.imagem-visualizada').css('height'));
						var tamanhoMargin = parseFloat($('#visualizar').css('top'));

						var tamanhoFinal = tamanhoImagem + tamanhoMargin + 3;

						if( tamanhoFinal < $('.container').css('height')) {

							$('.escuro').height($('.container').height());
						
						} else {
						
							$('.escuro').height(tamanhoFinal);
						}

						$('#visualizar img').css('display', 'block');
						$('.fechar').css('display', 'block');

					});
			});

		}
	});
});


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


function fechar() {
	$('#visualizar').remove();
	$('.escuro').remove();
}


// fix for projects pages
//this code close modal and remove blur/opacity + black from this page

$(document).ready(function(){
	
	$('.infos-projetos ul').children().on('click',function(){
				
		document.querySelector('.escuro').addEventListener('click' , function(){
		
			fechar();
		
		});
	});

})


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