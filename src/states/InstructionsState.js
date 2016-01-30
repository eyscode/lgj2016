class InstructionsState extends Phaser.State {


    preload() {
        this.game.load.spritesheet('button_back', 'assets/menu/back_image.png', 50, 50);
        this.game.load.image('background','assets/menu/starfield.jpg');
    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.button_back = this.game.add.button(10, 10, 'button_back', this.backAction, this, 0, 0, 0);
    }

    backAction(){
        this.game.state.start('MenuState', true, true);
    }

}

export default InstructionsState;
