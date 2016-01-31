export default class LifeFlare {
    constructor(game, x, y) {
        this.emitter = game.add.emitter(x, y, 200, 100);
        this.emitter.makeParticles('lifeFlare');
        this.emitter.setRotation(0, 0);
        this.emitter.setAlpha(0.3, 0.8);
        this.emitter.setScale(0.5, 1);
        this.emitter.gravity = -150;
        this.emitter.start(false, 200, 1);
    }

    destroy() {
        this.emitter.destroy();
    }
}