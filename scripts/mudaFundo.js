window.addEventListener('load', () => {

    var num = 2;

    for (let i = 0; i < 9; i++) {
        let bt = document.getElementById('b' + i);
        var campo = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
        bt.addEventListener('click', (event) => {
            event.preventDefault(verificaX());

            if (num == 1) {
                bt.style.backgroundImage = 'url(img/xx.png)';
                bt.setAttribute('disabled', 'true');
                campo.splice(i, 1, 'x');

            } else if (num == 2) {
                bt.style.backgroundImage = 'url(img/oo.png)';
                bt.setAttribute('disabled', 'true');
                campo.splice(i, 1, 'o');
            }
            num = (num % 2) + 1;
            console.log(campo);

            function verificaX() {
                if ((campo.indexOf('x', 0) != -1) && (campo.indexOf('x', 1) != -1) && (campo.indexOf('x', 2) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 3) != -1) && (campo.indexOf('x', 4) != -1) && (campo.indexOf('x', 5) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 6) != -1) && (campo.indexOf('x', 7) != -1) && (campo.indexOf('x', 8) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 0) != -1) && (campo.indexOf('x', 4) != -1) && (campo.indexOf('x', 8) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 2) != -1) && (campo.indexOf('x', 4) != -1) && (campo.indexOf('x', 6) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 0) != -1) && (campo.indexOf('x', 3) != -1) && (campo.indexOf('x', 6) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 1) != -1) && (campo.indexOf('x', 4) != -1) && (campo.indexOf('x', 7) != -1)) {
                    alert('FIM');
                } else if ((campo.indexOf('x', 2) != -1) && (campo.indexOf('x', 5) != -1) && (campo.indexOf('x', 8) != -1)) {
                    alert('FIM');
                }

            }
        });

    }

});
