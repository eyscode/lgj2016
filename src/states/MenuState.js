class MenuState extends Phaser.State {


    preload() {
        this.game.load.spritesheet('button_credits', 'assets/menu/button_credits.png', 200, 60);
        this.game.load.spritesheet('button_instructions', 'assets/menu/button_instructions.png', 200, 60);
        this.game.load.spritesheet('button_play', 'assets/menu/button_play.png', 200, 60);

        this.game.load.image('background','assets/menu/menu.jpg');
        this.game.load.image('logo','assets/menu/logo.png');
        this.game.load.image('well','assets/menu/well.png');
        this.game.load.audio('titlesound', ['audio/titulo.ogg']);
    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.button_play = this.game.add.button(this.game.world.centerX - 100, 350, 'button_play', this.actionOnClickPlay, this, 2, 1, 0);
        this.button_credits = this.game.add.button(this.game.world.centerX - 100, 500, 'button_credits', this.actionOnClickCredits, this, 2, 1, 0);
        this.button_instructions = this.game.add.button(this.game.world.centerX - 100, 425, 'button_instructions', this.actionOnClickInstructions, this, 2, 1, 0);


        this.well = this.game.add.sprite(400, 170, 'well');
        this.well.anchor.setTo(0.5, 0.5);
        this.logo = this.game.add.sprite(400, 200, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
        this.game.add.tween(this.logo.scale).to({x: 1.08, y: 1.08}, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.music = this.add.audio('titlesound',0.2, true);
        this.music.play();
    }

    update() {
        this.well.angle += 0.5;
    }

    actionOnClickCredits () {
        this.game.state.start('CreditsState', true, true);
    }
    actionOnClickInstructions () {
        this.game.state.start('InstructionsState', true, true);
    }
    actionOnClickPlay () {
        this.game.state.start('ChoiceCharacterState', true, true);
    }
}

export default MenuState;
