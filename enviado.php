<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Camila Pinotti Arquitetura</title>
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/estilo_navegador.css" />

<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
<!-- <script type="text/javascript" src"https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAIV-cLKfeH9VMVIjIqr2BWldamVCjGyQw&sensor=false"></script> -->

<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script> -->

<!-- <script type="text/javascript" src="js/contato.js"></script> -->

</head>

<body>
	<header>
    	<figure>
        	<a href="home.html">
        		<img src="images/logo.png" alt="Camila Pinotti" class="logo" />
        	</a>
        </figure>
        
        <figure>
        	<a href="projetos.html">
            	<img src="images/projetos.png" alt="projetos" class="projetos" />
            </a>
            <a href="contato.html">
          		<img src="images/contato.png" alt="contato" class="contato" />
          	</a>
        </figure>
    </header>
    
    <div class="clear">
    </div>
    
    <div class="tracos">
    </div>
    
    <section class="box-contato">
    	<div class="infos-contato">
        	<p>CONTATO</p>
            <div class="mapa">
            	<div id="maps-google">
                	<img src="images/mapa.png" />
                </div>
                <h1>Endereço</h1>
                <p>Rua dos Lírios, 93 - Vila Mariana - São Paulo/SP - CEP: 04047-040</p>
            </div>
            <div class="campos-envio">
                <form action="enviado.php" method="post">
            	   <p><input type="text" name="nome" placeholder="Nome:" class="inputs-contato" /></p>
                   <p><input type="email" name="email" placeholder="E-mail:" class="inputs-contato" /></p>
                   <p><input type="text" name="assunto" placeholder="Assunto:" class="inputs-contato" /></p>
                   <p><textarea name="mensagem" class="inputs-contato text-area"></textarea></p>
                   <p><input type="submit" name="enviar" value="" class="input-enviar" /></p>
                </form>
            </div>
        </div>
    	
        <div class="clear">
    	</div>
        
    </section>
    
    <div class="abaixo">	
   	</div>
    
    <footer>
    	<img src="images/email.png" alt="e-mail" />
        <img src="images/telefone.png" alt="telefone" />
    	<img src="images/endereco.png" alt="endereço" />
        <img src="images/parceiro.png" alt="parceiro" />
    </footer>
</body>
</html>
