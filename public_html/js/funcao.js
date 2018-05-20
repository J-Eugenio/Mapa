window.onload = function() {

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    //
    var left = 37, up = 38, right = 39, down = 40;
    var boy = new Image();
    boy.src = "img/Boy.png";
    var mapa = new Image();
    mapa.src = "img/mapa.jpg";

    var personagem = new Sprite(boy, mapa);
    //DEBUG
    var div = document.getElementById("textDiv");
    var div2 = document.getElementById("textDiv2");
    var div3 = document.getElementById("textDiv3");
    var local = document.getElementById("input")
    //---------------------
    boy.onload = function() {
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
        document.getElementById("submit").onclick = function(e) {
            switch (local.value) {
                case "biblioteca":
                    mover = "biblioteca";
                    personagem.resetarMV();
                    break;
                case "lab2":
                    mover = "lab2";
                    personagem.resetarMV();
                    break;
                case "fies":
                    mover = "fies";
                    personagem.resetarMV();
                    break;
                case "prouni":
                    mover = "prouni";
                    personagem.resetarMV();
                    break;
                case "rh":
                    mover = "rh";
                    personagem.resetarMV();
                    break;
                case "cantina":
                    mover = "cantina";
                    personagem.resetarMV();
                    break;
                case "auditorio":
                    mover = "auditorio";
                    personagem.resetarMV();
                    break;
                case "xerox":
                    mover = "xerox";
                    personagem.resetarMV();
                    break;
                case "recep":
                    mover = "recep";
                    personagem.resetarMV();
                    break;
                case "masculino":
                    mover = "masculino";
                    personagem.resetarMV();
                    break;
                case "feminino":
                    mover = "feminino";
                    personagem.resetarMV();
                    break;
                case "financeiro":
                    mover = "financeiro";
                    personagem.resetarMV();
                    break;
                case "academico":
                    mover = "academico";
                    personagem.resetarMV();
                    break;
                case "dti":
                    mover = "dti";
                    personagem.resetarMV();
                    break;
                case "lab1":
                    mover = "lab1";
                    personagem.resetarMV();
                    break;
                case "sala dos professores":
                    mover = "sala dos professores";
                    personagem.resetarMV();
                    break;
                case "nde":
                    mover = "nde";
                    personagem.resetarMV();
                    break;
                case "coord servico social":
                    mover = "coord servico social";
                    personagem.resetarMV();
                    break;
                case "coord contabeis":
                    mover = "coord contabeis";
                    personagem.resetarMV();
                    break;
                case "coord fisio":
                    mover = "coord fisio";
                    personagem.resetarMV();
                    break;
                case "coord adm":
                    mover = "coord adm";
                    personagem.resetarMV();
                    break;
                case "coord enfermagem":
                    mover = "coord enfermagem";
                    personagem.resetarMV();
                    break;
                case "coord psicologia":
                    mover = "coord psicologia";
                    personagem.resetarMV();
                    break;
                case "NAPI":
                    mover = "NAPI";
                    personagem.resetarMV();
                    break;
                case "coord pedagogica":
                    mover = "coord pedagogica";
                    personagem.resetarMV();
                    break;
                case "coord educacao fisica":
                    mover = "coord educacao fisica";
                    personagem.resetarMV();
                    break;
                case "coord analise":
                    mover = "coord analise";
                    personagem.resetarMV();
                    break;
                case "cantina2":
                    mover = "cantina2";
                    personagem.resetarMV();
                    break;
                case "sala de estudos externa":
                    mover = "sala de estudos externa";
                    personagem.resetarMV();
                    break;
                case "lab de hardware":
                    mover = "lab de hardware";
                    personagem.resetarMV();
                    break;
                case "banheiro masculino2":
                    mover = "banheiro masculino2";
                    personagem.resetarMV();
                    break;
                case "banheiro feminino2":
                    mover = "banheiro feminino2";
                    personagem.resetarMV();
                    break;
                case "marketing":
                    mover = "marketing";
                    personagem.resetarMV();
                    break;
                case "nexas":
                    mover = "nexas";
                    personagem.resetarMV();
                    break;
                case "copa":
                    mover = "copa";
                    personagem.resetarMV();
                    break;
                case "deposito":
                    mover = "deposito";
                    personagem.resetarMV();
                    break;
                case "reprografia":
                    mover = "reprografia";
                    personagem.resetarMV();
                    break;
                case "copex":
                    mover = "copex";
                    personagem.resetarMV();
                    break;
            }
            e.preventDefault();
        };
    }
    function moverLocal(mv) {
        if (mv == "biblioteca") {
            personagem.mvBiblioteca();
        }
        if (mv == "lab2") {
            personagem.mvLab2();
        }
        if (mv == "fies" || mv == "rh" || mv == "prouni") {
            personagem.mvProUniFiesRH();
        }
        if (mv == "cantina") {
            personagem.mvCantina();
        }
        if (mv == "auditorio") {
            personagem.mvAuditorio();
        }
        if (mv == "xerox") {
            personagem.mvXerox();
        }
        if (mv == "recep") {
            personagem.mvRecepCoord();
        }
        if (mv == "masculino") {
            personagem.mvBanheiroM();
        }
        if (mv == "feminino") {
            personagem.mvBanheiroF();
        }
        if (mv == "financeiro") {
            personagem.mvFinanceiro();
        }
        if (mv == "academico") {
            personagem.mvAcademico();
        }
        if (mv == "dti") {
            personagem.mvDTI();
        }
        if (mv == "lab1") {
            personagem.mvLab1();
        }
        if (mv == "sala dos professores") {
            personagem.mvSalaProfessores();
        }
        if (mv == "nde") {
            personagem.mvNDE();
        }
        if (mv == "coord servico social") {
            personagem.mvCoordServSocial();
        }
        if (mv == "coord contabeis") {
            personagem.mvCoordCienContabeis();
        }
        if (mv == "coord fisio") {
            personagem.mvCoordFisio();
        }
        if (mv == "coord adm") {
            personagem.mvCoordADM();
        }
        if (mv == "coord enfermagem") {
            personagem.mvCoordEmfermagem();
        }
        if (mv == "coord psicologia") {
            personagem.mvCoordPsicologia();
        }
        if (mv == "NAPI") {
            personagem.mvNAPI();
        }
        if (mv == "coord pedagogica") {
            personagem.mvCoordPedagogica();
        }
        if (mv == "coord educacao fisica") {
            personagem.mvCoordEducFisica();
        }
        if (mv == "coord analise") {
            personagem.mvCoordAnalise();
        }
        if (mv == "cantina2") {
            personagem.mvCantina2();
        }
        if (mv == "sala de estudos externa") {
            personagem.mvSalaEstudosExterna();
        }
        if (mv == "lab de hardware") {
            personagem.mvLabHardware();
        }
        if (mv == "banheiro masculino2") {
            personagem.mvBanheiroMBC();
        }
        if (mv == "banheiro feminino2") {
            personagem.mvBanheiroFBC();
        }
        if (mv == "marketing") {
            personagem.mvMarketing();
        }
        if (mv == "nexas") {
            personagem.mvNexas();
        }
        if (mv == "copa") {
            personagem.mvCopa();
        }
        if (mv == "deposito") {
            personagem.mvDeposito();
        }
        if (mv == "reprografia") {
            personagem.mvReprografia();
        }
        if (mv == "copex") {
            personagem.mvCopex();
        }
    }
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        personagem.drawMapa(ctx, canvas.width, canvas.height);
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

