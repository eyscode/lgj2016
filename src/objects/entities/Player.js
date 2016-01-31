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
        this.matrixInputs= [[false,false,false],[false,false,false],[false,false,false]];
        this.resource = 0;
        if (this.type == 1) {
            this.positionGod = [0, 150];
            this.positionTable = [100, this.game.world.centerY ];
        } else {
            this.positionGod = [350, 150];
            this.positionTable = [this.game.world.centerX + 100, this.game.world.centerY];
        }
        this.board = new Board(game, this.positionTable[0], this.positionTable[1]);
        switch (this.typeGod) {
            case 1:
                this.god = new God1(this.game, this.positionGod[0], this.positionGod[1]);
                break;
            case 2:
                this.god = new God2(this.game, this.positionGod[0], this.positionGod[1]);
                break;
            case 3:
                this.god = new God3(this.game, this.positionGod[0], this.positionGod[1]);
                break;
        }
        this.god.show2RandomSkills();
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
            this.god.show2RandomSkills();
        } else {
            console.log("You must build more pylons :v");
        }
    }

    attack2() {
        console.log(this.god.activeSkill2.name);
        if (this.board.compareMatrix(this.god.activeSkill2.matrix)) {
            this.god.attack2(this.enemy);
            this.god.show2RandomSkills();
        } else {
            console.log("You must build more pylons :v");
        }
    }

    refreshCels(){
        this.matrixInputs= [[false,false,false],[false,false,false],[false,false,false]];
    }

    pressResource(){
        var res = arguments[0];
        if(this.resource!=0){
            if(this.resource == res){
                this.resource = 0;
            }else{
                this.resource = res;
            }
        }else{
            this.resource = res;
            this.refreshCels();
        }
    }

    pressCel(){
        var cel = arguments[0];
        var col= (cel-1)%3;
        var row = (Math.floor((cel-1)/3))%3;
        if(this.matrixInputs[col][row]){
            this.board.destroyResource(cel);
            this.refreshCels();
        }else{
            if(this.resource!=0){
                this.board.insertResource(this.resource, cel);
                this.refreshCels();
                this.resource=0;
            }else{
                this.refreshCels();
                this.matrixInputs[col][row] = true;
            }
        }
    }

}
export default Player;