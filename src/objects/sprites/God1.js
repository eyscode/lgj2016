import God from './God';
import SkillFactory from '../entities/SkillFactory';

class God1 extends God {
    constructor(game, direction, x, y) {
        super(game, direction, x, y, "ro_Idle", "ro_Attack", "ro_Recharger", "ro_Full", "ro_Attack", "ro_Hit");
        this.addSkill('a1', SkillFactory.createSkill('Punch1', game));
        this.addSkill('a2', SkillFactory.createSkill('Heal1', game));
        this.addSkill('a3', SkillFactory.createSkill('Destroy1', game));
        this.addSkill('a4', SkillFactory.createSkill('SuperPunch1', game));
    }
}

export default God1;