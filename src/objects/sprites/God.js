class God extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'octopus');
        this.animations.add('swim');
        this.animations.play('swim', 30, true);
        this.game.add.tween(this).to({y: 150}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.stage.addChild(this);
    }

    attack1() {
        this.loadTexture('octopus_a1');
        this.animations.add('swim');
        this.animations.play('swim', 30, true);
    }

    attack2() {
        this.loadTexture('octopus_a2');
        this.animations.add('swim');
        this.animations.play('swim', 30, true);
    }

}

export default God;