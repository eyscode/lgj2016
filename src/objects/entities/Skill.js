export default class Skill {
    constructor(textureKey, matrix, type, obj) {
        this.textureKey = textureKey;
        this.matrix = matrix;
        this.active = false;
        this.type = type;
        this.obj = obj;
    }

    setOwner(owner) {
        this.owner = owner;
    }

    addToGame(game, x, y) {
        this.sprite = game.add.sprite(x, y, this.textureKey);
    }

    removeFromGame() {
        this.sprite.kill();
    }

    performAction(enemy) {
        console.log(`Skill used ${this.textureKey}`);
        if (this.type == 'A') {
            enemy.god.life -= this.obj.attackValue;
            console.log(`Value attack ${this.obj.attackValue}`);
        } else if (this.type == 'H') {
            this.owner.life += this.obj.healValue;
            console.log(`Value heal ${this.obj.healValue}`);
            console.log(`New life ${this.owner.life}`);
        } else if (this.type == 'D') {
            enemy.board.deleteRandom(this.obj.totalResources, this.obj.typeResources);
        } else if (this.type == 'S') {
            //TODO: implement special
        }
    }
}