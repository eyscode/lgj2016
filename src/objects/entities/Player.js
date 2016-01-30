import God1 from './../sprites/God1';
import God2 from './../sprites/God2';
import God3 from './../sprites/God3';
import Board from './Board';

class Player {
    constructor(game, type, typeGod) {
        this.type = type;
        this.game = game;
        this.typeGod = typeGod;
        this.faith = 0;
        this.direction = 1;
        if (this.type == 1) {
            this.direction = -1;
            this.positionGod = [0, 150];
            this.positionSkills = [100, 300];
            this.positionBoard = [100, this.game.world.centerY + 100];
        } else {
            this.positionGod = [350, 150];
            this.positionSkills = [500, 700];
            this.positionBoard = [this.game.world.centerX + 100, this.game.world.centerY + 100];
        }
        this.board = new Board(game, ...this.positionBoard);
        switch (this.typeGod) {
            case 1:
                this.god = new God1(this.game, this.direction, ...this.positionGod);
                break;
            case 2:
                this.god = new God2(this.game, this.direction, ...this.positionGod);
                break;
            case 3:
                this.god = new God3(this.game, this.direction, ...this.positionGod);
                break;
        }
        this.god.show2RandomSkills(...this.positionSkills);
    }

    setEnemy(enemy) {
        this.enemy = enemy;
    }

    updatePlayer() {
        this.god.update();
    }

    attack1() {
        console.log(this.god.activeSkill1.name);
        if (this.board.compareMatrix(this.god.activeSkill1.matrix)) {
            this.god.attack1(this.enemy);
            this.god.show2RandomSkills(...this.positionSkills);
        } else {
            console.log("You must build more pylons :v");
        }
    }

    attack2() {
        console.log(this.god.activeSkill2.name);
        if (this.board.compareMatrix(this.god.activeSkill2.matrix)) {
            this.god.attack2(this.enemy);
            this.god.show2RandomSkills(...this.positionSkills);
        } else {
            console.log("You must build more pylons :v");
        }
    }

}
export default Player;