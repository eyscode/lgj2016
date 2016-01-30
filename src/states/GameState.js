import RainbowText from 'objects/RainbowText';
import God1 from '../objects/sprites/God1';
import God2 from '../objects/sprites/God2';
import God3 from '../objects/sprites/God3';

class GameState extends Phaser.State {

    init(param1, param2) {
        this.g1 = param1;
        this.g2 = param2;
    }

    preload() {
        this.game.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';

        if (this.g1 == 1) {
            this.god1 = new God1(this.game, 100, 50);
        } else if (this.g1 == 2) {
            this.god1 = new God2(this.game, 100, 50);
        } else if (this.g1 == 3) {
            this.god1 = new God3(this.game, 100, 50);
        }
        if (this.g2 == 1) {
            this.god2 = new God1(this.game, 550, 50);
        } else if (this.g2 == 2) {
            this.god2 = new God2(this.game, 550, 50);
        } else if (this.g2 == 3) {
            this.god2 = new God3(this.game, 550, 50);
        }

        //Key detection user 1
        var attack1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        attack1User1Key.onDown.add(this.attack1User1, this);
        var attack2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        attack2User1Key.onDown.add(this.attack2User1, this);
        //var attack3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        //attack3User1Key.onDown.add(this.attack3User1, this);
        //var attack4User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.V);
        //attack4User1Key.onDown.add(this.attack4User1, this);

        //Key detection user 2
        var attack1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUM_LOCK);
        attack1User2Key.onDown.add(this.attack1User2, this);
        var attack2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DIVIDE);
        attack2User2Key.onDown.add(this.attack2User2, this);
        //var attack3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_MULTIPLY);
        //attack3User2Key.onDown.add(this.attack3User2, this);
        //var attack4User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_SUBTRACT);
        //attack4User2Key.onDown.add(this.attack4User2, this);
    }

    attack1User1() {
        this.god1.attack1(this.god2);
    }

    attack2User1() {
        this.god1.attack2(this.god2);
    }

    //attack3User1() {
    //    this.god1.attack3();
    //}
    //
    //attack4User1() {
    //    this.god1.attack4();
    //}

    attack1User2() {
        this.god2.attack1(this.god1);
    }

    attack2User2() {
        this.god2.attack2(this.god1);
    }

    //attack3User2() {
    //    this.god2.attack3();
    //}
    //
    //attack4User2() {
    //    this.god2.attack4();
    //}

    update() {
        this.god1.update();
        this.god2.update();
    }
}

export default GameState;
