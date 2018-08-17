
function Sprite(img, mapa) {
    this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
    //variaveis do mapa
    this.mapaX = -4;
    this.mapaY = 0;
    //this.size = 635;
    //Variaveis do personagem
    this.srcX = 0;
    this.srcY = 0;
    this.width = 24;
    this.height = 32;
    this.velocidade = 1;
    this.delay = 0;// delay do personagem antes de resetar em ms.
    this.tempo = 90;// tempo do delay
    //posição do personagem
    this.posX = 915;
    this.posY = 20;
    this.img = img;
    this.mapa = mapa;
    this.aux = false;
    this.animar = false;
    this.resetar = false;//resetar posição
    //Desenha
    this.draw = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        this.animacao();
    };
    this.drawMapa = function (ctx, width, height) {
        ctx.drawImage(this.mapa, this.mapaX, this.mapaY, width, height, 0, 0, width, height);
        //this.animacao();
    };

    //Mover
    this.resetarMV = function () {
        this.aux = false;
        this.animar = true;
        this.posX = 915;
        this.posY = 20;
        this.srcY = 0;
        this.mapaY = 0;
        this.delay = 0;
    };

    this.resetarMVI = function () {
        this.posX = 915;
        this.posY = 20;
        this.srcY = 0;
        this.mapaY = 0;
        this.aux = false;
        this.aux2 = false;
        this.aux3 = false;
        this.animar = false;
        this.delay = 0;
    };
    this.resetarVelocidade = function () {
        this.velocidade = 1;
    };
    //Sala BA
    this.mvSala01 = function () {
        if (this.posY <= 138 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 137 && this.posY <= 148) {
            if (this.posX >= 780) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 780 && this.posX <= 790) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 786 && this.posX <= 792 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala02 = function () {
        if (this.posY <= 138 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 137 && this.posY <= 148) {
            if (this.posX >= 646) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 646 && this.posX <= 649) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 645 && this.posX <= 670 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala03 = function () {
        if (this.posY <= 138 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 137 && this.posY <= 148) {
            if (this.posX >= 509) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 509 && this.posX <= 512) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 508 && this.posX <= 514 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala04 = function () {
        if (this.posY <= 138 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 137 && this.posY <= 148) {
            if (this.posX >= 371) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 371 && this.posX <= 375) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 370 && this.posX <= 377 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala05 = function () {
        if (this.posY <= 138 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 137 && this.posY <= 148) {
            if (this.posX >= 239) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 239 && this.posX <= 242) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 239 && this.posX <= 244 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala06 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 143) {
            if (this.posX >= 81) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 81 && this.posX <= 84) {
            if (this.posY >= 30) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 81 && this.posX <= 84 && this.posY >= 25 && this.posY <= 30) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala07 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 143) {
            if (this.posX >= 187) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 185 && this.posX <= 189) {
            if (this.posY <= 176) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 176 && this.posY <= 180) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 79 && this.posY >= 176 && this.posY <= 179) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala08 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 143) {
            if (this.posX >= 187) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 185 && this.posX <= 189) {
            if (this.posY <= 360) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 360 && this.posY <= 365) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 79 && this.posY >= 360 && this.posY <= 365) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSala09 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 530 && this.posX <= 534) {
                this.aux = false;
            }
        }
        if (this.posY >= 253 && this.posY <= 258) {
            if (this.posX >= 415) {
                this.posX -= this.velocidade;
            }
        }
        if (this.posX >= 411 && this.posX <= 416) {
            if (this.posY <= 587) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 586 && this.posY <= 589) {
            if (this.posX > 310) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda

            }
        }
        if (this.posX >= 307 && this.posX <= 311 && this.posY >= 586 && this.posY <= 590) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    //Salas BC
    this.mvSala13 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 498) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 495 && this.posX <= 502 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posY >= 760) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala14 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 280) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 279 && this.posX <= 285 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posY >= 760) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala15 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 158) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 155 && this.posX <= 160 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 440) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 439 && this.mapaY <= 442) {
            if (this.posX >= 50) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala16 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 158) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 155 && this.posX <= 160 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 600) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 599 && this.mapaY <= 602) {
            if (this.posX >= 50) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala17 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 158) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 155 && this.posX <= 160 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 650) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 649 && this.mapaY <= 652) {
            if (this.posX >= 50) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala18 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 612) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.aux2 = true;
            }
        }
        if (this.aux2) {
            this.mapaY += 1.7;
            this.posX -= this.velocidade;
            if (this.mapaY >= 530) {
                this.aux2 = false;
            }
        }
        if (this.posY >= 809 && this.posY <= 813 && this.mapaY >= 529 && this.mapaY <= 533) {
            if (this.posX >= 354) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para desquerda
            } else {
                this.aux3 = true;
            }
        }
        if (this.aux3) {
            if (this.mapaY <= 620) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.aux3 = false;
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala19 = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 806 && this.posX <= 810) {
            if (this.posY <= 185) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 615 && this.posX <= 616) {
                this.aux = false;
            }
        }
        if (this.posX >= 615 && this.posX <= 619) {
            if (this.posY <= 809) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY == 0) {
            if (this.posX <= 647) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 647 && this.posX <= 649 && this.posY >= 809 && this.mapaY <= 180) {
            if (this.mapaY <= 180) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posX <= 735) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 809 && this.posY <= 816 && this.posX >= 735 && this.posX <= 739 && this.mapaY >= 180 && this.mapaY <= 390) {
            if (this.mapaY <= 380) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 811 && this.posY <= 819 && this.mapaY >= 380 && this.mapaY <= 385) {
            if (this.posX >= 612) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.aux2 = true;
            }
        }
        if (this.aux2) {
            this.mapaY += 1.7;
            this.posX -= this.velocidade;
            if (this.mapaY >= 530) {
                this.aux2 = false;
            }
        }
        if (this.posY >= 809 && this.posY <= 813 && this.mapaY >= 529 && this.mapaY <= 533) {
            if (this.posX <= 496) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.aux3 = true;
            }
        }
        if (this.aux3) {
            if (this.mapaY <= 620) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.aux3 = false;
                    this.resetarMV();
                }
            }
        }
    };
//---------------------------------------------------------
    this.mvBiblioteca = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 485) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 485.5 && this.posY <= 890.5) {
            if (this.posX <= 699) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 700 && this.posX <= 703 && this.posY >= 485.5) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvProUniFiesRH = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 594 && this.posX <= 600) {
            if (this.posY <= 106) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 106 && this.posY <= 110) {
            if (this.posX <= 669) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 670 && this.posX <= 673 && this.posY >= 106 && this.posY <= 110) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }

    };
    this.mvXerox = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 460 && this.posX <= 470) {
                this.aux = false;
            }
        }
        if (this.posY >= 140 && this.posY <= 145) {
            if (this.posX >= 308) {
                this.posX -= this.velocidade;
            }
        }
        if (this.posX >= 305 && this.posX <= 308) {
            if (this.posY <= 191.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 190 && this.posY <= 193) {
            if (this.posX >= 274) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 271 && this.posX <= 274 && this.posY >= 191 && this.posY <= 194) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCantina = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 594 && this.posX <= 597) {
            if (this.posY <= 105) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY >= 105 && this.posY <= 108) {
            if (this.posX >= 578) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 576 && this.posX <= 579) {
            if (this.posY <= 234) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 235 && this.posY <= 238) {
            if (this.posX <= 682) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 682 && this.posX <= 684) {
            if (this.posY >= 210) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }

        if (this.posX >= 680 && this.posX <= 686 && this.posY >= 205 && this.posY <= 213) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvAuditorio = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 460 && this.posX <= 470) {
                this.aux = false;
            }
        }
        if (this.posX >= 469 && this.posX <= 473) {
            if (this.posY <= 197.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 197 && this.posY <= 199) {
            if (this.posX >= 403) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 400 && this.posX <= 403 && this.posY >= 197 && this.posY <= 199) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }

    };
    this.mvLab2 = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 133) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 131 && this.posX <= 133) {
            if (this.posY <= 310) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 311 && this.posY <= 314) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 78 && this.posY >= 311 && this.posY <= 313) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvRecepCoord = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 123 && this.mapaY <= 125) {
            if (this.posX >= 391) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 388 && this.posX <= 391) {
            if (this.posY >= 418) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 388 && this.posX <= 393 && this.posY >= 414 && this.posY <= 419 && this.mapaY == 124) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvBanheiroM = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 594 && this.posX <= 597) {
            if (this.posY <= 105) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY >= 106 && this.posY <= 109) {
            if (this.posX >= 578) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 576 && this.posX <= 579) {
            if (this.posY <= 286) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 285 && this.posY <= 288) {
            if (this.posX <= 682) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 680 && this.posX <= 683) {
            if (this.posY <= 308) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 679 && this.posX <= 682 && this.posY >= 308 && this.posY <= 311) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvBanheiroF = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 594 && this.posX <= 597) {
            if (this.posY <= 105) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY >= 106 && this.posY <= 109) {
            if (this.posX >= 578) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 576 && this.posX <= 579) {
            if (this.posY <= 286) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 285 && this.posY <= 288) {
            if (this.posX <= 718) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 717 && this.posX <= 719) {
            if (this.posY <= 308) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 716 && this.posX <= 719 && this.posY >= 307 && this.posY <= 310) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvFinanceiro = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 460 && this.posX <= 470) {
                this.aux = false;
            }
        }
        if (this.posX >= 460 && this.posX <= 470) {
            if (this.posY <= 358.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 358 && this.posY <= 360) {
            if (this.posX <= 531) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 530 && this.posX <= 535 && this.posY >= 350) {
            if (this.posY <= 381.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 530 && this.posX <= 535 && this.posY >= 380 && this.posY <= 384) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvAcademico = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 418) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 418 && this.posY <= 421 && this.mapaY == 0) {
            if (this.posX <= 517) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 516 && this.posX <= 521 && this.posY >= 417 && this.posY <= 420) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvDTI = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 415) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 415 && this.posY <= 418) {
            if (this.posX >= 405) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 402 && this.posX <= 406) {
            if (this.posY <= 442.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 402 && this.posX <= 405 && this.posY >= 442 && this.posY <= 446) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvLab1 = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 415) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 415 && this.posY <= 418) {
            if (this.posX >= 318) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 315 && this.posX <= 320) {
            if (this.posY <= 442.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 317 && this.posX <= 320 && this.posY >= 442 && this.posY <= 446) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSalaProfessores = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 415) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 415 && this.posY <= 418) {
            if (this.posX >= 168) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 165 && this.posX <= 168 && this.posY >= 415 && this.posY <= 418) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvNDE = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 415) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 415 && this.posY <= 418) {
            if (this.posX >= 168) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 166 && this.posX <= 168) {
            if (this.posY <= 487.5) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 165 && this.posX <= 169 && this.posY >= 487 && this.posY <= 491) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordServSocial = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 123 && this.mapaY <= 125) {
            if (this.posX >= 391) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 388 && this.posX <= 391) {
            if (this.posY >= 432) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY >= 430 && this.posY <= 432 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX >= 365) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 362 && this.posX <= 365 && this.posY >= 429 && this.posY <= 432 && this.mapaY >= 122 && this.mapaY <= 125) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }

    };
    this.mvCoordCienContabeis = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 123 && this.mapaY <= 125) {
            if (this.posX >= 391) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 388 && this.posX <= 391) {
            if (this.posY >= 477) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY >= 474 && this.posY <= 478 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX >= 365) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 362 && this.posX <= 366 && this.posY >= 473 && this.posY <= 477 && this.mapaY >= 122 && this.mapaY <= 125) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }

    };
    this.mvCoordFisio = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 123 && this.mapaY <= 125) {
            if (this.posX >= 391) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 388 && this.posX <= 391) {
            if (this.posY >= 507) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY >= 505 && this.posY <= 507 && this.mapaY >= 122 && this.mapaY <= 1255) {
            if (this.posX >= 365) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 362 && this.posX <= 365 && this.posY >= 504 && this.posY <= 507 && this.mapaY >= 122 && this.mapaY <= 125) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordADM = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 499) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 500 && this.posX <= 505 && this.posY >= 513 && this.posY <= 520) {
            if (this.mapaY <= 155) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 518 && this.mapaY >= 150 && this.mapaY <= 158) {
            if (this.posX >= 359) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 355 && this.posX <= 360 && this.posY >= 513 && this.posY <= 520 && this.mapaY >= 150 && this.mapaY <= 158) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordEmfermagem = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 499) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 500 && this.posX <= 505 && this.posY >= 513 && this.posY <= 520) {
            if (this.mapaY <= 155) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 518 && this.mapaY >= 150 && this.mapaY <= 158) {
            if (this.posX >= 382) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 377 && this.posX <= 385 && this.mapaY >= 150 && this.mapaY <= 158) {
            if (this.posY <= 538) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 381 && this.posX <= 389 && this.posY >= 535 && this.posY <= 542 && this.mapaY >= 150 && this.mapaY <= 158) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordPsicologia = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 499) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 500 && this.posX <= 505 && this.posY >= 513 && this.posY <= 520) {
            if (this.mapaY <= 155) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 518 && this.mapaY >= 150 && this.mapaY <= 158) {
            if (this.posX >= 405) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 400 && this.posX <= 407 && this.mapaY >= 150 && this.mapaY <= 158) {
            if (this.posY <= 538) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 400 && this.posX <= 408 && this.posY >= 537 && this.posY <= 543 && this.mapaY >= 150 && this.mapaY <= 158) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvNAPI = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 579) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 577 && this.posX <= 583 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posY <= 544) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 542 && this.posY <= 547 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 585) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 584 && this.posX <= 589 && this.posY >= 543 && this.posY <= 549) {
            if (this.mapaY <= 155) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 582 && this.posX <= 589 && this.posY >= 541 && this.posY <= 548 && this.mapaY >= 153 && this.mapaY <= 160) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordPedagogica = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 579) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 577 && this.posX <= 583 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posY <= 535) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 532 && this.posY <= 539 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 620) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 612 && this.posX <= 622 && this.posY >= 531 && this.posY <= 539) {
            if (this.mapaY <= 155) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 610 && this.posX <= 617 && this.posY >= 532 && this.posY <= 539 && this.mapaY >= 152 && this.mapaY <= 160) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordEducFisica = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 579) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 577 && this.posX <= 583 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posY <= 535) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 532 && this.posY <= 539 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 642) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 640 && this.posX <= 646 && this.posY >= 531 && this.posY <= 539) {
            if (this.mapaY <= 165) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 638 && this.posX <= 644 && this.posY >= 533 && this.posY <= 540 && this.mapaY >= 163 && this.mapaY <= 170) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCoordAnalise = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 513 && this.posY <= 517 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 579) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 577 && this.posX <= 583 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posY <= 535) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 532 && this.posY <= 539 && this.mapaY >= 122 && this.mapaY <= 125) {
            if (this.posX <= 671) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 670 && this.posX <= 677 && this.posY >= 532 && this.posY <= 539 && this.mapaY >= 122 && this.mapaY <= 125) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCantina2 = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 472) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 471 && this.mapaY <= 477 && this.posY >= 513 && this.posY <= 519) {
            if (this.posX <= 593) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita

            }
        }
        if (this.posX >= 591 && this.posX <= 598 && this.posY >= 513 && this.posY <= 519 && this.mapaY >= 470 && this.mapaY <= 477) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvSalaEstudosExterna = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX <= 677) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para esquerda
            }
        }
        if (this.posX >= 676 && this.posX <= 680 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 649) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 648 && this.mapaY <= 654) {
            if (this.posY <= 546) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 676 && this.posX <= 683 && this.posY >= 541 && this.posY <= 549 && this.mapaY >= 645) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvLabHardware = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 275) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY >= 646 && this.mapaY <= 651 && this.posX >= 271 && this.posX <= 276) {
            if (this.posY <= 550) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 270 && this.posX <= 277 && this.posY >= 549 && this.posY <= 552 && this.mapaY >= 645) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvBanheiroMBC = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 80) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY >= 646 && this.mapaY <= 651 && this.posX >= 75 && this.posX <= 83) {
            if (this.posY <= 550) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 79 && this.posX <= 85 && this.posY >= 549 && this.posY <= 553 && this.mapaY >= 645) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvBanheiroFBC = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 42) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY >= 645 && this.mapaY <= 651 && this.posX >= 37 && this.posX <= 41) {
            if (this.posY <= 550) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 38 && this.posX <= 43 && this.posY >= 548 && this.posY <= 552 && this.mapaY >= 645) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCopa = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 120) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 118 && this.posX <= 123 && this.posY >= 514 && this.posY <= 520) {
            if (this.mapaY <= 620) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 619 && this.mapaY <= 625 && this.posY >= 513 && this.posY <= 520) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 78 && this.posY >= 512 && this.posY <= 520 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvFabricaSoft = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 120) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 118 && this.posX <= 123 && this.posY >= 514 && this.posY <= 520) {
            if (this.mapaY <= 570) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 570 && this.mapaY <= 575 && this.posY >= 513 && this.posY <= 520) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 78 && this.posY >= 512 && this.posY <= 520 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvMarketing = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 120) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 118 && this.posX <= 123 && this.posY >= 514 && this.posY <= 520) {
            if (this.mapaY <= 535) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 533 && this.mapaY <= 538 && this.posY >= 513 && this.posY <= 520) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 75 && this.posX <= 78 && this.posY >= 512 && this.posY <= 520 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvDeposito = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 380) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 376 && this.posX <= 382 && this.mapaY >= 645 && this.mapaY <= 649) {
            if (this.posY >= 475) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 378 && this.posX <= 384 && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }

    };
    this.mvReprografia = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 307) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 306 && this.posX <= 310 && this.mapaY >= 645 && this.mapaY <= 649) {
            if (this.posY >= 475) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 306 && this.posX <= 310 && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };
    this.mvCopex = function () {
        if (this.posY <= 80) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 81 && this.posY <= 90) {
            if (this.posX >= 596) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 595 && this.posX <= 610) {
            if (this.posY <= 110) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX >= 450 && this.posX <= 455) {
                this.aux = false;
            }
        }
        if (this.posX >= 450 && this.posX <= 455) {
            if (this.posY <= 512) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 512 && this.posY <= 515) {
            if (this.posX <= 473) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += this.velocidade;
            }
        }
        if (this.posX >= 474 && this.posX <= 477 && this.posY >= 500) {
            if (this.mapaY <= 122) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 514 && this.posY <= 521 && this.mapaY >= 121 && this.mapaY <= 129) {
            if (this.posX <= 542) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 122 && this.mapaY <= 265) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY >= 512 && this.posY <= 524 && this.mapaY >= 263 && this.mapaY <= 269) {
            if (this.posX >= 503) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 498 && this.posX <= 504 && this.posY >= 514 && this.posY <= 520 && this.mapaY >= 260) {
            if (this.mapaY <= 647) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 647 && this.mapaY <= 651 && this.posY >= 512 && this.posY <= 519) {
            if (this.posX >= 240) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 238 && this.posX <= 245 && this.mapaY >= 645 && this.mapaY <= 649) {
            if (this.posY >= 475) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 238 && this.posX <= 245 && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.delay++;
            if (this.delay >= this.tempo) {
                this.resetarMV();
            }
        }
    };

    this.animacao = function () {
        if (this.animar) {
            this.countAnim++;
            if (this.countAnim >= 40) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        } else {
            this.srcX = 0;
            this.countAnim = 0;
        }
    };
    this.move = function () {
        if (this.mvRight) {
            this.posX += this.velocidade;

        } else
        if (this.mvLeft) {
            this.posX -= this.velocidade;

        } else
        if (this.mvUp) {
            this.posY -= this.velocidade;

        } else
        if (this.mvDown) {
            this.posY += this.velocidade;

        }
    }
}

