import Skill from './Skill';

class SkillFactory {
    static createSkill(name) {
        if (name == 'FaithPunch') {
            return new Skill('FaithPunch', 19, [[0, 0, 1], [0, 0, 1], [0, 0, 0]], 'A', {attackValue: 250});
        } else if (name == 'SaintHeal') {
            return new Skill('SaintHeal', 13, [[0, 0, 2], [0, 2, 2], [0, 0, 0]], 'H', {healValue: 150});
        } else if (name == 'DestroySinner') {
            return new Skill('DestroySinner', 7, [[3, 3, 3], [0, 0, 0], [0, 0, 0]], 'D', {
                totalResources: 2,
                typeResources: [1, 2]
            });
        } else if (name == 'FaithRitual') {
            return new Skill('FaithRitual', 14, [[3, 3, 3], [3, 3, 3], [0, 0, 0]], 'A', {attackValue: 500});
        }
    }
}

export default SkillFactory;