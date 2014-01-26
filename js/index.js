$(document).ready(function(){
	setInterval('mostarImagens()' ,5000);
});
// 



function mostarImagens() {
	
	if($('#icarousel').children('img').attr('id') == 'img_5') {
		$('#icarousel').children('img').fadeOut('slow', function(){
			$('#icarousel').html('<img src="images/imagem_1.png" id="img_1" />');
		});
		$('#icarousel').children('img').fadeIn('slow');	
	}
	else
	{
		var idString = $('#icarousel').children('img').attr('id');
		var id = idString.split('_');
		$('#icarousel').children('img').fadeOut('slow', function(){
			$('#icarousel').html('<img src="images/imagem_'+(parseInt(id[1]) + 1)+'.png" id="img_'+(parseInt(id[1]) + 1)+'" />');
		});
		$('#icarousel').children('img').fadeIn('slow');			
	}	
}