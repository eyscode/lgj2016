class WinnerState extends Phaser.State {

    init(player) {
        this.player = player;
    }

    preload() {
        this.game.load.image('background','assets/menu/backgroundmenu.png');
        this.game.load.spritesheet('button_play', 'assets/menu/button_play.png', 200, 60);
        this.game.load.spritesheet('winner1', 'assets/menu/player1winner.png', 250, 200);
        this.game.load.spritesheet('winner2', 'assets/menu/player2winner.png', 250, 200);

    }

    create() {
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.button_play = this.game.add.button(this.game.world.centerX - 100, 500, 'button_play', this.actionOnClickPlay, this, 2, 1, 0);
        if(this.player == 1){
            this.game.add.tileSprite(this.game.world.centerX-125, 400, 250, 200, 'winner1');
        }else{
            this.game.add.tileSprite(this.game.world.centerX-125, 400, 250, 200, 'winner2');
        }

    }


    actionOnClickPlay () {
        this.game.state.start('ChoiceCharacterState', true, true);
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

export default WinnerState;