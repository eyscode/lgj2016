import God from './God';
import SkillFactory from '../entities/SkillFactory';

class God2 extends God {
    constructor(game, x, y) {
        super(game, x, y, "ro_Idle", "ro_Attack", "ro_Attack", "ro_Attack", "ro_Attack", 1000);
        this.addSkill('a1', SkillFactory.createSkill('FaithPunch'));
        this.addSkill('a2', SkillFactory.createSkill('SaintHeal'));
        this.addSkill('a3', SkillFactory.createSkill('DestroySinner'));
        this.addSkill('a4', SkillFactory.createSkill('FaithRitual'));
    }
}

export default God2;