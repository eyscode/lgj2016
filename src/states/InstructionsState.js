class InstructionsState extends Phaser.State {


    preload() {
        this.game.load.spritesheet('button_back', 'assets/menu/back_image.png', 171/3, 60);
        this.game.load.image('instructions','assets/menu/instructions.jpg');
    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'instructions');
        this.button_back = this.game.add.button(10, 10, 'button_back', this.backAction, this, 2, 1, 0);
    }

    backAction(){
        this.game.state.start('MenuState', true, true);
    }

}

export default InstructionsState;
