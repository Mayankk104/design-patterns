const EasyMove = require('../strategies/EasyMove');
const MediumLevel = require('../strategies/MediumLevel');

/**
 * @class
 */
class GameLevel {
    /**
     * @type {import('../strategies/MoveStratergy')} 
     * @private 
     */
    level

    /**
     * @param {import('../common/level').Level} level 
     */
    setLevel(level) {
        switch (level) {
            case 'easy':
                this.level = new EasyMove();
                break;
            case 'medium':
                this.level = new MediumLevel();
                break;
            default:
                console.log('default');
        }
    }

    makeMove() {
        if (!this.level) throw new Error('set level first');
        this.level.makeMove();
    }
}

module.exports = GameLevel;