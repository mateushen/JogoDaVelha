<?php
require_once 'dao/Conexao.php';
require_once 'modelo/Jogo.php';
require_once 'dao/DAOJogo.php';

$nomeganhador = $_POST['ganhador'];
$retorno = [];

if($nomeganhador){
    $dao = new DAOJogo();
    $obj = new Jogo();
    $obj->setNomeganhador($nomeganhador);

    if($dao->inclui($obj)){
        $retorno = [
            'status' => 'ok',
        ];
    }else {
        $retorno = [
            'status' => 'error',
        ];
    }
}

echo json_encode($retorno);