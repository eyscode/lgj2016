import Cel from './../sprites/Cel';
class Board {

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.widthCel = 252 / 4;
        this.heightCel = 63;
        this.spritenumber=0;
        this.matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.sprites = [[null, null, null], [null, null, null], [null, null, null]];
        this.sprite1 = this.game.add.sprite(this.x - 88, this.y + 5 , 'simbols');
        this.sprite1.frame = 4;
        this.sprite2 = this.game.add.sprite(this.x - 88, this.y + 100 , 'simbols');
        this.sprite2.frame = 5;
        this.sprite3 = this.game.add.sprite(this.x + 210, this.y + 5 , 'simbols');
        this.sprite3.frame = 6;
        this.sprite4 = this.game.add.sprite(this.x + 210, this.y + 100 , 'simbols');
        this.sprite4.frame = 7;
        this.createTimeAleatory();
    }

    logmatrix() {
        //console.log("board ", this.matrix);
    }

    insertResource(resource, num) {
        if(resource == this.spritenumber){
            var col = (num - 1) % 3;
            var row = (Math.floor((num - 1) / 3)) % 3;
            console.log("introduce ", col,row);
            if (this.matrix[row][col] == 0) {
                var sprite = new Cel(this.game,this, this.x + this.widthCel * col, this.y + this.heightCel * row, 'simbols', resource);
                this.sprites[row][col] = sprite;
                this.matrix[row][col] = resource;
                this.onNewTimeResources(resource);
                return true;
            } else {
                return false;
            }
        }
    }

    onNewTimeResources(resource){
        switch (resource){
            case 1:
                this.sprite1.frame = 4;
                this.spritenumber = 0;
                break;
            case 2:
                this.sprite2.frame = 5;
                this.spritenumber = 0;
                break;
            case 3:
                this.sprite3.frame = 6;
                this.spritenumber = 0;
                break;
            case 4:
                this.sprite4.frame = 7;
                this.spritenumber = 0;
                break;
        }
        this.createTimeAleatory();
    }

    createTimeAleatory(){
        if(this.spritenumber==0){
            this.game.time.events.add(Phaser.Timer.SECOND * 3, this.createResourceAleatory, this);
        }

    }

    createResourceAleatory(){
        var num = this.randomNumber(4,1);
        console.log(num);
        this.spritenumber = 0;
        this.sprite1.frame = 4;
        this.sprite2.frame = 5;
        this.sprite3.frame = 6;
        this.sprite4.frame = 7;
        switch (num){
            case 1:
                this.sprite1.frame = 0;
                this.spritenumber = 1;
                break;
            case 2:
                this.sprite2.frame = 1;
                this.spritenumber = 2;
                break;
            case 3:
                this.sprite3.frame = 2;
                this.spritenumber = 3;
                break;
            case 4:
                this.sprite4.frame = 3;
                this.spritenumber = 4;
                break;
        }
    }

    randomNumber(maximum,minimum){
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    destroyResource(num) {
        var col = (num - 1) % 3;
        var row = (Math.floor((num - 1) / 3)) % 3;
        console.log("destroy ", row,col);
        var resource = this.matrix[row][col];
        if (resource != 0) {
            this.matrix[row][col] = 0;
            var sprite = this.sprites[row][col];
            sprite.destroy();
            this.sprites[row][col] = null;
            this.logmatrix();
            return true;
        } else {
            return false;
        }

    }

    compareMatrix(matrix) {
        var m = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (matrix[i][j] != 0) {
                    if (matrix[i][j] != this.matrix[i][j]) {
                        return false;
                    }else{
                        if(this.sprites[i][j].on){
                            m.push([i,j])
                        }else{
                            return false;
                        }

                    }

                }
            }
        }
        for (var w = 0; w < m.length; w++) {
            var item = m[w];
            var ss = this.sprites[item[0]][item[1]];
            ss.turnOffCel();
        }
        return true;
    }

    returnNormal(){

    }

    deleteRandom(numresource, allow) {
        var position_allow = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j] != 0) {
                    for (var z = 0; z < allow.length; z++) {
                        if (this.matrix[i][j] == allow[z]) {
                            position_allow.push([i, j]);
                        }
                    }

                }
            }
        }
        position_allow = this.shuffle(position_allow);
        var delete_number = Math.min(position_allow.length, numresource);
        for (var y = 0; y < delete_number; y++) {
            var position = position_allow[y];
            this.matrix[position[0]][position[1]] = 0;
            var sprite = this.sprites[position[0]][position[1]];
            sprite.kill();
            this.sprites[position[0]][position[1]] = null;
        }
        this.logmatrix();
    }


    shuffle(array) {
        for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
        return array;
    }
}
export default Board;