window.onload = function () {

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    //
    var left = 37, up = 38, right = 39, down = 40;
    var boy = new Image();
    boy.src = "img/Boy.png";
    var mapa = new Image();
    mapa.src = "img/mapa.jpg";
    
    var personagem = new Sprite(boy, mapa);



    var div = document.getElementById("textDiv");
    var div2 = document.getElementById("textDiv2");
    var div3 = document.getElementById("textDiv3");
    var local = document.getElementById("input")

    boy.onload = function(){
      init();  
    };
    function init() {
        loop();
    }

    
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler(e) {
        switch (e.keyCode) {
            case right:
                personagem.mvRight = true;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case left:
                personagem.mvRight = false;
                personagem.mvLeft = true;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case up:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = true;
                personagem.mvDown = false;
                break;
            case down:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = true;
                break;
        }
    }
    function keyupHandler(e) {
        switch (e.keyCode) {
            case right:
                personagem.mvRight = false;
                break;
            case left:
                personagem.mvLeft = false;
                break;
            case up:
                personagem.mvUp = false;
                break;
            case down:
                personagem.mvDown = false;
                break;
        }
    }
    var mover = false;
    function verificarLocal() {
        document.getElementById("submit").onclick = function (e) {
            switch (local.value) {
                case "recep":
                    mover = true;

                    break;
                case "dti":
                    alert("dti");
                    break;
            }
            e.preventDefault();
        };
    }
    function moverLocal(mv) {
        if (mv) {
            personagem.mvRecepCoord();
        }
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        personagem.drawMapa(ctx,canvas.width, canvas.height);
        personagem.draw(ctx);
    }

    function update() {
        personagem.move();
    }
    function loop() {
        requestAnimationFrame(loop, canvas);
        render();
        update();
        div.textContent = personagem.posX;
        div2.textContent = personagem.posY;
        div3.textContent = personagem.mapaY;
        verificarLocal();
        moverLocal(mover);

    }


};

