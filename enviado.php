<?php

$dados['nome'] = $_POST['nome'];
$dados['email'] = $_POST['email'];
$dados['assunto'] = $_POST['assunto'];
$dados['mensagem'] = $_POST['mensagem'];

$destino = 'definir@email.com.br';

$headers = 'From:' .$dados['nome'] . ' <' . $dados['email'] . '> ' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

if(mail($destino,$dados['assunto'],$dados['mensagem'])){
    echo json_encode('true');
}else {
    echo json_encode('false');
}
