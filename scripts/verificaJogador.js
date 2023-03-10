window.addEventListener('load', () => {

    document.forms[0].addEventListener('submit', (event) => {
        event.preventDefault(verifica());

        function verifica() {
            ok = verificaJogador();
            if (ok) {
                const dados = new FormData(document.forms[0]);

                const config = {
                    method: 'POST',
                    body: dados
                };
                fetch('jogadores.php', config)
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        console.log(json);
                        if (json.status == 'ok') {
                            window.open('jogo.php', '_self');
                        } else {
                            alert('Erro: ' + json.status)
                        }
                    })
            } else return false;
        }
    });

    function verificaJogador() {
        if ((document.forms[0].nome1.value.length < 2) && (document.forms[0].nome2.value.length < 2)) {
            alert('Informe os nomes.');
            return false;
        } else {
            return true;
        }
    }

});
