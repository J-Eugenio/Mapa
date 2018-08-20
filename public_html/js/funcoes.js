
function Sprite(img, mapa) {
    //DEBUG
    this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
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
    };

    //Mover
    this.resetarMV = function () {
        this.aux = false;
        this.animar = true;
        this.posX = 900;
        this.posY = 20;
        this.srcY = 0;
        this.mapaY = 0;
        this.delay = 0;
    };

    this.resetarMVI = function () {
        this.posX = 900;
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
        if (this.posY <= 121 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 120 && this.posY <= 126) {
            if (this.posX >= 766) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 766 && this.posX <= 776) {
            if (this.posY >= 16) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala02 = function () {
        if (this.posY <= 121 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 120 && this.posY <= 126) {
            if (this.posX >= 632) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 632 && this.posX <= 635) {
            if (this.posY >= 14) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala03 = function () {
        if (this.posY <= 121 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 120 && this.posY <= 126) {
            if (this.posX >= 495) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 495 && this.posX <= 498) {
            if (this.posY >= 14) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala04 = function () {
        if (this.posY <= 121 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 120 && this.posY <= 126) {
            if (this.posX >= 357) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 357 && this.posX <= 361) {
            if (this.posY >= 14) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala05 = function () {
        if (this.posY <= 121 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 120 && this.posY <= 126) {
            if (this.posX >= 225) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 225 && this.posX <= 229) {
            if (this.posY >= 14) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala06 = function () {
        if (this.posY <= 115 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 114 && this.posY <= 126) {
            if (this.posX >= 76) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 76 && this.posX <= 80) {
            if (this.posY >= 14) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala07 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 117 && this.posY <= 121) {
            if (this.posX >= 173) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 173 && this.posX <= 178) {
            if (this.posY <= 159) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 159 && this.posY <= 164) {
            if (this.posX >= 63) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala08 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 117 && this.posY <= 121) {
            if (this.posX >= 173) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 173 && this.posX <= 178) {
            if (this.posY <= 335) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 335 && this.posY <= 352) {
            if (this.posX >= 63) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala13 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posX >= 480) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 478 && this.posX <= 485 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posY >= 405) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala14 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 645 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posX >= 268) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 265 && this.posX <= 271 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posY >= 405) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala15 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 645 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 730 && this.mapaY <= 750) {
            if (this.posX >= 144) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 139 && this.posX <= 149 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 780) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 780 && this.mapaY <= 785) {
            if (this.posX >= 36) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala16 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 645 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 730 && this.mapaY <= 750) {
            if (this.posX >= 144) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 139 && this.posX <= 149 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 947) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 947 && this.mapaY <= 950) {
            if (this.posX >= 36) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala17 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 645 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 730 && this.mapaY <= 750) {
            if (this.posX >= 144) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 138 && this.posX <= 149 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 990) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 990 && this.mapaY <= 1000) {
            if (this.posX >= 36) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvSala18 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posX >= 566) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.aux2 = true;
            }
        }
        if (this.aux2) {
            this.mapaY += this.velocidade;
            this.posX -= this.velocidade;
            if (this.mapaY >= 870) {
                this.aux2 = false;
            }
        }
        if (this.posY >= 450 && this.posY <= 457 && this.mapaY >= 869 && this.mapaY <= 876) {
            if (this.posX >= 345) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para desquerda
            } else {
                this.aux3 = true;
            }
        }
        if (this.aux3) {
            if (this.mapaY <= 920) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posX >= 566) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.aux2 = true;
            }
        }
        if (this.aux2) {
            this.mapaY += this.velocidade;
            this.posX -= this.velocidade;
            if (this.mapaY >= 870) {
                this.aux2 = false;
            }
        }
        if (this.posY >= 450 && this.posY <= 455 && this.mapaY >= 869 && this.mapaY <= 876) {
            if (this.posX <= 480) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            } else {
                this.aux3 = true;
            }
        }
        if (this.aux3) {
            if (this.mapaY <= 920) {
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
    this.mvPos = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 795 && this.posX <= 800) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 516 && this.posX <= 520) {
                this.aux = false;
            }
        }
        if (this.posY >= 215 && this.posY <= 240) {
            if (this.posX >= 401) {
                this.posX -= this.velocidade;
            }
        }
        if (this.posX >= 395 && this.posX <= 407) {
            if (this.posY <= 570) {
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
//---------------------------------------------------------
//Atendimentos
    this.mvProUniFiesRH = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 795 && this.posX <= 800) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 168 && this.posY <= 172) {
            if (this.posX <= 903) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvFinanceiro = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 550) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 550 && this.posY <= 555) {
            if (this.posX <= 705) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 704 && this.posX <= 710 && this.posY >= 545) {
            if (this.posY <= 600) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 200) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 199 && this.mapaY <= 206) {
            if (this.posX <= 761) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvDTI = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 200) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 199 && this.mapaY <= 206) {
            if (this.posX >= 540) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 538 && this.posX <= 543 && this.posY >= 449 && this.posY <= 453) {
            if (this.mapaY <= 230) {
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
    this.mvMarketing = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 640 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 730 && this.mapaY <= 740) {
            if (this.posX >= 144) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 142 && this.posX <= 150 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 1100) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 440 && this.posY <= 510 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posY <= 490) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posX >= 36) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvReprografia = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 640 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 730 && this.mapaY <= 740) {
            if (this.posX >= 669) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 665 && this.posX <= 675 && this.posY >= 450 && this.posY <= 456 &&
                this.mapaY >= 725) {
            if (this.mapaY <= 1100) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 665 && this.posX <= 675 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posY <= 647) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 647 && this.posY <= 657 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posX >= 402) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 398 && this.posX <= 408 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posY >= 580) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3;//virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCopex = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 640 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 460 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 460 && this.mapaY >= 730 && this.mapaY <= 740) {
            if (this.posX >= 669) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 665 && this.posX <= 675 && this.posY >= 450 && this.posY <= 456 &&
                this.mapaY >= 725) {
            if (this.mapaY <= 1100) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX >= 665 && this.posX <= 675 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posY <= 647) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 647 && this.posY <= 657 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posX >= 312) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 310 && this.posX <= 320 && this.mapaY >= 1100 && this.mapaY <= 1110) {
            if (this.posY >= 580) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3;//virar para cima
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 522) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 517 && this.posX <= 527 && this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posY >= 330) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            }
        }
        if (this.posY >= 328 && this.posY <= 335 && this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 481) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordCienContabeis = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 522) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 517 && this.posX <= 527 && this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posY >= 396) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            }
        }
        if (this.posY >= 394 && this.posY <= 402 && this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 481) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordFisio = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 474) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordADM = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 660) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 658 && this.posX <= 667 && this.posY >= 445 && this.posY <= 456) {
            if (this.mapaY <= 580) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 445 && this.posY <= 456 && this.mapaY >= 580 && this.mapaY <= 586) {
            if (this.posX >= 467) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvCoordEmfermagem = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 660) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 658 && this.posX <= 667 && this.posY >= 445 && this.posY <= 456) {
            if (this.mapaY <= 580) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 445 && this.posY <= 456 && this.mapaY >= 580 && this.mapaY <= 586) {
            if (this.posX >= 525) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 524 && this.posX <= 529 && this.posY >= 445 && this.posY <= 456 && this.mapaY > 580) {
            if (this.mapaY <= 620) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 660) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 658 && this.posX <= 667 && this.posY >= 445 && this.posY <= 456) {
            if (this.mapaY <= 580) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 445 && this.posY <= 456 && this.mapaY >= 580 && this.mapaY <= 586) {
            if (this.posX >= 560) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 559 && this.posX <= 567 && this.posY >= 445 && this.posY <= 456 && this.mapaY > 580) {
            if (this.mapaY <= 620) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 771) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 770 && this.posX <= 780 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 565) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 566 && this.mapaY <= 570) {
            if (this.posX <= 825) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 824 && this.posX <= 835 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 630) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 771) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 770 && this.posX <= 780 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 565) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 566 && this.mapaY <= 570) {
            if (this.posX <= 860) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 859 && this.posX <= 867 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 630) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 771) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 770 && this.posX <= 780 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 565) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 566 && this.mapaY <= 570) {
            if (this.posX <= 910) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvRecepCoord = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posX >= 522) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 517 && this.posX <= 527 && this.mapaY >= 518 && this.mapaY <= 530) {
            if (this.posY >= 320) {
                this.posY -= this.velocidade;
                this.srcY = this.height * 3; //virar para cima
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvNAPI = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 771) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 770 && this.posX <= 780 && this.posY >= 450 && this.posY <= 456) {
            if (this.mapaY <= 630) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 129) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 795 && this.posX <= 805) {
            if (this.posY <= 170) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 170 && this.posY <= 180) {
            if (this.posX >= 770) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 770 && this.posX <= 780) {
            if (this.posY <= 298) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 298 && this.posY <= 309) {
            if (this.posX <= 800) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar direita
            }
        }
        if (this.posX >= 800 && this.posX <= 810) {
            if (this.posY <= 380) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 380 && this.posY <= 390 && this.mapaY == 0) {
            if (this.posX <= 916) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                } else {
                    this.srcY = this.height * 3; //virar para cima
                }
            }
        }
    };
    this.mvCantina2 = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 350) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 348 && this.mapaY <= 355) {
            if (this.posX <= 633) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX >= 633 && this.posX <= 643 && this.posY >= 450 && this.mapaY <= 600) {
            if (this.mapaY <= 520) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 520 && this.mapaY <= 526) {
            if (this.posX <= 721) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posY >= 450 && this.posY <= 456 && this.posX >= 721 && this.posX <= 725 &&
                this.mapaY >= 520 && this.mapaY <= 750) {
            if (this.mapaY <= 730) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        //Bloco C
        if (this.posY >= 450 && this.posY <= 456 && this.mapaY >= 728 && this.mapaY <= 750) {
            if (this.posX >= 667) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 665 && this.posX <= 677 && this.posY >= 450 && this.posY <= 456 && this.mapaY >= 720) {
            if (this.mapaY <= 1065) {
                this.mapaY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY >= 1064 && this.mapaY <= 1074 && this.posY >= 450 && this.posY <= 456) {
            if (this.posX <= 754) {
                this.posX += this.velocidade;
                this.srcY = this.height * 2;//virar para direita
            } else {
                this.delay++;
                if (this.delay >= this.tempo) {
                    this.resetarMV();
                }
            }
        }
    };
    this.mvXerox = function () {
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 128) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 795 && this.posX <= 805) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 516 && this.posX <= 526) {
                this.aux = false;
            }
        }
        if (this.posY >= 212 && this.posY <= 222) {
            if (this.posX >= 399) {
                this.posX -= this.velocidade;
            }
        }
        if (this.posX >= 399 && this.posX <= 411) {
            if (this.posY <= 292) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 292 && this.posY <= 302) {
            if (this.posX > 296) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 122) {
            if (this.posX >= 795) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar esquerda
            }
        }
        if (this.posX >= 792 && this.posX <= 796) {
            if (this.posY <= 168) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 269) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= this.velocidade;
            this.srcY = this.height;//virar esquerda
            if (this.posX >= 601 && this.posX <= 604) {
                this.aux = false;
            }
        }
        if (this.posX >= 601 && this.posX <= 604) {
            if (this.posY <= 450) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            } else {
                if (this.mapaY <= 200) {
                    this.mapaY += this.velocidade;
                    this.srcY = 0;//virar para baixo
                }
            }
        }
        if (this.mapaY >= 199 && this.mapaY <= 206) {
            if (this.posX >= 415) {
                this.posX -= this.velocidade;
                this.srcY = this.height;//virar para esquerda
            }
        }
        if (this.posX >= 412 && this.posX <= 422 && this.mapaY >= 200 && this.mapaY <= 211) {
            if (this.posY <= 585) {
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
        if (this.posY <= 118 && this.posX == 900) {
            this.posY += this.velocidade;
        }
        if (this.posY >= 118 && this.posY <= 128) {
            if (this.posX >= 173) {
                this.posX -= this.velocidade;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX >= 173 && this.posX <= 183) {
            if (this.posY <= 480) {
                this.posY += this.velocidade;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY >= 480 && this.posY <= 490) {
            if (this.posX >= 63) {
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

