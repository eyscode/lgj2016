import GameState from 'states/GameState';
import MenuState from 'states/MenuState';
import ChoiceCharacterState from 'states/ChoiceCharacterState';
import CreditsState from 'states/CreditsState';
import InstructionsState from 'states/InstructionsState';

class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, 'content', null);
        this.state.add('GameState', GameState, false);
        this.state.add('MenuState', MenuState, false);
        this.state.add('ChoiceCharacterState', ChoiceCharacterState, false);
        this.state.add('CreditsState', CreditsState, false);
        this.state.add('InstructionsState', InstructionsState, false);
        this.state.start('MenuState');
    }

}

new Game();
