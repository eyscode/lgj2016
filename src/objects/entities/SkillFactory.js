import Skill from './Skill';

class SkillFactory {
    static createSkill(name) {
        if (name == 'FaithPunch') {
            return new Skill('FaithPunch', [[0, 0, 1], [0, 0, 1], [0, 0, 0]], 'A', {attackValue: 250});
        } else if (name == 'SaintHeal') {
            return new Skill('SaintHeal', [[0, 0, 2], [0, 2, 2], [0, 0, 0]], 'H', {healValue: 150});
        }
    }
}

export default SkillFactory;