
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
    //posição do personagem
    this.posX = 669;
    this.posY = 20;
    this.img = img;
    this.mapa = mapa;
    this.aux = false;
    this.animar = false;
    this.resetar = false;
    //Desenha
    this.draw = function(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        this.animacao();
    };
    this.drawMapa = function(ctx, width, height) {
        ctx.drawImage(this.mapa, this.mapaX, this.mapaY, this.size, this.size, 0, 0, width, height);
        //this.animacao();
    };

    //Mover
    this.resetarMV = function() {
        this.posX = 669;
        this.posY = 20;
        this.srcY = 0;
        this.mapaY = 0;
        this.aux = false;
        this.animar = true;
    };
    this.mvBiblioteca = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 485) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 485.5) {
            if (this.posX <= 699) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX == 700 && this.posY == 485.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
        }
    };
    this.mvProUniFiesRH = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 105) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY == 106) {
            if (this.posX <= 669) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX == 670 && this.posY == 106) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
        }

    };
    this.mvXerox = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 484) {
                this.aux = false;
            }
        }
        if (this.posY == 166.5) {
            if (this.posX >= 308) {
                this.posX -= 1;
            }
        }
        if (this.posX == 307) {
            if (this.posY <= 191.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 192.5) {
            if (this.posX >= 274) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 273 && this.posY == 192.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCantina = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 105) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY == 106) {
            if (this.posX >= 578) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 577) {
            if (this.posY <= 214) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 215) {
            if (this.posX <= 682) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX == 683) {
            if (this.posY >= 187) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }

        if (this.posX == 683 && this.posY == 186) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvAuditorio = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 197.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 198.5) {
            if (this.posX >= 403) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 402 && this.posY == 198.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }

    };
    this.mvLab2 = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 133) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 132) {
            if (this.posY <= 310) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 311) {
            if (this.posX >= 77) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 76 && this.posY == 311) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvRecepCoord = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 125) {
            if (this.posX >= 391) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 390) {
            if (this.posY >= 418) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX == 390 && this.posY == 417.5 && this.mapaY == 125) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvBanheiroM = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 105) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY == 106) {
            if (this.posX >= 578) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 577) {
            if (this.posY <= 286) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 286) {
            if (this.posX <= 682) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX == 681) {
            if (this.posY <= 308) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 681 && this.posY == 309) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvBanheiroF = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 105) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.posY == 106) {
            if (this.posX >= 578) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 577) {
            if (this.posY <= 286) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 286) {
            if (this.posX <= 718) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar direita
            }
        }
        if (this.posX == 719) {
            if (this.posY <= 308) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 719 && this.posY == 309) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvFinanceiro = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 358.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 358.5) {
            if (this.posX <= 531) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 532) {
            if (this.posY <= 381.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 532 && this.posY == 382.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvAcademico = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 418.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 419.5) {
            if (this.posX <= 517) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 518 && this.posY == 419.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvDTI = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 415.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 416.5) {
            if (this.posX >= 405) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 406) {
            if (this.posY <= 442.5) {
                this.posY += 1;
                his.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 406 && this.posY == 443.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvLab1 = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 415.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 416.5) {
            if (this.posX >= 318) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 319) {
            if (this.posY <= 442.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 319 && this.posY == 443.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvSalaProfessores = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 415.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 416.5) {
            if (this.posX >= 168) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 167 && this.posY == 416.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvNDE = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 415.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 416.5) {
            if (this.posX >= 168) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 167) {
            if (this.posY <= 487.5) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 167 && this.posY == 488.5) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordServSocial = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 125) {
            if (this.posX >= 391) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 390) {
            if (this.posY >= 432) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY == 431.5 && this.mapaY == 125) {
            if (this.posX >= 365) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 364 && this.posY == 431.5 && this.mapaY == 125) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }

    };
    this.mvCoordCienContabeis = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 125) {
            if (this.posX >= 391) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 390) {
            if (this.posY >= 477) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY == 476.5 && this.mapaY == 125) {
            if (this.posX >= 365) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 364 && this.posY == 476.5 && this.mapaY == 125) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }

    };
    this.mvCoordFisio = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 125) {
            if (this.posX >= 391) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 390) {
            if (this.posY >= 507) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posY == 506.5 && this.mapaY == 125) {
            if (this.posX >= 365) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 364 && this.posY == 506.5 && this.mapaY == 125) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordADM = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 499) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 500 && this.posY == 513.5) {
            if (this.mapaY <= 155) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 156) {
            if (this.posX >= 359) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 358 && this.posY == 513.5 && this.mapaY == 156) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordEmfermagem = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 499) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 500 && this.posY == 513.5) {
            if (this.mapaY <= 155) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 156) {
            if (this.posX >= 382) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 381 && this.mapaY == 156) {
            if (this.posY <= 538) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 381 && this.posY == 538.5 && this.mapaY == 156) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordPsicologia = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 499) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 500 && this.posY == 513.5) {
            if (this.mapaY <= 155) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 156) {
            if (this.posX >= 405) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 406 && this.mapaY == 156) {
            if (this.posY <= 538) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 406 && this.posY == 538.5 && this.mapaY == 156) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvNAPI = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 577) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 578 && this.posY == 513.5) {
            if (this.mapaY <= 145) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 146) {
            if (this.posX <= 589) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 590 && this.mapaY == 146) {
            if (this.posY <= 544) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 590 && this.posY == 544.5 && this.mapaY == 146) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordPedagogica = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 577) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 578 && this.posY == 513.5) {
            if (this.mapaY <= 145) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 146) {
            if (this.posX <= 617) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 618 && this.mapaY == 146) {
            if (this.posY <= 544) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 618 && this.posY == 544.5 && this.mapaY == 146) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordEducFisica = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 577) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 578 && this.posY == 513.5) {
            if (this.mapaY <= 145) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 146) {
            if (this.posX <= 642) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 643 && this.mapaY == 146) {
            if (this.posY <= 560) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 643 && this.posY == 560.5 && this.mapaY == 146) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCoordAnalise = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 577) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 578 && this.posY == 513.5) {
            if (this.mapaY <= 145) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 146) {
            if (this.posX <= 671) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posX == 672 && this.posY == 513.5 && this.mapaY == 146) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCantina2 = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 472) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 473 && this.posY == 514.5) {
            if (this.posX <= 593) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita

            }
        }
        if (this.posX == 594 && this.posY == 514.5 && this.mapaY == 473) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvSalaEstudosExterna = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650) {
            if (this.posX <= 676) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.mapaY == 650 && this.posX == 677) {
            if (this.posY <= 550) {
                this.posY += 1;
                this.srcY = 0;
            }
        }
        if (this.posX == 677 && this.posY == 550.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvLabHardware = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 275) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY == 650 && this.posX == 274) {
            if (this.posY <= 550) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 274 && this.posY == 550.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvBanheiroMBC = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 74) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY == 650 && this.posX == 74) {
            if (this.posY <= 550) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 74 && this.posY == 550.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvBanheiroFBC = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 36) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.mapaY == 650 && this.posX == 36) {
            if (this.posY <= 550) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posX == 36 && this.posY == 550.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvMarketing = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 114) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 113 && this.mapaY == 650) {
            if (this.posY >= 489) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.mapaY == 650 && this.posY == 488.5) {
            if (this.posX >= 77) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 76 && this.posY == 488.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvNexas = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 114) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 113 && this.mapaY == 650) {
            if (this.posY >= 444) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.mapaY == 650 && this.posY == 444.5) {
            if (this.posX >= 77) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 76 && this.posY == 444.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCopa = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 114) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 113 && this.mapaY == 650) {
            if (this.posY >= 410) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.mapaY == 650 && this.posY == 410.5) {
            if (this.posX >= 77) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 76 && this.posY == 410.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvDeposito = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 378) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 377 && this.mapaY == 650) {
            if (this.posY >= 478) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX == 377 && this.posY == 477.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }

    };
    this.mvReprografia = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 307) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 306 && this.mapaY == 650) {
            if (this.posY >= 478) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX == 306 && this.posY == 477.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };
    this.mvCopex = function() {
        if (this.posY <= 80) {
            this.posY += 1;
        }
        if (this.posY == 81) {
            if (this.posX >= 596) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar esquerda
            }
        }
        if (this.posX == 595) {
            if (this.posY <= 110) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            this.srcY = this.height * 2;//virar esquerda
            if (this.posX == 460) {
                this.aux = false;
            }
        }
        if (this.posX == 460) {
            if (this.posY <= 512) {
                this.posY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 512.5 && this.mapaY <= 125) {
            if (this.posX <= 473) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            } else {
                this.posY += 1;
            }
        }
        if (this.posX == 474) {
            if (this.mapaY <= 124) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.posY == 513.5 && this.mapaY == 124) {
            if (this.posX <= 542) {
                this.posX += 1;
                this.srcY = this.height * 3;//virar para direita
            }
        }
        if (this.posY == 513.5 && this.posX == 543) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.posY == 514.5 && this.mapaY == 266) {
            if (this.posX >= 503) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para direita
            }
        }
        if (this.posX == 502 && this.posY == 514.5) {
            if (this.mapaY <= 649) {
                this.mapaY += 1;
                this.srcY = 0;//virar para baixo
            }
        }
        if (this.mapaY == 650 && this.posY == 514.5) {
            if (this.posX >= 240) {
                this.posX -= 1;
                this.srcY = this.height * 2;//virar para esquerda
            }
        }
        if (this.posX == 240 && this.mapaY == 650) {
            if (this.posY >= 478) {
                this.posY -= 1;
                this.srcY = this.height; //virar para cima
            }
        }
        if (this.posX == 240 && this.posY == 477.5 && this.mapaY == 650) {
            this.posX = 669;
            this.posY = 20;
            this.srcY = 0;
            this.mapaY = 0;
            this.aux = false;
            this.animar = true;
        }
    };

    this.animacao = function() {
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

