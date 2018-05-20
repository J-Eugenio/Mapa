
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
    this.speed = 1;
    this.posX = 669;
    this.posY = 20;
    this.img = img;
    this.mapa = mapa;
    this.aux = false;
    this.animar = false;
    this.resetar = false;
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    //Metodos

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
    //COTINUAR
    this.mvLab2 = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 32) {
                this.posX -= 1;
            }
        }
        if (this.posX == 31) {
            if (this.posY <= 290) {
                this.posY += 1;
            }
        }
        if (this.posY == 291) {
            if (this.posX >= -32) {
                this.posX -= 1;
            }
        }
        if (this.posX == -33 && this.posY == 291) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvXerox = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 380) {
                this.aux = false;
            }
        }
        if (this.posY == 148) {
            if (this.posX >= 206) {
                this.posX -= 1;
            }
        }
        if (this.posX == 205) {
            if (this.posY <= 178) {
                this.posY += 1;
            }
        }
        if (this.posY == 179) {
            if (this.posX >= 175) {
                this.posX -= 1;
            }
        }
        if (this.posX == 174 && this.posY == 179) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvRecepCoord = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX >= 300) {
                this.posX -= 1;
            } else if (this.posY >= 404) {
                this.posY -= 1;
            }
        }
        if (this.posX == 299 && this.posY == 403 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvBanheiroM = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            }
        }
        if (this.posY == 91) {
            if (this.posX >= 474) {
                this.posX -= 1;
            }
        }
        if (this.posX == 473) {
            if (this.posY <= 128) {
                this.posY += 1;
            }
        }
        if (this.posY == 129) {
            if (this.posX >= 452) {
                this.posX -= 1;
            }
        }
        if (this.posX == 451) {
            if (this.posY <= 270) {
                this.posY += 1;
                this.srcY = this.height;//virar personagem para direita
            }
        }
        if (this.posY == 270) {
            if (this.posX <= 577) {
                this.posX += 1;
            }
        }
        if (this.posX == 578) {
            if (this.posY <= 307) {
                this.posY += 1;
            }
        }
        if (this.posX == 578 && this.posY == 308) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvBanheiroF = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            }
        }
        if (this.posY == 91) {
            if (this.posX >= 474) {
                this.posX -= 1;
            }
        }
        if (this.posX == 473) {
            if (this.posY <= 128) {
                this.posY += 1;
            }
        }
        if (this.posY == 129) {
            if (this.posX >= 452) {
                this.posX -= 1;
            }
        }
        if (this.posX == 451) {
            if (this.posY <= 270) {
                this.posY += 1;
                this.srcY = this.height;//virar personagem para direita
            }
        }
        if (this.posY == 270) {
            if (this.posX <= 623) {
                this.posX += 1;
            }
        }
        if (this.posX == 622) {
            if (this.posY <= 307) {
                this.posY += 1;
            }
        }
        if (this.posX == 622 && this.posY == 308) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvFinanceiro = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 339) {
            this.posY += 1;
            if (this.posY == 340) {
                this.srcY = this.height;
            }
        }
        if (this.posY == 340) {
            if (this.posX <= 430) {
                this.posX += 1;
            }
        }
        if (this.posX == 431) {
            if (this.posY <= 360) {
                this.posY += 1;
            }
        }
        if (this.posX == 431 && this.posY == 361) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvAcademico = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 402) {
            this.posY += 1;
            if (this.posY == 403) {
                this.srcY = this.height;
            }
        }
        if (this.posY == 403) {
            if (this.posX <= 430) {
                this.posX += 1;
            }
        }
        if (this.posX == 431 && this.posY == 403) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvDTI = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 402) {
            this.posY += 1;
            if (this.posY == 403) {
                //this.srcY = this.height;
            }
        }
        if (this.posY == 403) {
            if (this.posX >= 305) {
                this.posX -= 1;
            }
        }
        if (this.posX == 304) {
            if (this.posY <= 444) {
                this.posY += 1;
            }
        }
        if (this.posX == 304 && this.posY == 445) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvLab1 = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 402) {
            this.posY += 1;
            if (this.posY == 403) {
                //this.srcY = this.height;
            }
        }
        if (this.posY == 403) {
            if (this.posX >= 219) {
                this.posX -= 1;
            }
        }
        if (this.posX == 219) {
            if (this.posY <= 444) {
                this.posY += 1;
            }
        }
        if (this.posX == 219 && this.posY == 445) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvSalaProfessores = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 400) {
            this.posY += 1;
        }
        if (this.posY == 401) {
            if (this.posX >= 68) {
                this.posX -= 1;
            }
        }
        if (this.posX == 67 && this.posY == 401) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvNDE = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posY >= 158 && this.posY <= 400) {
            this.posY += 1;
        }
        if (this.posY == 401) {
            if (this.posX >= 68) {
                this.posX -= 1;
            }
        }
        if (this.posX == 67) {
            if (this.posY <= 475) {
                this.posY += 1;
            }
        }
        if (this.posX == 67 && this.posY == 476) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvCoordServSocial = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX >= 300) {
                this.posX -= 1;
            } else if (this.posY >= 420) {
                this.posY -= 1;
            } else if (this.posY == 419) {
                if (this.posX >= 270) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 269 && this.posY == 419 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCoordCienContabeis = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX >= 300) {
                this.posX -= 1;
            } else if (this.posY >= 465) {
                this.posY -= 1;
            } else if (this.posY == 464) {
                if (this.posX >= 270) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 269 && this.posY == 464 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCoordFisio = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX >= 300) {
                this.posX -= 1;
            } else if (this.posY >= 495) {
                this.posY -= 1;
            } else if (this.posY == 494) {
                if (this.posX >= 270) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 269 && this.posY == 494 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvCoordADM = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 400 && this.posY <= 530) {
                this.posX += 1;
            } else if (this.posY <= 530) {
                this.posY += 1;
            } else if (this.posY == 531) {
                if (this.posX >= 275) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 274 && this.posY == 531 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvCoordEmfermagem = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 400 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 530) {
                this.posY += 1;
                this.srcY = this.height - 51;//vira para esquerda
            } else if (this.posY == 531) {
                if (this.posX >= 286) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 285) {
            if (this.mapaY <= 149) {
                this.mapaY += 1;
            }
        }
        if (this.posX == 285 && this.posY == 531 && this.mapaY == 150) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvCoordPsicologia = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 400 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 530) {
                this.posY += 1;
                this.srcY = this.height - 51;//vira para esquerda
            } else if (this.posY == 531) {
                if (this.posX >= 300) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == 299) {
            if (this.mapaY <= 149) {
                this.mapaY += 1;
            }
        }
        if (this.posX == 299 && this.posY == 531 && this.mapaY == 150) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvNAPI = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 481 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 538) {
                this.posY += 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        if (this.posY == 539) {
            if (this.mapaY <= 149) {
                this.mapaY += 1;
            }
        }
        if (this.posX == 482 && this.posY == 539 && this.mapaY == 150) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }


    };
    this.mvCoordPedagogica = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
                this.srcY = this.height - 51;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 481 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 525) {
                this.posY += 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        if (this.posY == 526) {
            if (this.posX <= 519) {
                this.posX += 1;
            } else if (this.posX == 520) {
                if (this.mapaY <= 145) {
                    this.mapaY += 1;
                }
            }
        }
        if (this.posX == 520 && this.posY == 526 && this.mapaY == 146) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCoordEducFisica = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 481 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 525) {
                this.posY += 1;
            }
        }
        if (this.posY == 526) {
            if (this.posX <= 547) {
                this.posX += 1;
            } else if (this.posX == 548) {
                if (this.mapaY <= 150) {
                    this.mapaY += 1;
                }
            }
        }
        if (this.posX == 548 && this.posY == 526 && this.mapaY == 151) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCoordAnalise = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.mapaY == 124) {
            if (this.posX <= 481 && this.posY <= 530) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            } else if (this.posY <= 516) {
                this.posY += 1;
            } else if (this.posX <= 581) {
                this.posX += 1;
            }
        }
        if (this.posX == 582 && this.posY == 517 && this.mapaY == 124) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCantina2 = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 470) {
            this.mapaY += 1;
        }
        if (this.mapaY == 471) {
            if (this.posX <= 502) {
                this.posX += 1;
                this.srcY = this.height;//vira para direita
            }
        }
        if (this.posX == 503 && this.posY == 499 && this.mapaY == 471) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };
    this.mvSalaEstudosExterna = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 648) {
            if (this.posX <= 578) {
                this.posX += 1;
                this.srcY = this.height;// virar para direita
            } else if (this.posX == 579) {
                if (this.posY <= 539) {
                    this.posY += 1;
                }
            }
        }
        if (this.posX == 579 && this.posY == 540 && this.mapaY == 648) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvLabHardware = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= 175) {
                this.posX -= 1;
            } else if (this.posX == 174) {
                if (this.posY <= 539) {
                    this.posY += 1;
                }
            }
        }
        if (this.posX == 174 && this.posY == 540 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvBanheiroMBC = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= -20) {
                this.posX -= 1;
            } else if (this.posX == -21) {
                if (this.posY <= 539) {
                    this.posY += 1;
                }
            }
        }
        if (this.posX == -21 && this.posY == 540 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvBanheiroFBC = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= -64) {
                this.posX -= 1;
            } else if (this.posX == -65) {
                if (this.posY <= 539) {
                    this.posY += 1;
                }
            }
        }
        if (this.posX == -65 && this.posY == 540 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvMarketing = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }
        if (this.mapaY == 646) {
            if (this.posX >= 13) {
                this.posX -= 1;
            }
            if (this.posX == 12) {
                if (this.posY >= 474) {
                    this.posY -= 1;
                }
            }
            if (this.posY == 473) {
                if (this.posX >= -19) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == -20 && this.posY == 473 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvNexas = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }
        if (this.mapaY == 646) {
            if (this.posX >= 13) {
                this.posX -= 1;
            }
            if (this.posX == 12) {
                if (this.posY >= 431) {
                    this.posY -= 1;
                }
            }
            if (this.posY == 430) {
                if (this.posX >= -19) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == -20 && this.posY == 430 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCopa = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }
        if (this.mapaY == 646) {
            if (this.posX >= 13) {
                this.posX -= 1;
            }
            if (this.posX == 12) {
                if (this.posY >= 397) {
                    this.posY -= 1;
                }
            }
            if (this.posY == 398) {
                if (this.posX >= -19) {
                    this.posX -= 1;
                }
            }
        }
        if (this.posX == -20 && this.posY == 398 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvDeposito = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= 280) {
                this.posX -= 1;
            }
            if (this.posX == 279) {
                if (this.posY >= 460) {
                    this.posY -= 1;
                }
            }
        }
        if (this.posX == 279 && this.posY == 459 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvReprografia = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= 210) {
                this.posX -= 1;
            }
            if (this.posX == 209) {
                if (this.posY >= 460) {
                    this.posY -= 1;
                }
            }
        }
        if (this.posX == 209 && this.posY == 459 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }

    };
    this.mvCopex = function() {
        if (this.posY <= 60) {
            this.posY += 1;
        }
        if (this.posY == 61) {
            if (this.posX >= 495) {
                this.posX -= 1;
            }
        }
        if (this.posX == 494) {
            if (this.posY <= 90) {
                this.posY += 1;
            } else if (this.posY < 300) {
                this.aux = true;
            }
        }
        if (this.aux) {
            this.posY += 0.5;
            this.posX -= 1;
            if (this.posX == 360) {
                this.aux = false;
            }
        }
        if (this.posX == 360) {
            if (this.posY >= 158 && this.posY <= 496) {
                this.posY += 1;
            }
        }
        if (this.posY == 497 && this.posX >= 360 && this.posX <= 380 && this.mapaY == 0) {
            if (this.posX >= 360 && this.posX <= 379) {
                this.posX += 1;
                this.srcY = this.height;
            }
        }
        if (this.posX == 380 && this.posY == 497) {
            if (this.mapaY <= 123) {
                this.mapaY += 1;
            } else {
                this.posY += 1;
            }
        }
        if (this.posY == 498 && this.posX <= 446) {
            this.posX += 1;
        }
        if (this.posY == 498 && this.posX == 447) {//bloco C
            if (this.mapaY <= 265) {
                this.mapaY += 1;
            } else {
                this.posX -= 1;
                this.posY += 1;
            }
        }
        if (this.mapaY == 266) {
            if (this.posX >= 407) {
                this.posX -= 1;
                this.srcY = this.height - 51;//vira para esquerda
            }
        }
        //527
        if (this.posX == 406 && this.posY == 499 && this.mapaY <= 647) {
            this.mapaY += 1;
        }

        if (this.mapaY == 646) {
            if (this.posX >= 142) {
                this.posX -= 1;
            }
            if (this.posX == 141) {
                if (this.posY >= 460) {
                    this.posY -= 1;
                }
            }
        }
        if (this.posX == 141 && this.posY == 459 && this.mapaY == 646) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
            this.mapaY = 0;
        }
    };



    this.move = function() {

        if (this.mvRight) {
            this.posX += this.speed;
        } else
        if (this.mvLeft) {
            this.posX -= this.speed;
        } else
        if (this.mvUp) {
            this.posY -= this.speed;
        } else
        if (this.mvDown) {
            this.posY += this.speed;
            //this.mapaY += 1;
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

