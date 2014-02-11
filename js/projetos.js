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