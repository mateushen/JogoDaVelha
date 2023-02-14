<?php

$nome1 = $_POST['nome1'];
$nome2 = $_POST['nome2'];

if ($nome1 && $nome2) {

    //$jogadores = array($nome1, $nome2);

    //var_dump($jogadores);

    //$sorteado[1] = $participantes[rand(0,$numParticipantes - 1)];

    session_start();
    $_SESSION['nome1'] = $nome1;
    $_SESSION['nome2'] = $nome2;

    $retorno = [
        'status' => 'ok',
    ];
} else {
    $retorno = [
        'status' => 'error',
    ];
}

echo json_encode($retorno);