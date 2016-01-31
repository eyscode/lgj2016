import God from './God';
import SkillFactory from '../entities/SkillFactory';

class God2 extends God {
    constructor(game, direction, x, y) {
        super(game, direction, x, y, "postura_h", "ataque_h", "curar_h", "romper_h", "curar_h", "daño_h");
        this.addSkill('a1', SkillFactory.createSkill('Punch2', game));
        this.addSkill('a2', SkillFactory.createSkill('Heal2', game));
        this.addSkill('a3', SkillFactory.createSkill('Destroy2', game));
        this.addSkill('a4', SkillFactory.createSkill('SuperHeal2', game));
    }
}

export default God2;