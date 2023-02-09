window.addEventListener('load', () => {

    for (let i = 1; i <= 9; i++) {
        let bt = document.getElementById('b' + i);
        bt.addEventListener('click', (event) => {

            // alert('OK');

            bt.setAttribute('sr', 'img/x.png');
        });
    }

});
