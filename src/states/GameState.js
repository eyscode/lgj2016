import RainbowText from 'objects/RainbowText';
import Player from '../objects/entities/Player';


class GameState extends Phaser.State {

    init(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;

    }

    preload() {
        this.game.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
        this.game.load.atlasXML('ro_Idle', 'assets/sprites/ro_Idle.png', 'assets/sprites/ro_Idle.xml');
        this.game.load.atlasXML('ro_Attack', 'assets/sprites/ro_Attack.png', 'assets/sprites/ro_Attack.xml');
        this.game.load.spritesheet('simbols', 'assets/menu/simbols.jpg', 300 / 4, 100);
        this.game.load.spritesheet('skills', 'assets/sprites/skills.jpg', 768 / 6, 512 / 4, 24);
    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';
        this.player1 = new Player(this.game, 1, this.param1);
        this.player2 = new Player(this.game, 2, this.param2);
        this.player1.setEnemy(this.player2);
        this.player2.setEnemy(this.player1);

        //Key detection user 1
        var attack1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        attack1User1Key.onDown.add(this.player1.attack1.bind(this.player1), this);
        var attack2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        attack2User1Key.onDown.add(this.player1.attack2.bind(this.player1), this);

        //Key detection user 2
        var attack1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DIVIDE);
        attack1User2Key.onDown.add(this.player2.attack1.bind(this.player2), this);
        var attack2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_MULTIPLY);
        attack2User2Key.onDown.add(this.player2.attack2.bind(this.player2), this);
    }



    update() {
        this.player1.updatePlayer();
        this.player2.updatePlayer();
    }
}

export default GameState;
