class God extends Phaser.Sprite {
    constructor(game, direction, x, y, textureKey0, textureKey1, textureKey2, textureKey3, textureKey4, life) {
        super(game, x, y, textureKey0);
        this.textureKey0 = textureKey0;
        this.textureKey1 = textureKey1;
        this.textureKey2 = textureKey2;
        this.textureKey3 = textureKey3;
        this.textureKey4 = textureKey4;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.animations.add('default');
        this.animations.play('default', 30, true);
        this.game.add.tween(this).to({y: 200}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.stage.addChild(this);
        this.life = life;
        this.level = 0;
        this.skills = {};
        this.scale.x *= direction;
        console.log(this.scale.x);
    }

    addSkill(key, skill) {
        this.skills[key] = skill;
        skill.setOwner(this);
    }

    restore() {
        this.loadTexture(this.textureKey0, 0);
        this.animations.play('default');
    }

    animate(key) {
        switch (key) {
            case 'a1':
                this.loadTexture(this.textureKey1, 0);
                this.animations.add('a1');
                this.animations.play('a1', 30, true);
                break;
            case 'a2':
                this.loadTexture(this.textureKey2, 0);
                this.animations.add('a2');
                this.animations.play('a2', 30, true);
                break;
            case 'a3':
                this.loadTexture(this.textureKey3, 0);
                this.animations.add('a3');
                this.animations.play('a3', 30, true);
                break;
            case 'a4':
                this.loadTexture(this.textureKey4, 0);
                this.animations.add('a4');
                this.animations.play('a4', 30, true);
                break;
        }
    }

    attack1(enemy) {
        if (this.lastEvent) {
            this.game.time.events.remove(this.lastEvent);
            this.lastEvent = null;
        }
        this.animate(this.activateSkillKey1);
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.activeSkill1.performAction(enemy);
    }

    attack2(enemy) {
        if (this.lastEvent) {
            this.game.time.events.remove(this.lastEvent);
            this.lastEvent = null;
        }
        this.animate(this.activateSkillKey2);
        this.lastEvent = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.restore, this);
        this.activeSkill2.performAction(enemy);
    }

    show2RandomSkills(x1, x2) {
        if (this.activeSkill1) {
            this.activeSkill1.removeFromGame();
        }
        if (this.activeSkill2) {
            this.activeSkill2.removeFromGame();
        }
        let skills = ['a1', 'a2', 'a3', 'a4'];
        this.activateSkillKey1 = skills[Math.floor(Math.random() * skills.length)];
        this.activateSkillKey2 = skills[Math.floor(Math.random() * skills.length)];
        this.activeSkill1 = this.skills[this.activateSkillKey1];
        this.activeSkill2 = this.skills[this.activateSkillKey2];
        this.activeSkill1.addToGame(this.game, x1, 520);
        this.activeSkill2.addToGame(this.game, x2, 520);
    }

    update() {
        if (this.life <= 0) {
            console.log("ME MORI");
        }
    }

}

export default God;