import RainbowText from 'objects/RainbowText';
import God from 'objects/sprites/God';

class GameState extends Phaser.State {

    init(param1 , param2) {
        console.log("GAME STATE", param1, param2);
    }

    preload() {
        this.game.load.atlasXML('octopus', 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');
        this.game.load.atlasXML('octopus_a1', 'assets/sprites/octopus_a1.png', 'assets/sprites/octopus.xml');
        this.game.load.atlasXML('octopus_a2', 'assets/sprites/octopus_a2.png', 'assets/sprites/octopus.xml');
    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';
        let center = {x: this.game.world.centerX, y: this.game.world.centerY}
        //let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
        //text.anchor.set(0.5);
        this.god1 = new God(this.game, 100, 100);
        this.god2 = new God(this.game, 550, 100);

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
        console.log("ATAQUE 1 USER 1");
        this.god1.attack1();
    }

    attack2User1() {
        console.log("ATAQUE 2 USER 1");
        this.god1.attack2();
    }

    attack3User1() {
        console.log("ATAQUE 3 USER 1");
    }

    attack4User1() {
        console.log("ATAQUE 4 USER 1");
    }

    attack1User2() {
        console.log("ATAQUE 1 USER 2");
    }

    attack2User2() {
        console.log("ATAQUE 2 USER 2");
    }

    attack3User2() {
        console.log("ATAQUE 3 USER 2");
    }

    attack4User2() {
        console.log("ATAQUE 4 USER 2");
    }

    update() {
    }
}

export default GameState;
