export default class LifeFlare {
    constructor(game, x, y) {
        this.game = game;
        this.fire = this.game.add.sprite(x, y, 'fire');
        this.fire.anchor.set(0.5);
        this.fire.animations.add('default');
        this.fire.animations.play('default', 30, true);
    }

    destroy() {
        this.fire.destroy();
    }
}