window.addEventListener('load', () => {

    for (let i = 1; i <= 9; i++) {
        let bt = document.getElementById('b' + i);
        bt.addEventListener('click', (event) => {

            //alert('OK');
            console.log(bt);
            bt.style.backgroundImage = 'url(img/o.png)';

            // bt.setAttribute('background-image', 'url(img/x.png)');


        });
    }

});
