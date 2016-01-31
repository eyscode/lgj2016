import Skill from './Skill';

class SkillFactory {
    static createSkill(name, game) {
        if (name == 'FaithPunch') {
            return new Skill('FaithPunch', 19, [[0, 0, 0], [2, 0, 0], [1, 0, 0]], 'A', {value: 2}, game);
        } else if (name == 'SaintHeal') {
            return new Skill('SaintHeal', 13, [[0, 0, 3], [0, 3, 3], [0, 0, 0]], 'H', {value: 2}, game);
        } else if (name == 'DestroySinner') {
            return new Skill('DestroySinner', 7, [[2, 2, 2], [0, 0, 0], [0, 0, 0]], 'D', {
                value: 2,
                typeResources: [1, 2, 3, 4]
            }, game);
        } else if (name == 'FaithRitual') {
            return new Skill('FaithRitual', 14, [[2, 0, 2], [0, 1, 0], [0, 0, 2]], 'A', {value: 5}, game);
        }
    }
}

export default SkillFactory;