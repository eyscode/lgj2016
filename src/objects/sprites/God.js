class God extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'octopus');
        this.animations.add('swim');
        this.animations.play('swim', 30, true);
        this.game.add.tween(this).to({y: 300}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.stage.addChild(this);
    }
}

export default God;