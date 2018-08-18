
function Sprite(img, mapa) {
    //DEBUG
    //this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
    //variaveis do mapa
    this.mapaX = -4;
    this.mapaY = 0;
    //this.size = 635;
    //Variaveis do personagem
    this.srcX = 0;
    this.srcY = 0;
    this.width = 398;
    this.height = 355;
    this.velocidade = 1;
    this.delay = 0;// delay do personagem antes de resetar em ms.
    this.tempo = 90;// tempo do delay
    //posição do personagem
    this.posX = 900;
    this.posY = 20;
    this.img = img;
    this.mapa = mapa;
    this.aux = false;
    this.animar = false;
    this.resetar = false;//resetar posição
    //Desenha
    this.draw = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, 55, 55);
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
//--------------------------------------------------------
//Salas
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
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
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
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
//Atendimentos
    this.mvProUniFiesRH = function () {
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
            }
        }
        if (this.posY >= 184 && this.posY <= 189) {
            if (this.posX <= 917) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvFinanceiro = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 567) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 565 && this.posY <= 569) {
            if (this.posX <= 719) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 715 && this.posX <= 722 && this.posY >= 565) {
            if (this.posY <= 613) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvAcademico = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 670) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 669 && this.posY <= 672) {
            if (this.posX <= 761) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvDTI = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 683) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 682 && this.posY <= 687) {
            if (this.posX >= 547) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                } else {
                    this.srcY = 0;//virar para baixo
                }
            }
        }
    };
    this.mvMarketing = function () {
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
            if (this.mapaY <= 800) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 799 && this.mapaY <= 802) {
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
    this.mvReprografia = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 950 && this.mapaY <= 955 && this.posY >= 809 && this.posY <= 812) {
            if (this.posX >= 419) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 417 && this.posX <= 422 && this.mapaY >= 950 && this.mapaY <= 955) {
            if (this.posY >= 750) {
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
    this.mvCopex = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 950 && this.mapaY <= 955 && this.posY >= 809 && this.posY <= 812) {
            if (this.posX >= 326) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 325 && this.posX <= 329 && this.mapaY >= 950 && this.mapaY <= 955) {
            if (this.posY >= 750) {
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
//---------------------------------------------------------
//Coordenações
    this.mvCoordServSocial = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 182 && this.mapaY <= 186) {
            if (this.posX >= 535) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 530 && this.posX <= 537 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posY >= 525) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY >= 689 && this.posY <= 693 && this.mapaY >= 180 && this.mapaY <= 188) {
            if (this.posX >= 495) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordCienContabeis = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 182 && this.mapaY <= 186) {
            if (this.posX >= 535) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 530 && this.posX <= 537 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posY >= 758) {
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY >= 757 && this.posY <= 761 && this.mapaY >= 180 && this.mapaY <= 188) {
            if (this.posX >= 495) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordFisio = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 182 && this.mapaY <= 186) {
            if (this.posX >= 500) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordADM = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 679) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 678 && this.posX <= 682 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 242) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 243 && this.mapaY <= 248) {
            if (this.posX >= 495) {
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
    this.mvCoordEmfermagem = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 679) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 678 && this.posX <= 682 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 242) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 243 && this.mapaY <= 248) {
            if (this.posX >= 539) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 535 && this.posX <= 539 && this.posY >= 807 && this.posY <= 812 && this.mapaY > 240) {
            if (this.mapaY <= 284) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordPsicologia = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 679) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 678 && this.posX <= 682 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 242) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 243 && this.mapaY <= 248) {
            if (this.posX >= 581) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 579 && this.posX <= 585 && this.posY >= 807 && this.posY <= 812 && this.mapaY > 240) {
            if (this.mapaY <= 284) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordPedagogica = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 786) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 785 && this.posX <= 789 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 242) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 243 && this.mapaY <= 246) {
            if (this.posX <= 839) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 837 && this.posX <= 842 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 282) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordEducFisica = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 786) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 785 && this.posX <= 789 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 242) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 243 && this.mapaY <= 246) {
            if (this.posX <= 875) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 874 && this.posX <= 878 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 282) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordAnalise = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 786) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 785 && this.posX <= 789 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 222) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 223 && this.mapaY <= 226) {
            if (this.posX <= 919) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvRecepCoord = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 182 && this.mapaY <= 186) {
            if (this.posX >= 535) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 530 && this.posX <= 537 && this.mapaY >= 180 && this.mapaY <= 185) {
            if (this.posY >= 669) {
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
    this.mvNAPI = function () {
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
            if (this.mapaY <= 183) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 812 && this.mapaY >= 181 && this.mapaY <= 184) {
            if (this.posX <= 786) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX >= 785 && this.posX <= 789 && this.posY >= 809 && this.posY <= 812) {
            if (this.mapaY <= 282) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
//---------------------------------------------------------
//Convivência
    this.mvCantina = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 807 && this.posX <= 810) {
            if (this.posY <= 187) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 186 && this.posY <= 190) {
            if (this.posX >= 784) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 783 && this.posX <= 789) {
            if (this.posY <= 315) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 314 && this.posY <= 319) {
            if (this.posX <= 814) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 813 && this.posX <= 819) {
            if (this.posY <= 397) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 398 && this.posY <= 402 && this.mapaY == 0) {
            if (this.posX <= 930) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                } else {
                    this.srcY = this.height; //virar para cima
                }
            }
        }
    };
    this.mvCantina2 = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 732) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 731 && this.mapaY <= 738 && this.posY >= 709 && this.posY <= 813) {
            if (this.posX <= 768) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvXerox = function () {
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
            if (this.posY <= 309) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 307 && this.posY <= 313) {
            if (this.posX > 310) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }

    };
//---------------------------------------------------------
//Laboratorios
    this.mvLab1 = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 660) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 659 && this.posY <= 662) {
            if (this.posX >= 432) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 430 && this.posX <= 433) {
            if (this.posY <= 740) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvLab2 = function () {
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
            if (this.posY <= 497) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 496 && this.posY <= 500) {
            if (this.posX >= 77) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvLab3 = function () {
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
            if (this.posX >= 678) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 677 && this.posX <= 680 && this.mapaY >= 380 && this.mapaY <= 385) {
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
    this.mvLabHardware = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 950 && this.mapaY <= 955 && this.posY >= 809 && this.posY <= 812) {
            if (this.posX >= 376) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posY >= 808 && this.posY <= 816 && this.posX >= 371 && this.posX <= 379) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
//---------------------------------------------------------
//Banheiros
    this.mvBanheiroM = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 807 && this.posX <= 810) {
            if (this.posY <= 187) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 186 && this.posY <= 190) {
            if (this.posX >= 784) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 783 && this.posX <= 789) {
            if (this.posY <= 315) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 314 && this.posY <= 319) {
            if (this.posX <= 814) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 813 && this.posX <= 819) {
            if (this.posY <= 462) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 461 && this.posY <= 465 && this.mapaY == 0) {
            if (this.posX <= 925) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 924 && this.posX <= 928) {
            if (this.posY <= 528) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvBanheiroF = function () {
        if (this.posY <= 135 && this.posX == 915) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 135 && this.posY <= 139) {
            if (this.posX >= 809) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 807 && this.posX <= 810) {
            if (this.posY <= 187) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 186 && this.posY <= 190) {
            if (this.posX >= 784) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 783 && this.posX <= 789) {
            if (this.posY <= 315) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 314 && this.posY <= 319) {
            if (this.posX <= 814) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 813 && this.posX <= 819) {
            if (this.posY <= 462) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 461 && this.posY <= 465 && this.mapaY == 0) {
            if (this.posX <= 973) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX >= 972 && this.posX <= 977) {
            if (this.posY <= 528) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvBanheiroMBC = function () {
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
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 815 && this.mapaY >= 950 && this.mapaY <= 956) {
            if (this.posX >= 110) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 109 && this.posX <= 114 && this.posY >= 809 && this.posY <= 815) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvBanheiroFBC = function () {
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
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 809 && this.posY <= 815 && this.mapaY >= 950 && this.mapaY <= 956) {
            if (this.posX >= 52) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 50 && this.posX <= 56 && this.posY >= 809 && this.posY <= 815) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
//---------------------------------------------------------
//Outros
    this.mvBiblioteca = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 779) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 778 && this.posY <= 783) {
            if (this.posX <= 971) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSalaEstudosExterna = function () {
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
            if (this.posX <= 917) {
                this.posX += this.velocidade;
                this.srcY = this.height * 3;//virar para esquerda
            }
        }
        if (this.posX >= 918 && this.posX <= 921 && this.posY >= 811 && this.posY <= 816) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0; //virar para Baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSalaProfessores = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 660) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 659 && this.posY <= 662) {
            if (this.posX >= 230) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvAuditorio = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 332) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 330 && this.posY <= 336) {
            if (this.posX >= 510) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCopa = function () {
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
        if (this.posX >= 153 && this.posX <= 160 && this.posY >= 809 && this.posY <= 815) {
            if (this.mapaY <= 915) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 808 && this.posY <= 816 && this.mapaY >= 908 && this.mapaY <= 919) {
            if (this.posX >= 70) {
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
    this.mvNDE = function () {
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
        if (this.posX >= 614 && this.posX <= 617) {
            if (this.posY <= 660) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 659 && this.posY <= 662) {
            if (this.posX >= 230) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 228 && this.posX <= 233) {
            if (this.posY <= 800) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }

    };
    this.mvFabricaSoft = function () {
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
        if (this.posX >= 153 && this.posX <= 160 && this.posY >= 809 && this.posY <= 815) {
            if (this.mapaY <= 850) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 808 && this.posY <= 814 && this.mapaY >= 850 && this.mapaY <= 856) {
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
    this.mvSalaEdFisica = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 950 && this.mapaY <= 955 && this.posY >= 809 && this.posY <= 812) {
            if (this.posX >= 663) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posY >= 808 && this.posY <= 816 && this.posX >= 660 && this.posX <= 669 && this.mapaY >= 950) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSalaPsicologia = function () {
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
            if (this.posX >= 682) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX >= 679 && this.posX <= 685 && this.posY >= 809 && this.posY <= 815 && this.mapaY >= 380) {
            if (this.mapaY <= 950) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 950 && this.mapaY <= 955 && this.posY >= 809 && this.posY <= 812) {
            if (this.posX >= 155) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posY >= 808 && this.posY <= 816 && this.posX >= 150 && this.posX <= 161 && this.mapaY >= 950) {
            if (this.mapaY <= 1050) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
//----------------------------------------------------------

    this.animacao = function () {
        if (this.animar) {
            this.countAnim++;
            if (this.countAnim >= 24) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 8) * this.width;
        } else {
            this.srcX = 0;
            this.countAnim = 0;
        }
    };
    //DEBUG
    /*this.move = function () {
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
    }*/
}

