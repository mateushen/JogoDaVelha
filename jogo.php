<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <link rel="stylesheet" href="css/button.css">
    <script type="text/javascript" src="scripts/mudaFundo.js"></script>
    <?php
    session_start();
    $j1 = $_SESSION['jogador1'];
    $j2 = $_SESSION['jogador2'];
    if($_SESSION['status'] != 'ativo'){
        header('Location: index.php');
    }
    ?>
</head>

<body>
    <br>
    <p>Primeiro a jogar: <?= $j1 ?></p>
    <p>Segundo a jogar: <?= $j2 ?></p>
    <br><br>

    <button id="b0"></button>
    <button id="b1"></button>
    <button id="b2"></button>
    <br>
    <button id="b3"></button>
    <button id="b4"></button>
    <button id="b5"></button>
    <br>
    <button id="b6"></button>
    <button id="b7"></button>
    <button id="b8"></button>

</body>

</html>