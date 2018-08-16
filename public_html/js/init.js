window.onload = function () {

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    //
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var boy = new Image();
    boy.src = "img/Boy.png";
    var mapa = new Image();
    mapa.src = "img/map.png";

    //Debug para mostrar as coordenadas do personagem, mapa.
    
    
    var div = document.getElementById("textDiv");
    var div2 = document.getElementById("textDiv2");
    var div3 = document.getElementById("textDiv3");

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
    
    function keydownHandler(e) {
        switch (e.keyCode) {
            case RIGHT:
                personagem.mvRight = true;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case LEFT:
                personagem.mvRight = false;
                personagem.mvLeft = true;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case UP:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = true;
                personagem.mvDown = false;
                break;
            case DOWN:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = true;
                break;
        }
    }

    function keyupHandler(e) {
        switch (e.keyCode) {
            case RIGHT:
                personagem.mvRight = false;
                break;
            case LEFT:
                personagem.mvLeft = false;
                break;
            case UP:
                personagem.mvUp = false;
                break;
            case DOWN:
                personagem.mvDown = false;
                break;
        }
    }
    //-----------------------------------------------------
    var personagem = new Sprite(boy, mapa);
    //Combobox's
    var atendimentos = document.getElementById("cb_atendimentos");
    var coord = document.getElementById("cb_coord");
    var convivencia = document.getElementById("cb_convivencia");
    var labs = document.getElementById("cb_labs");
    var outros = document.getElementById("cb_outros");
    var banheiros = document.getElementById("cb_banheiros");
    var salas = document.getElementById("cb_salas");
    //-----------------------------------
    var locais = document.getElementById("cb_movers");
    //Div's
    var divSalas = document.getElementById("div_salas");
    var divAtendimentos = document.getElementById("div_atendimentos");
    var divCoord = document.getElementById("div_coord");
    var divConvivencia = document.getElementById("div_convivencia");
    var divLabs = document.getElementById("div_labs");
    var divOutros = document.getElementById("div_outros");
    var divBanheiros = document.getElementById("div_banheiros");
    //---------------------------------------
    var resetar = document.getElementById("resetarMV");
    var mover;



    boy.onload = function () {
        init();
    };
    function init() {
        loop();
        personagem.move();
    }
    function verificarBlocos() {
        switch (locais.value) {
            case "atendimentos":
                divAtendimentos.style.visibility = "visible";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "hidden";
                break;
            case "coord":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "visible";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "hidden";
                break;
            case "convivencia":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "visible";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "hidden";
                break;
            case "labs":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "visible";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "hidden";
                break;
            case "banheiros":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "visible";
                divSalas.style.visibility = "hidden";
                break;
            case "outros":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "visible";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "hidden";
                break;
            case "salas":
                divAtendimentos.style.visibility = "hidden";
                divCoord.style.visibility = "hidden";
                divConvivencia.style.visibility = "hidden";
                divLabs.style.visibility = "hidden";
                divOutros.style.visibility = "hidden";
                divBanheiros.style.visibility = "hidden";
                divSalas.style.visibility = "visible";
                break;
        }
    }
    function velocidade() {
        if (personagem.velocidade <= 2) {
            document.getElementById("veloMenos").disabled = true;
            document.getElementById("veloMais").disabled = false;
        }
        if (personagem.velocidade >= 2) {
            document.getElementById("veloMenos").disabled = false;
            document.getElementById("veloMais").disabled = true;
        }
        document.getElementById("veloMais").onclick = function (e) {
            if (personagem.velocidade <= 2) {
                personagem.velocidade++;
            }
            e.preventDefault();
        };
        document.getElementById("veloMenos").onclick = function (e) {
            if (personagem.velocidade >= 2) {
                personagem.velocidade--;
            }
            e.preventDefault();
        };

    }
    function resetarMV() {
        resetar.onclick = function (e) {
            personagem.resetarMVI();
            personagem.resetarVelocidade();
            mover = "";
            e.preventDefault();
        };

    }
    function verificarLocalSalas() {
        document.getElementById("submitSalas").onclick = function (e) {
            switch (salas.value) {
                case "sala01":
                    mover = "sala01";
                    personagem.resetarMV();
                    break;
                case "sala02":
                    mover = "sala02";
                    personagem.resetarMV();
                    break;
                case "sala03":
                    mover = "sala03";
                    personagem.resetarMV();
                    break;
                case "sala04":
                    mover = "sala04";
                    personagem.resetarMV();
                    break;
                case "sala05":
                    mover = "sala05";
                    personagem.resetarMV();
                    break;
                case "sala06":
                    mover = "sala06";
                    personagem.resetarMV();
                    break;
                case "sala07":
                    mover = "sala07";
                    personagem.resetarMV();
                    break;
                case "sala08":
                    mover = "sala08";
                    personagem.resetarMV();
                    break;
                case "sala09":
                    mover = "sala09";
                    personagem.resetarMV();
                    break;
                case "sala13":
                    mover = "sala13";
                    personagem.resetarMV();
                    break;
                case "sala14":
                    mover = "sala14";
                    personagem.resetarMV();
                    break;
                case "sala15":
                    mover = "sala15";
                    personagem.resetarMV();
                    break;
                case "sala16":
                    mover = "sala16";
                    personagem.resetarMV();
                    break;
                case "sala17":
                    mover = "sala17";
                    personagem.resetarMV();
                    break;
                case "sala18":
                    mover = "sala18";
                    personagem.resetarMV();
                    break;
                case "sala19":
                    mover = "sala19";
                    personagem.resetarMV();
                    break;
            }
            e.preventDefault();
        };
    }
    function verificarLocalAtendimento() {
        document.getElementById("submitAtendimentos").onclick = function (e) {
            switch (atendimentos.value) {
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
                case "marketing":
                    mover = "marketing";
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
    function verificarLocalCoord() {
        document.getElementById("submitCoord").onclick = function (e) {
            switch (coord.value) {
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
                case "NAPI":
                    mover = "NAPI";
                    personagem.resetarMV();
                    break;
            }
            e.preventDefault();
        };

    }
    function verificarLocalConvivencia() {
        document.getElementById("submitConvivencia").onclick = function (e) {
            switch (convivencia.value) {
                case "cantina2":
                    mover = "cantina2";
                    personagem.resetarMV();
                    break;
                case "cantina":
                    mover = "cantina";
                    personagem.resetarMV();
                    break;
                case "xerox":
                    mover = "xerox";
                    personagem.resetarMV();
                    break;
            }
            e.preventDefault();
        };

    }
    function verificarLocalLabs() {
        document.getElementById("submitLabs").onclick = function (e) {
            switch (labs.value) {
                case "lab1":
                    mover = "lab1";
                    personagem.resetarMV();
                    break;
                case "lab2":
                    mover = "lab2";
                    personagem.resetarMV();
                    break;
                case "lab de hardware":
                    mover = "lab de hardware";
                    personagem.resetarMV();
                    break;

            }
            e.preventDefault();
        };
    }
    function verificarLocalOutros() {
        document.getElementById("submitOutros").onclick = function (e) {
            switch (outros.value) {
                case "biblioteca":
                    mover = "biblioteca";
                    personagem.resetarMV();
                    break;
                case "sala de estudos externa":
                    mover = "sala de estudos externa";
                    personagem.resetarMV();
                    break;
                case "sala dos professores":
                    mover = "sala dos professores";
                    personagem.resetarMV();
                    break;
                case "copa":
                    mover = "copa";
                    personagem.resetarMV();
                    break;
                case "nde":
                    mover = "nde";
                    personagem.resetarMV();
                    break;
                case "fabSoft":
                    mover = "fabSoft";
                    personagem.resetarMV();
                    break;

            }
            e.preventDefault();
        };

    }
    function verificarLocalBanheiro() {
        document.getElementById("submitBanheiros").onclick = function (e) {
            switch (banheiros.value) {
                case "masculino":
                    mover = "masculino";
                    personagem.resetarMV();
                    break;
                case "feminino":
                    mover = "feminino";
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

            }
            e.preventDefault();
        };

    }
    function moverLocal(mv) {
        if (mv == "sala01") {
            personagem.mvSala01();
        }
        if (mv == "sala02") {
            personagem.mvSala02();
        }
        if (mv == "sala03") {
            personagem.mvSala03();
        }
        if (mv == "sala04") {
            personagem.mvSala04();
        }
        if (mv == "sala05") {
            personagem.mvSala05();
        }
        if (mv == "sala06") {
            personagem.mvSala06();
        }
        if (mv == "sala07") {
            personagem.mvSala07();
        }
        if (mv == "sala08") {
            personagem.mvSala08();
        }
        if (mv == "sala09") {
            personagem.mvSala09();
        }
        if (mv == "sala13") {
            personagem.mvSala13();
        }
        if (mv == "sala14") {
            personagem.mvSala14();
        }
        if (mv == "sala15") {
            personagem.mvSala15();
        }
        if (mv == "sala16") {
            personagem.mvSala16();
        }
        if (mv == "sala17") {
            personagem.mvSala17();
        }
        if (mv == "sala18") {
            personagem.mvSala18();
        }
        if (mv == "sala19") {
            personagem.mvSala19();
        }
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
        if (mv == "fabSoft") {
            personagem.mvFabricaSoft();
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

    function loop() {
        requestAnimationFrame(loop, canvas);
        render();
        verificarLocalAtendimento();
        verificarLocalCoord();
        verificarLocalConvivencia();
        verificarLocalLabs();
        verificarLocalOutros();
        verificarLocalBanheiro();
        verificarLocalSalas();
        verificarBlocos();
        moverLocal(mover);
        velocidade();
        resetarMV();
        div.textContent = personagem.posX;
        div2.textContent = personagem.posY;
        div3.textContent = personagem.mapaY;
        personagem.move();
        
    }
};

