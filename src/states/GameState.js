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
        this.game.load.atlasXML('ro_Full', 'assets/sprites/ro_Full.png', 'assets/sprites/ro_Full.xml');
        this.game.load.atlasXML('ro_Hit', 'assets/sprites/ro_Hit.png', 'assets/sprites/ro_Hit.xml');
        this.game.load.atlasXML('ro_Recharger', 'assets/sprites/ro_Recharger.png', 'assets/sprites/ro_Recharger.xml');
        this.game.load.atlasXML('ataque_h', 'assets/sprites/ataque_h.png', 'assets/sprites/ataque_h.xml');
        this.game.load.atlasXML('curar_h', 'assets/sprites/curar_h.png', 'assets/sprites/curar_h.xml');
        this.game.load.atlasXML('daño_h', 'assets/sprites/daño_h.png', 'assets/sprites/daño_h.xml');
        this.game.load.atlasXML('romper_h', 'assets/sprites/romper_h.png', 'assets/sprites/romper_h.xml');
        this.game.load.atlasXML('postura_h', 'assets/sprites/postura_h.png', 'assets/sprites/postura_h.xml');
        this.game.load.spritesheet('simbols', 'assets/menu/simbols.png', 252 / 4, 63, 8);
        this.game.load.spritesheet('skills', 'assets/sprites/skills.png', 768 / 6, 512 / 4, 24);
        this.game.load.image('interfase', 'assets/menu/interfase.jpg');
        this.game.load.image('godFlare', 'assets/particles/blue.png');
        this.game.load.image('lifeFlare', 'assets/particles/yellow.png');
        this.game.load.audio('nox1', ['audio/nox1.mp3']);
    }

    create() {
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'interfase');

        this.player1 = new Player(this.game, 1, this.param1);
        this.player2 = new Player(this.game, 2, this.param2);
        this.player1.setEnemy(this.player2);
        this.player2.setEnemy(this.player1);

        // Cheats
        var cheat1 = this.game.input.keyboard.addKey(Phaser.Keyboard.N);
        cheat1.onDown.add(this.player1.playN.bind(this.player1), this);
        cheat1.onDown.add(this.player2.playN.bind(this.player2), this);

        //Key detection user 1
        var attack1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        attack1User1Key.onDown.add(this.player1.attack1.bind(this.player1), this);
        var attack2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.B);
        attack2User1Key.onDown.add(this.player1.attack2.bind(this.player1), this);
        var attack3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Y);
        attack3User1Key.onDown.add(this.player1.attack3.bind(this.player1), this);

        //cels
        var cel1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        cel1User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 1), this);
        var cel2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
        cel2User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 2), this);
        var cel3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
        cel3User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 3), this);
        var cel4User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        cel4User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 4), this);
        var cel5User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        cel5User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 5), this);
        var cel6User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
        cel6User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 6), this);
        var cel7User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        cel7User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 7), this);
        var cel8User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
        cel8User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 8), this);
        var cel9User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.V);
        cel9User1Key.onDown.add(this.player1.pressCel.bind(this.player1, 9), this);

        //resources
        var r1User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
        r1User1Key.onDown.add(this.player1.pressResource.bind(this.player1, 1), this);
        var r2User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        r2User1Key.onDown.add(this.player1.pressResource.bind(this.player1, 2), this);
        var r3User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.T);
        r3User1Key.onDown.add(this.player1.pressResource.bind(this.player1, 3), this);
        var r4User1Key = this.game.input.keyboard.addKey(Phaser.Keyboard.G);
        r4User1Key.onDown.add(this.player1.pressResource.bind(this.player1, 4), this);


        //Key detection user 2
        var attack1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
        attack1User2Key.onDown.add(this.player2.attack1.bind(this.player2), this);
        var attack2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DECIMAL);
        attack2User2Key.onDown.add(this.player2.attack2.bind(this.player2), this);
        var attack3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.PAGE_UP);
        attack3User2Key.onDown.add(this.player2.attack3.bind(this.player2), this);

        //cels
        var cel1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_7);
        cel1User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 1), this);
        var cel2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8);
        cel2User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 2), this);
        var cel3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_9);
        cel3User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 3), this);
        var cel4User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4);
        cel4User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 4), this);
        var cel5User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5);
        cel5User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 5), this);
        var cel6User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6);
        cel6User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 6), this);
        var cel7User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
        cel7User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 7), this);
        var cel8User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
        cel8User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 8), this);
        var cel9User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);
        cel9User2Key.onDown.add(this.player2.pressCel.bind(this.player2, 9), this);

        //resources
        var r1User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_DIVIDE);
        r1User2Key.onDown.add(this.player2.pressResource.bind(this.player2, 1), this);
        var r2User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_MULTIPLY);
        r2User2Key.onDown.add(this.player2.pressResource.bind(this.player2, 2), this);
        var r3User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_SUBTRACT);
        r3User2Key.onDown.add(this.player2.pressResource.bind(this.player2, 3), this);
        var r4User2Key = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_ADD);
        r4User2Key.onDown.add(this.player2.pressResource.bind(this.player2, 4), this);
    }


    update() {
        this.player1.updatePlayer();
        this.player2.updatePlayer();
    }
}

export default GameState;
