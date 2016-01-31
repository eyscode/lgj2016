export default class GodFlare {
    constructor(game, x, y) {
        var emitter = game.add.emitter(x, y, 200, 100);
        emitter.makeParticles('godFlare');
        emitter.setRotation(0, 0);
        emitter.setAlpha(0.3, 0.8);
        emitter.setScale(0.5, 1);
        emitter.gravity = -200;
        emitter.start(false, 5000, 100);
    }
}