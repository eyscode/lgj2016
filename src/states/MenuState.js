class MenuState extends Phaser.State {


    preload() {
        this.game.load.spritesheet('button_credits', 'assets/menu/button_credits.png', 200, 60);
        this.game.load.spritesheet('button_instructions', 'assets/menu/button_instructions.png', 200, 60);
        this.game.load.spritesheet('button_play', 'assets/menu/button_play.png', 200, 60);
        this.game.load.image('background','assets/menu/backgroundmenu.png');
        this.game.load.audio('titlesound', ['audio/titulo.ogg']);
    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.button_play = this.game.add.button(this.game.world.centerX - 100, 350, 'button_play', this.actionOnClickPlay, this, 2, 1, 0);
        this.button_credits = this.game.add.button(this.game.world.centerX - 100, 500, 'button_credits', this.actionOnClickCredits, this, 2, 1, 0);
        this.button_instructions = this.game.add.button(this.game.world.centerX - 100, 425, 'button_instructions', this.actionOnClickInstructions, this, 2, 1, 0);
        this.music = this.add.audio('titlesound',0.2, true);
        this.music.play();
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
