import God from './God';
import SkillFactory from '../entities/SkillFactory';

class God3 extends God {
    constructor(game, x, y) {
        super(game, x, y, "seacreatures", 1250,
            Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4),
            Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4),
            Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4),
            Phaser.Animation.generateFrameNames('seahorse', 0, 5, '', 4),
            Phaser.Animation.generateFrameNames('stingray', 0, 23, '', 4)
        );
        this.addSkill('a1', SkillFactory.createSkill('FaithPunch'));
        this.addSkill('a2', SkillFactory.createSkill('SaintHeal'));
    }
}

export default God3;