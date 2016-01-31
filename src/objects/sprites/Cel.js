/**
 * Created by manu on 30/01/16.
 */
class Cel extends Phaser.Sprite {

    constructor(game, board, x, y, textureKey, resource) {
        super(game, x, y, textureKey);
        this.resource = resource;
        this.board = board;
        this.on = true;
        this.game.stage.addChild(this);
        this.frame = resource -1;
        console.log(this);
    }

    turnOffCel(){
        console.log("turnOffCel",this.on,this.resource+3);
        if(this.on){
            this.on = false;
            this.frame = this.resource+3;
            this.game.time.events.add(Phaser.Timer.SECOND * 5, this.turnOnCel, this);
        }
    }

    turnOnCel(){
        console.log("turnOnCel",this.on,this.resource-3);
        if(!this.on){
            this.on = true;
            this.frame = this.resource-1;
        }
    }
}
export default Cel;