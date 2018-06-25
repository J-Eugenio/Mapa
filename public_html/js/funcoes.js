
function Sprite(img, mapa) {
    //variaveis do mapa
    this.mapaX = -4;
    this.mapaY = 0;
    this.size = 635;
    //Variaveis do personagem
    this.srcX = 0;
    this.srcY = 0;
    this.width = 24;
    this.height = 32;
    this.velocidade = 1;
    //posição do personagem
    this.posX = 669;
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
        ctx.drawImage(this.mapa, this.mapaX, this.mapaY, this.size, this.size, 0, 0, width, height);
        //this.animacao();
    };

    //Mover
    this.resetarMV = function () {
        this.posX = 669;
        this.posY = 20;
        this.srcY = 0;
        this.mapaY = 0;
        this.aux = false;
        this.animar = true;
    };
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvNexas = function () {
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
        if(this.posX >= 376 &&  this.posX <= 382 && this.mapaY >= 645 && this.mapaY <= 649){
            if(this.posY >= 475){
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 378 && this.posX <= 384 && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
        if(this.posX >= 306 &&  this.posX <= 310 && this.mapaY >= 645 && this.mapaY <= 649){
            if(this.posY >= 475){
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 306 &&  this.posX <= 310 && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
        if (this.posY >= 514 && this.posY <= 519 && this.posX >= 540 && this.posX <= 547 && this.mapaY >= 124 && this.mapaY <= 265) {//bloco C
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
        if(this.posX >= 238 &&  this.posX <= 245 && this.mapaY >= 645 && this.mapaY <= 649){
            if(this.posY >= 475){
                this.posY -= this.velocidade;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX >= 238 &&  this.posX <= 245  && this.posY >= 470 && this.posY <= 476 && this.mapaY >= 532) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
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
}

