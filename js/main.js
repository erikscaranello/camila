$(document).ready(function(){
	var element = $('.carousel');
    var width = element.innerWidth();    

	$('.carousel').flexslider({
    	animation: "slide",
    	
    	itemWidth: width,
   		itemMargin: 0,
    	minItems: 1,
    	maxItems: 1
  	});
});



//function mostarImagens() {
	





	//$('.carousel').carousel();
	/*
	if($('#icarousel').children('img').attr('id') == 'img_6') {
		$('#icarousel').children('img').fadeOut('slow', function(){
			$('#icarousel').html('<img src="images/carousel/img_1.png" id="img_1" />');
		});
		$('#icarousel').children('img').fadeIn('slow');	
	}
	else
	{
		var idString = $('#icarousel').children('img').attr('id');
		var id = idString.split('_');
		$('#icarousel').children('img').fadeOut('slow', function(){
			$('#icarousel').html('<img src="images/carousel/img_'+(parseInt(id[1]) + 1)+'.png" id="img_'+(parseInt(id[1]) + 1)+'" />');
		});
		$('#icarousel').children('img').fadeIn('slow');			
	}
	*/	
//}

//reponsavel pelo TOPO

$('.topo-contato').on('mouseover',function(e){

	$('.topo-contato img').attr('src','images/contato_hover.png');

}).on('mouseout', function(e){

	$('.topo-contato img').attr('src','images/contato.png');

});

$('.topo-projetos').on('mouseover',function(e){

	$('.topo-projetos img').attr('src','images/projetos_hover.png');

}).on('mouseout', function(e){

	$('.topo-projetos img').attr('src','images/projetos.png');

});


$('#formularioContato').submit(function(){
	jQuery.ajax({
	  url: 'enviado.php',
	  type: 'POST',
	  dataType: 'json',
	  data: {
	  			nome: $('#formularioContato input[name="nome"]').val(), 
				email: $('#formularioContato input[name="email"').val(),
				assunto:$('#formularioContato input[name="assunto"]').val(),
				mensagem:$('#formularioContato textarea[name="mensagem"]').val()
			},
	  success: function(data, textStatus, xhr) {
	    alert('Email enviado com sucesso!')
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert('Ocorreu um erro! tente nos enviar um e-mail direto de seu cliente de e-mail ou por telefone para informar o erro')
	  }
	});
	
	return false;
});


