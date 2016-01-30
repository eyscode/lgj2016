import RainbowText from 'objects/RainbowText';
import God from 'objects/sprites/God';

class GameState extends Phaser.State {

    preload() {
        this.game.load.atlasXML('octopus', 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');
    }

    create() {
        this.game.stage.backgroundColor = '#1873CE';
        let center = {x: this.game.world.centerX, y: this.game.world.centerY}
        let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
        text.anchor.set(0.5);
        let octopus = new God(this.game, 300, 200);
    }
}

export default GameState;
