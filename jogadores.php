<?php

$nome1 = filter_input(INPUT_POST, 'nome1');
$nome2 = filter_input(INPUT_POST, 'nome2');

if ($nome1 && $nome2) {

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
