export default class GodFlare {
    constructor(game, x, y) {
        this.level = 0;
        this.emitter = game.add.emitter(x, y, 200, 100);
        this.emitter.makeParticles('godFlare');
        this.emitter.setRotation(0, 0);
        this.emitter.gravity = -200;
        this.levels = [
            [0, 0],
            [4000, 1, 0.1, 0.3, 0.6],
            [4000, 1, 0.2, 0.4, 0.7],
            [4000, 1, 0.3, 0.5, 0.8],
            [4000, 1, 0.3, 0.6, 0.9],
            [4000, 1, 0.3, 0.7, 1],
            [4000, 1, 0.3, 0.8, 1.1],
            [4000, 1, 0.3, 0.9, 1.3],
            [4000, 1, 0.3, 1, 1.5]
        ];
    }

    upgrade() {
        this.level++;
        this.emitter.kill();
        this.emitter.setAlpha(this.levels[this.level][2], this.levels[this.level][3]);
        this.emitter.setScale(0.5, this.levels[this.level][4]);
        this.emitter.start(false, this.levels[this.level][0], this.levels[this.level][1]);
    }

    downgrade() {
        this.level--;
        this.emitter.kill();
        this.emitter.setAlpha(this.levels[this.level][2], this.levels[this.level][3]);
        this.emitter.setScale(0.5, this.levels[this.level][4]);
        this.emitter.start(false, this.levels[this.level][0], this.levels[this.level][1]);
    }
}