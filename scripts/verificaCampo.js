window.addEventListener('load', () => {

    var num = 2;

    for (let i = 0; i < 9; i++) {
        let bt = document.getElementById('b' + i);
        var campo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var okX = false;
        var okO = false;

        bt.addEventListener('click', () => {
            if (num == 1) {
                bt.style.backgroundImage = 'url(img/xx.png)';
                bt.setAttribute('disabled', 'true');
                campo.splice(i, 1, 1);

            } else if (num == 2) {
                bt.style.backgroundImage = 'url(img/oo.png)';
                bt.setAttribute('disabled', 'true');
                campo.splice(i, 1, 2);
            }
            num = (num % 2) + 1;

            let p = document.getElementById('msg');
            p.innerText = '';

            if ((campo[0] == 1) && (campo[1] == 1) && (campo[2] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[3] == 1) && (campo[4] == 1) && (campo[5] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[6] == 1) && (campo[7] == 1) && (campo[8] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[0] == 1) && (campo[4] == 1) && (campo[8] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[2] == 1) && (campo[4] == 1) && (campo[6] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[0] == 1) && (campo[3] == 1) && (campo[6] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[1] == 1) && (campo[4] == 1) && (campo[7] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else if ((campo[2] == 1) && (campo[5] == 1) && (campo[8] == 1)) {
                p.innerText = 'Jogador 2 venceu!';
                okX = true;
            } else {
                p.innerText = 'Ainda não tem vencedor';
            }

            if ((campo[0] == 2) && (campo[1] == 2) && (campo[2] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[3] == 2) && (campo[4] == 2) && (campo[5] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[6] == 2) && (campo[7] == 2) && (campo[8] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[0] == 2) && (campo[4] == 2) && (campo[8] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[2] == 2) && (campo[4] == 2) && (campo[6] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[0] == 2) && (campo[3] == 2) && (campo[6] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[1] == 2) && (campo[4] == 2) && (campo[7] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else if ((campo[2] == 2) && (campo[5] == 2) && (campo[8] == 2)) {
                p.innerText = 'Jogador 1 venceu!';
                okO = true;
            } else {
                p.innerText = 'Ainda não tem vencedor';
            }


            if (okX) {
                for (let i = 0; i < 9; i++) {
                    let bt = document.getElementById('b' + i);
                    bt.setAttribute('disabled', 'true');
                }

                const dados = new FormData();
                var input = document.querySelector("#j2");
                dados.append('ganhador', input.value);

                const config = {
                    method: 'POST',
                    body: dados
                };
                fetch('cadastraGanhador.php', config)
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json);
                        let p = document.getElementById('msg');
                        if (json.status == 'ok') {
                            var text = 'Deseja jogar novamente?';
                            if (confirm(text) == true) {
                                window.open('jogo.php', '_self');
                            }
                        } else {
                            window.open('index.php', '_self')
                        }
                    })
            } else if (okO) {
                for (let i = 0; i < 9; i++) {
                    let bt = document.getElementById('b' + i);
                    bt.setAttribute('disabled', 'true');
                }

                const dados = new FormData();
                var input = document.querySelector("#j1");
                dados.append('ganhador', input.value);

                const config = {
                    method: 'POST',
                    body: dados
                };
                fetch('cadastraGanhador.php', config)
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json);
                        let p = document.getElementById('msg');
                        if (json.status == 'ok') {
                            var text = 'Deseja jogar novamente?';
                            if (confirm(text) == true) {
                                window.open('jogo.php', '_self');
                            }
                        } else {
                            window.open('index.php', '_self')
                        }
                    })

            }

        });


    }

});
