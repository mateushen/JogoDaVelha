window.addEventListener('load', () => {

    var num = 2;

    for (let i = 1; i <= 9; i++) {
        let bt = document.getElementById('b' + i);
        var x = [];
        var o = [];
        bt.addEventListener('click', (event) => {

            if (num == 1) {
                bt.style.backgroundImage = 'url(img/xx.png)';
                bt.setAttribute('disabled', 'true');
                x.push(i);
                console.log(x);

            } else if (num == 2) {
                bt.style.backgroundImage = 'url(img/oo.png)';
                bt.setAttribute('disabled', 'true');
                o.push(i);
                console.log(o);
            }
            num = (num % 2) + 1;

            // verificaX(){

            // }

            
        });

    }

});
