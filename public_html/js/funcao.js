window.onload = function() {

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    //
    var left = 37, up = 38, right = 39, down = 40;
    var boy = new Image();
    boy.src = "img/Boy.png";
    var boy = new Sprite(boy);



    var div = document.getElementById("textDiv");
    var div2 = document.getElementById("textDiv2");
    var local = document.getElementById("input")
    boy.onload = function() {

        init();
    };
    function init() {
        loop();
    }
    var srcX = -4;
    var srcY = 0;
    var size = 635;
    var DescerFunc;
    DescerFunc = setInterval(Descer, 15);
    var map = new Image();
    map.src = "img/mapa.jpg";
    map.onload = function() {
        loop();
    };



    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler(e) {
        switch (e.keyCode) {
            case right:
                boy.mvRight = true;
                boy.mvLeft = false;
                boy.mvUp = false;
                boy.mvDown = false;
                break;
            case left:
                boy.mvRight = false;
                boy.mvLeft = true;
                boy.mvUp = false;
                boy.mvDown = false;
                break;
            case up:
                boy.mvRight = false;
                boy.mvLeft = false;
                boy.mvUp = true;
                boy.mvDown = false;
                break;
            case down:
                boy.mvRight = false;
                boy.mvLeft = false;
                boy.mvUp = false;
                boy.mvDown = true;
                break;
        }
    }
    function keyupHandler(e) {
        switch (e.keyCode) {
            case right:
                boy.mvRight = false;
                break;
            case left:
                boy.mvLeft = false;
                break;
            case up:
                boy.mvUp = false;
                break;
            case down:
                boy.mvDown = false;
                break;
        }
    }
    var mover = false;
    function verificarLocal() {
        document.getElementById("submit").onclick = function(e) {
            switch (local.value) {
                case "xerox":
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
            boy.mvXerox();
        }
    }
    function paraTime() {
        if (srcY >= 672) {
            clearInterval(DescerFunc);
        }
    }
    function Descer() {
        //srcY += 1;
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(map, srcX, srcY, size, size, 0, 0, canvas.width, canvas.height);
        boy.draw(ctx);
    }

    function update() {
        boy.move();
    }
    function loop() {
        requestAnimationFrame(loop, canvas);
        render();
        update();
        paraTime();
        div.textContent = boy.posX;
        div2.textContent = boy.posY;
        verificarLocal();
        moverLocal(mover);
    }


};

