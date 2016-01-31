class Board {

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.widthCel = 300 / 4;
        this.heightCel = 100;
        this.matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.sprites = [[null, null, null], [null, null, null], [null, null, null]];

    }

    logmatrix() {
        //console.log("board ", this.matrix);
    }

    insertResource(resource, num) {
        var col = (num - 1) % 3;
        var row = (Math.floor((num - 1) / 3)) % 3;
        if (this.matrix[col][row] == 0) {
            var sprite = this.game.add.sprite(this.x + this.widthCel * col, this.y + this.heightCel * row, 'simbols');
            sprite.frame = resource - 1;
            this.sprites[col][row] = sprite;
            this.matrix[col][row] = resource;
            this.logmatrix();
            return true;
        } else {
            return false;
        }

    }

    destroyResource(num) {
        var col = (num - 1) % 3;
        var row = (Math.floor((num - 1) / 3)) % 3;
        console.log("destroy ", col,row);
        var resource = this.matrix[col][row];
        if (resource != 0) {
            this.matrix[col][row] = 0;
            var sprite = this.sprites[col][row];
            sprite.destroy();
            this.sprites[col][row] = null;
            this.logmatrix();
            return true;
        } else {
            return false;
        }

    }

    compareMatrix(matrix) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (matrix[i][j] != 0) {
                    if (matrix[i][j] != this.matrix[i][j]) {
                        return false;
                    }
                }
            }
        }
        this.logmatrix();
        return true;

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