import God from './God';
import SkillFactory from '../entities/SkillFactory';

class God2 extends God {
    constructor(game, direction, x, y) {
        super(game, direction, x, y, "postura_h", "ataque_h", "curar_h", "romper_h", "ataque_h", "daño_h");
        this.addSkill('a1', SkillFactory.createSkill('FaithPunch', game));
        this.addSkill('a2', SkillFactory.createSkill('SaintHeal', game));
        this.addSkill('a3', SkillFactory.createSkill('DestroySinner', game));
        this.addSkill('a4', SkillFactory.createSkill('FaithRitual', game));
    }
}

export default God2;