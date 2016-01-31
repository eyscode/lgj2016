import Skill from './Skill';

class SkillFactory {
    static createSkill(name, game) {
        switch (name) {
            case 'Punch1':
                return new Skill('Punch1', 1, [[0, 0, 0], [2, 0, 0], [1, 0, 0]], 'A', {value: 2}, game);
            case 'Heal1':
                return new Skill('Heal1', 23, [[0, 0, 3], [0, 3, 3], [0, 0, 0]], 'H', {value: 2}, game);
            case 'Destroy1':
                return new Skill('Destroy1', 4, [[2, 2, 2], [0, 0, 0], [0, 0, 0]], 'D', {
                    value: 2,
                    typeResources: [1, 2, 3, 4]
                }, game);
            case 'SuperPunch1':
                return new Skill('SuperPunch1', 16, [[2, 0, 2], [0, 1, 0], [0, 0, 2]], 'SA', {value: 5}, game);
            case 'Punch2':
                return new Skill('Punch2', 22, [[0, 1, 0], [0, 0, 0], [0, 0, 0]], 'A', {value: 1}, game, 2.6);
            case 'Heal2':
                return new Skill('Heal2', 13, [[3, 0, 0], [0, 0, 0], [0, 0, 3]], 'H', {value: 1}, game, 2.0);
            case 'Destroy2':
                return new Skill('Destroy2', 12, [[2, 0, 0], [0, 0, 0], [0, 1, 0]], 'D', {
                    value: 1,
                    typeResources: [1, 2, 3, 4]
                }, game, 2.5);
            case 'SuperHeal2':
                return new Skill('SuperHeal2', 10, [[3, 0, 3], [0, 3, 0], [3, 0, 3]], 'SH', {value: 6}, game);
            case 'Punch3':
                return new Skill('Punch3', 6, [[0, 1, 0], [0, 0, 0], [2, 0, 3]], 'A', {value: 1}, game);
            case 'Heal3':
                return new Skill('Heal3', 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]], 'H', {value: 1}, game);
            case 'Destroy3':
                return new Skill('Destroy3', 2, [[2, 0, 0], [0, 0, 2], [0, 0, 0]], 'D', {
                    value: 1,
                    typeResources: [1, 2, 3, 4]
                }, game);
            case 'SuperDestroy3':
                return new Skill('SuperDestroy3', 8, [[1, 1, 0], [0, 1, 0], [0, 1, 1]], 'D', {
                    value: 6,
                    typeResources: [1, 2, 3, 4]
                }, game);

        }
    }
}

export default SkillFactory;