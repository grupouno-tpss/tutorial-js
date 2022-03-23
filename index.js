let timer = 3000;

function tutorial () {
    // close 

    this.container('button1', 'Este es el espacion donde va la descripción - boton 1');

    setTimeout(() => {
        this.close('button1');
        this.container('button2', 'Este es el espacion donde va la descripción- boton 2');
    }, timer*2);

    setTimeout(() => {
        this.close('button2');
        this.container('button3', 'Este es el espacion donde va la descripción - boton 3');
    }, timer*3);
    
    setTimeout(() => {
        this.close('button3');
        this.container('button4', 'Este es el espacion donde va la descripción - boton 3');
    }, timer*4);
    setTimeout(() => {
        this.close('button4');
        this.container('button5', 'Este es el espacion donde va la descripción - boton 5');
    }, timer*5);

    setTimeout(() => {
        this.close('button5');
        this.container('button6', 'Este es el espacion donde va la descripción - boton 6');
    }, timer*6);
    setTimeout(() => {
        this.close('button6');
        this.container('button7', 'Este es el espacion donde va la descripción - boton 7');
        //this.close('button7');
    }, timer*7);
    
    setTimeout(() => {
        this.close('button7');
        this.container('buttone', 'Esta es la descripción de la navegación');
        //this.close('buttone');
    }, timer*8);

    setTimeout(() => {
        this.close('buttone');
        this.container('buttone2', 'Esta es la descripción del buttone2');
        //this.close('buttone');
    }, timer*9);

    document.getElementById('btn_tutorial_close').addEventListener('click', () => {
        timer = 500;
    });
}

tutorial.prototype.close = (id) => {
    document.getElementById(id).removeAttribute('style', 'box-shadow');
    document.body.removeChild(document.getElementById('description'));
    document.body.removeChild(document.getElementById('btn_tutorial_close'));
}

tutorial.prototype.container = (id, text) => {
    timer;
    let button_close = document.createElement('button');
    button_close.id = 'btn_tutorial_close';
    button_close.setAttribute('style', 'position: fixed; top: 5px; color: white; font-weight: bold; margin: 15px;');

    button_close.innerHTML = "Acelerar";
    button_close.classList.add('btn');
    //button_close.classList.add('btn-secondary');
    document.body.appendChild(button_close);


    let element = document.getElementById(id);
    element.setAttribute('style', 'box-shadow: 0px 68px 0px 10500px rgba(0,0,0,0.90); position:absolute;');
    element.focus();

    // element positionn

    let position = element.getBoundingClientRect();

    scrollTo(0, position.top -200);

    let h2 = document.createElement('div');
    h2.id = 'description';
    let top = position.top + 78;

    h2.setAttribute('style', 'position: fixed; top: '+top+'px; bottom: '+position.bottom+250+'px; font-size: 30px; width: 100%; text-align: center; color: white; font-weight: bold;');

    h2.innerHTML = text;

    document.body.appendChild(h2);

    //close 

    function close () {
        document.getElementById(id).removeAttribute('style', 'box-shadow');
        document.body.removeChild(h2);
        document.body.removeChild(button_close);
    }
}

//let init = new tutorial();