import RainbowText from 'objects/RainbowText';
import God1 from 'objects/sprites/gods/God1';
import God2 from 'objects/sprites/gods/God2';
import God3 from 'objects/sprites/gods/God3';

class GameState extends Phaser.State {

    init(param1 , param2) {
        console.log("GAME STATE", param1, param2);
    }

    preload() {
        this.game.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';
        let center = {x: this.game.world.centerX, y: this.game.world.centerY}
        //let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
        //text.anchor.set(0.5);
        this.god1 = new God1(this.game, 100, 50);
        this.god2 = new God2(this.game, 550, 50);

        //Key detection user 1
        var attack1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        attack1User1Key.onDown.add(this.attack1User1, this);
        var attack2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        attack2User1Key.onDown.add(this.attack2User1, this);
        var attack3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        attack3User1Key.onDown.add(this.attack3User1, this);
        var attack4User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.V);
        attack4User1Key.onDown.add(this.attack4User1, this);

        //Key detection user 2
        var attack1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUM_LOCK);
        attack1User2Key.onDown.add(this.attack1User2, this);
        var attack2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DIVIDE);
        attack2User2Key.onDown.add(this.attack2User2, this);
        var attack3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_MULTIPLY);
        attack3User2Key.onDown.add(this.attack3User2, this);
        var attack4User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_SUBTRACT);
        attack4User2Key.onDown.add(this.attack4User2, this);
    }

    attack1User1() {
        this.god1.attack1(this.god2);
    }

    attack2User1() {
        this.god1.attack2();
    }

    attack3User1() {
        this.god1.attack3();
    }

    attack4User1() {
        this.god1.attack4();
    }

    attack1User2() {
        this.god2.attack1(this.god1);
    }

    attack2User2() {
        this.god2.attack2();
    }

    attack3User2() {
        this.god2.attack3();
    }

    attack4User2() {
        this.god2.attack4();
    }

    update() {
        this.god1.update();
        this.god2.update();
    }
}

export default GameState;
