<?php

$nome1 = $_POST['nome1'];
$nome2 = $_POST['nome2'];

if ($nome1 && $nome2) {
    session_start();
    $_SESSION['status'] = 'ativo';

    $jogadores = array($nome1, $nome2);
    $tam = sizeof($jogadores);

    $jogador1 = $jogadores[rand(0, $tam - 1)];

    if ($jogador1 == $nome1) {
        $_SESSION['jogador1'] = $nome1;
        $_SESSION['jogador2'] = $nome2;
    } else {
        $_SESSION['jogador1'] = $nome2;
        $_SESSION['jogador2'] = $nome1;
    }

    $retorno = [
        'status' => 'ok',
    ];
} else {
    $retorno = [
        'status' => 'error',
    ];
}

echo json_encode($retorno);
