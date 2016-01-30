class MenuState extends Phaser.State {


    preload() {
        this.game.load.spritesheet('button_credits', 'assets/menu/button_credits.png', 193, 71);
        this.game.load.spritesheet('button_instructions', 'assets/menu/button_instructions.png', 193, 71);
        this.game.load.spritesheet('button_play', 'assets/menu/button_play.png', 193, 71);
        this.game.load.image('background','assets/menu/starfield.jpg');

    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');

        this.button_credits = this.game.add.button(this.game.world.centerX - 95, 100, 'button_credits', this.actionOnClickCredits, this, 2, 1, 0);
        this.button_instructions = this.game.add.button(this.game.world.centerX - 95, 200, 'button_instructions', this.actionOnClickInstructions, this, 2, 1, 0);
        this.button_play = this.game.add.button(this.game.world.centerX - 95, 300, 'button_play', this.actionOnClickPlay, this, 2, 1, 0);
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
