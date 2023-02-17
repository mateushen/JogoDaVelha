<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <link rel="stylesheet" href="css/button.css">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="scripts/verificaCampo.js"></script>
    <?php
    session_start();
    $j1 = $_SESSION['jogador1'];
    $j2 = $_SESSION['jogador2'];
    if ($_SESSION['status'] != 'ativo') {
        header('Location: index.php');
    }
    ?>
</head>

<body>
    <header>
        <div>
            <br>
            <p>Jogador 1: <?= $j1 ?></p>
            <p>Jogador 2: <?= $j2 ?></p>
            <br>
            <div>
    </header>


    <main>
        <form>
            <input type="hidden" name="j1" id="j1" value="<?= $j1 ?>" />
            <input type="hidden" name="j2" id="j2" value="<?= $j2 ?>" />
        </form>
        <div>
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
        </div>

        <br>
        <div>
            <p id="msg"></p>
        </div>
    </main>

</body>

</html>