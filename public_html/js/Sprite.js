
function Sprite(img, mapa) {
    //variaveis do mapa
    this.mapaX = -4;
    this.mapaY = 0;
    this.size = 635;
    //Variaveis do personagem
    this.srcX = this.srcY = 0;
    this.width = 119;
    this.height = 51;
    this.speed = 1;
    this.posX = 570;
    this.posY = 0;
    this.img = img;
    this.mapa = mapa;
    this.aux = false;
    this.resetar = false;
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    //Metodos

    //Desenha
    this.draw = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        //this.animacao();
    };
    this.drawMapa = function (ctx, width, height) {
        ctx.drawImage(this.mapa, this.mapaX, this.mapaY, this.size, this.size, 0, 0, width, height);
        //this.animacao();
    };

    //Mover
    this.resetarMV = function () {
        this.posX = 570;
        this.posY = 0;
        this.srcY = this.height - 51;
        this.mapaY = 0;
    };
    this.mvBiblioteca = function () {
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
        if (this.posY >= 158 && this.posY <= 476) {
            this.posY += 1;
            if (this.posY == 476) {
                this.srcY = this.height;
            }
        }
        if (this.posY == 477 && this.posX <= 600) {
            this.posX += 1;

        }
        if (this.posY == 477 && this.posX == 601) {
            this.posX = 570;
            this.posY = 0;
            this.srcY = this.height - 51;
        }

    };
    this.mvProUniFiesRH = function () {
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
            if (this.posX <= 576) {
                this.posX += 1;
                this.srcY = this.height;//virar personagem para direita
            }
        }

    };
    this.mvCantina = function () {
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
            if (this.posY <= 196) {
                this.posY += 1;
                this.srcY = this.height;//virar personagem para direita
            }
        }
        if (this.posY == 197) {
            if (this.posX <= 577) {
                this.posX += 1;
            }
        }
    };
    this.mvAuditorio = function () {
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
            if (this.posY <= 180) {
                this.posY += 1;
            }
        }
        if (this.posY == 181) {
            if (this.posX >= 310) {
                this.posX -= 1;
            }

        }

    };
    this.mvLab2 = function () {
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
    };
    this.mvXerox = function () {
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


    };
    this.mvRecepCoord = function () {
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

    };
    this.mvBanheiroM = function () {
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
    };
    this.mvBanheiroF = function () {
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
    };
    this.mvFinanceiro = function () {
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
    };
    this.mvAcademico = function () {
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
    };
    this.mvDTI = function () {
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
            if (this.posX >= 400) {
                this.posX -= 1;
            }
        }
    };

    this.move = function () {

        if (this.mvRight) {
            this.posX += this.speed;
            this.srcY = this.height;
        } else
        if (this.mvLeft) {
            this.posX -= this.speed;
            this.srcY = this.height - 51;
        } else
        if (this.mvUp) {
            this.posY -= this.speed;
        } else
        if (this.mvDown) {
            this.posY += this.speed;
            //this.mapaY += 1;
        }

    };


    this.animacao = function () {
        if (this.mvLeft || this.mvUp || this.mvRight || this.mvDown) {
            //Caso qualquer seta seja pressionada, o contador de animação é incrementado
            this.countAnim++;
            if (this.countAnim >= 31) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 1) * this.width;
        } else {
            //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
            this.srcX = 0;
            this.countAnim = 0;
        }
    };
}

