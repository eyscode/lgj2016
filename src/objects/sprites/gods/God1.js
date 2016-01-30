import God from './God';

class God1 extends God {
    constructor(game, x, y) {
        super(game, x, y, "seacreatures", 1500,
            Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4),
            Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4),
            Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4),
            Phaser.Animation.generateFrameNames('seahorse', 0, 5, '', 4),
            Phaser.Animation.generateFrameNames('stingray', 0, 23, '', 4),
            250, 150, 3, ['H']
        );
    }
}

export default God1;