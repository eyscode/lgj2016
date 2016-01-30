import God1 from './../sprites/God1';
import God2 from './../sprites/God2';
import God3 from './../sprites/God3';
import Board from './Board';

class Player {



    constructor(game, type, typeGod){
        this.type = type;
        this.game  = game;
        this.typeGod = typeGod;
        this.faith = 0;
        if(this.type == 1){
            this.positionGod= [100, 50];
            this.positionTable= [100, this.game.world.centerY+100];
        }else{
            this.positionGod= [this.game.world.centerX+100, 50];
            this.positionTable= [this.game.world.centerX+100, this.game.world.centerY+100];
        }
        this.board = new Board(game, this.positionTable[0],this.positionTable[1]);
        switch (this.typeGod){
            case 1:
                this.god = new God1(this.game, this.positionGod[0],this.positionGod[1]);
                break;
            case 2:
                this.god = new God2(this.game, this.positionGod[0],this.positionGod[1]);
                break;
            case 3:
                this.god = new God3(this.game, this.positionGod[0],this.positionGod[1]);
                break;
        }
    }

    setEnemy(enemy){
        this.enemy = enemy;
    }



    updatePlayer(){
        this.god.update();

        //this.board.update();

    }

    attack1() {
        this.god.attack1(this.enemy); // TODO: change god reference to user reference
    }


    attack2() {
        this.god.attack2(this.enemy);
    }

    attack3() {
        this.god.attack3(this.enemy);
    }

    attack4() {
       this.god.attack4(this.enemy);
    }



}
export default Player;