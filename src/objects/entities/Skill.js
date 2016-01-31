export default class Skill {
    constructor(name, frame, matrix, type, obj, game, duration) {
        this.name = name;
        this.frame = frame;
        this.matrix = matrix;
        this.type = type;
        this.obj = obj;
        this.game = game;
        this.duration = duration || 2;
    }

    setOwner(owner) {
        this.owner = owner;
    }

    addToGame(game, x, y) {

        this.graphics = game.add.graphics(x + 100, y + 10);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var c = this.matrix[i][j];
                switch (c) {
                    case 1:
                        this.graphics.lineStyle(0);
                        this.graphics.beginFill(0xFFFF0B);
                        this.graphics.drawCircle(j * 20 + 10, i * 20 + 10, 10);
                        this.graphics.endFill();
                        break;
                    case 2:
                        this.graphics.lineStyle(0);
                        this.graphics.beginFill(0xFF0000);
                        this.graphics.drawCircle(j * 20 + 10, i * 20 + 10, 10);
                        this.graphics.endFill();
                        break;
                    case 3:
                        this.graphics.lineStyle(0);
                        this.graphics.beginFill(0x04E449);
                        this.graphics.drawCircle(j * 20 + 10, i * 20 + 10, 10);
                        this.graphics.endFill();
                        break;
                    default:
                        break;
                }
            }
        }

        this.graphics.lineStyle(1, 0xFFFFFF);
        this.graphics.moveTo(20, 0);
        this.graphics.lineTo(20, 60);
        this.graphics.moveTo(40, 0);
        this.graphics.lineTo(40, 60);

        this.graphics.moveTo(0, 20);
        this.graphics.lineTo(60, 20);
        this.graphics.moveTo(0, 40);
        this.graphics.lineTo(60, 40);

        this.graphics.scale.x = 2;
        this.graphics.scale.y = 2;
        this.graphics.alpha = 0;

        var style = {font: "12px Arial", fill: "#ffffff", wordWrap: true, align: "center"};
        this.text = game.add.text(x + 120, y + 80, `${{
            'A': 'Attack',
            'H': 'Heal',
            'D': 'Destroy',
            'SA': 'Super Attack',
            'SH': 'Super Heal'
        }[this.type]} ${this.obj.value}`, style);
        this.text.anchor.set(0.5);
        this.text.scale.x = 2;
        this.text.scale.y = 2;
        this.text.alpha = 0;

        game.add.tween(this.graphics).to({alpha: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
        game.add.tween(this.graphics.scale).to({x: 1, y: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);

        game.add.tween(this.text).to({alpha: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
        game.add.tween(this.text.scale).to({x: 1, y: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);

        this.sprite = game.add.sprite(x + 30, y + 10, 'skills');
        this.sprite.frame = this.frame;
        this.sprite.scale.x = 2;
        this.sprite.scale.y = 2;
        this.sprite.alpha = 0;
        this.game.add.tween(this.sprite).to({alpha: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.sprite.scale).to({x: 1, y: 1}, 3000, Phaser.Easing.Quadratic.InOut, true);
    }

    removeFromGame() {
        let lastSprite = this.sprite;
        let lastGraphics = this.graphics;
        let lastText = this.text;
        this.game.add.tween(this.sprite).to({alpha: 0}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.graphics).to({alpha: 0}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.text).to({alpha: 0}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.sprite.scale).to({x: 2, y: 2}, 3000, Phaser.Easing.Quadratic.InOut, true);
        this.game.add.tween(this.graphics.scale).to({x: 2, y: 2}, 3000, Phaser.Easing.Quadratic.InOut, true);
        let tween = this.game.add.tween(this.text.scale).to({x: 2, y: 2}, 3000, Phaser.Easing.Quadratic.InOut, true);
        tween.onComplete.add(function () {
            lastSprite.destroy();
            lastGraphics.destroy();
            lastText.destroy();
        }, this);
    }

    performAction(enemy) {
        console.log(`Skill used ${this.name}`);
        if (this.type == 'A' || this.type == 'SA') {
            enemy.god.subtractLife(this.obj.value);
        } else if (this.type == 'H' || this.type == 'SH') {
            this.owner.addLife(this.obj.value);
        } else if (this.type == 'D') {
            enemy.board.deleteRandom(this.obj.value, this.obj.typeResources);
        }
    }
}