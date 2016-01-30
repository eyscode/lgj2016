import RainbowText from 'objects/RainbowText';
import Player from '../objects/entities/Player';


class GameState extends Phaser.State {

    init(param1, param2) {
        //this.g1 = param1;
        //this.g2 = param2;
        this.param1 = param1;
        this.param2 = param2;

    }

    preload() {
        this.game.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
        this.game.load.spritesheet('simbols', 'assets/menu/simbols.jpg', 300/4, 100);

    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';
        this.player1 = new Player(this.game,1,this.param1);
        this.player2 = new Player(this.game,2,this.param2);
        this.player1.setEnemy(this.player2);
        this.player2.setEnemy(this.player1);

        //Key detection user 1
        var attack1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        attack1User1Key.onDown.add(this.player1.attack1, this);
        var attack2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        attack2User1Key.onDown.add(this.player1.attack2, this);
        //var attack3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        //attack3User1Key.onDown.add(this.attack3User1, this);
        //var attack4User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.V);
        //attack4User1Key.onDown.add(this.attack4User1, this);

        //Key detection user 2
        var attack1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUM_LOCK);
        attack1User2Key.onDown.add(this.player2.attack1, this);
        var attack2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DIVIDE);
        attack2User2Key.onDown.add(this.player2.attack2, this);
        //var attack3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_MULTIPLY);
        //attack3User2Key.onDown.add(this.attack3User2, this);
        //var attack4User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_SUBTRACT);
        //attack4User2Key.onDown.add(this.attack4User2, this);
    }



    update() {
        this.player1.updatePlayer();
        this.player2.updatePlayer();
    }
}

export default GameState;
