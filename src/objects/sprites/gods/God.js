class God extends Phaser.Sprite {
    constructor(game, x, y, textureKey, life, anim0, anim1, anim2, anim3, anim4, a1, a2, a3, p3) {
        super(game, x, y, textureKey);
        this.animations.add('normal', anim0, 30, true);
        this.animations.add('attack1', anim1, 30, true);
        this.animations.add('attack2', anim2, 30, true);
        this.animations.add('attack3', anim3, 30, true);
        this.animations.add('attack4', anim4, 30, true);
        this.animations.play('normal');
        this.game.add.tween(this).to({y: 150}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.stage.addChild(this);
        this.life = life;
        this.level = 0;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.p3 = p3;
    }

    restore() {
        this.animations.play('normal');
    }

    attack1(enemy) {
        if (this.lastEvent) {
            this.game.time.events.remove(this.lastEvent);
            this.lastEvent = null;
        }
        this.animations.play('attack1');
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.performAttack1(enemy);
    }

    attack2() {
        if (this.lastEvent) {
            this.game.time.events.remove(this.lastEvent);
            this.lastEvent = null;
        }
        this.animations.play('attack2');
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.performAttack2();
    }

    attack3(table) {
        if (this.lastEvent) {
            this.game.time.events.remove(this.lastEvent);
            this.lastEvent = null;
        }
        this.animations.play('attack3');
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.performAttack3(table);
    }

    attack4() {
        this.game.time.events.remove(this.lastEvent);
        this.animations.play('attack4');
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.performAttack4();
    }

    performAttack1(enemy) {
        enemy.life -= this.a1;
    }

    performAttack2() {
        this.life += this.a2;
    }

    performAttack3(table) {
        table.destroy(this.a3, this.p3);
    }

    performAttack4() {
    }

    update() {
        if (this.life <= 0) {
            console.log("ME MORI");
        }
    }

}

export default God;