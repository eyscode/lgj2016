export default class GodFlare {
    constructor(game, x, y) {
        this.level = 0;
        this.game = game;
        this.x = x;
        this.y = y;
        this.emitter = this.game.add.emitter(x, y, 200, 100);
        this.emitter.makeParticles('godFlare');
        this.emitter.setRotation(0, 0);
        this.emitter.gravity = -200;
        this.levels = [
            [0, 0],
            [4000, 1, 0.1, 0.3, 0.6],
            [4000, 1, 0.3, 0.6, 0.9],
            [4000, 1, 0.3, 0.9, 1.3]
        ];
    }

    upgrade() {
        this.level++;
        if (this.emitter) {
            this.emitter.destroy();
        }
        this.emitter = this.game.add.emitter(this.x, this.y, 200, 100);
        this.emitter.makeParticles('godFlare');
        this.emitter.setRotation(0, 0);
        this.emitter.gravity = -200;
        this.emitter.setAlpha(this.levels[this.level][2], this.levels[this.level][3]);
        this.emitter.setScale(0.5, this.levels[this.level][4]);
        this.emitter.start(false, this.levels[this.level][0], this.levels[this.level][1]);
    }

    downgrade() {
        this.level--;
        if (this.emitter) {
            this.emitter.destroy();
        }
        if (this.level > 0) {
            this.emitter = this.game.add.emitter(this.x, this.y, 200, 100);
            this.emitter.makeParticles('godFlare');
            this.emitter.setRotation(0, 0);
            this.emitter.gravity = -200;
            this.emitter.setAlpha(this.levels[this.level][2], this.levels[this.level][3]);
            this.emitter.setScale(0.5, this.levels[this.level][4]);
            this.emitter.start(false, this.levels[this.level][0], this.levels[this.level][1]);
        } else {
            this.emitter = null;
        }
    }
}