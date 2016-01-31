export default class Skill {
    constructor(name, frame, matrix, type, obj, game) {
        this.name = name;
        this.frame = frame;
        this.matrix = matrix;
        this.type = type;
        this.obj = obj;
        this.game = game;
    }

    setOwner(owner) {
        this.owner = owner;
    }

    addToGame(game, x, y) {
        this.sprite = game.add.sprite(x, y, 'skills');
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.frame = this.frame;
        this.sprite.scale.x = 2;
        this.sprite.scale.y = 2;
        this.sprite.alpha = 0;
        this.game.add.tween(this.sprite).to({alpha: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.sprite.scale).to({x: 1, y: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
    }

    removeFromGame() {
        let last = this.sprite;
        this.game.add.tween(this.sprite).to({alpha: 0}, 3000, Phaser.Easing.Quadratic.InOut, true);
        let tween = this.game.add.tween(this.sprite.scale).to({x: 2, y: 2}, 3000, Phaser.Easing.Quadratic.InOut, true);
        tween.onComplete.add(function () {
            last.destroy();
        }, this);
    }

    performAction(enemy) {
        console.log(`Skill used ${this.name}`);
        if (this.type == 'A') {
            enemy.god.subtractLife(this.obj.value);
        } else if (this.type == 'H') {
            this.owner.addLife(this.obj.value);
        } else if (this.type == 'D') {
            enemy.board.deleteRandom(this.obj.value, this.obj.typeResources);
        }
    }
}