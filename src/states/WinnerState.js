class WinnerState extends Phaser.State {

    init(player, hero) {
        this.player = player;
        this.hero = hero;
    }

    preload() {
        this.game.load.image('background','assets/menu/backgroundmenu.png');
        this.game.load.spritesheet('button_play', 'assets/menu/button_play.png', 200, 60);
        this.game.load.spritesheet('winner1', 'assets/menu/player1winner.png', 250, 200);
        this.game.load.spritesheet('winner2', 'assets/menu/player2winner.png', 250, 200);

        this.game.load.atlasXML('hero1', 'assets/sprites/ro_Idle.png', 'assets/sprites/ro_Idle.xml');
        this.game.load.atlasXML('hero2', 'assets/sprites/postura_h.png', 'assets/sprites/postura_h.xml');

    }

    create() {
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.button_play = this.game.add.button(this.game.world.centerX - 100, 500, 'button_play', this.actionOnClickPlay, this, 2, 1, 0);
        if(this.player == 1){
            this.game.add.tileSprite(this.game.world.centerX-125, 320, 250, 200, 'winner1');
        }else{
            this.game.add.tileSprite(this.game.world.centerX-125, 320, 250, 200, 'winner2');
        }
        if(this.hero == 1){
            //this.game.add.tileSprite(this.game.world.centerX-125, 320, 250, 200, 'winner1');
            let animhero = this.game.add.sprite(this.game.world.centerX-200, 50, 'hero1');
            animhero.animations.add('default');
            animhero.animations.play('default', 30, true);

            //  Bob the octopus up and down with a tween
            this.game.add.tween(animhero).to({ y: 50 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        }else{
            let animhero = this.game.add.sprite(this.game.world.centerX-200, 50, 'hero2');
            animhero.animations.add('default');
            animhero.animations.play('default', 30, true);

            //  Bob the octopus up and down with a tween
            this.game.add.tween(animhero).to({ y: 50 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
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