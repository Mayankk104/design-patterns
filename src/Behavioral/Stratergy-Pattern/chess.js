const GameLevel = require('./context/GameLevel');

class Chess {
    /**@type {GameLevel} */
    gameLevel = new GameLevel();

    move() {
        this.gameLevel.makeMove();
    }
    
    /**
     * 
     * @param {import('./common/level').Level} level 
     */
    setLevel(level) {
        this.gameLevel.setLevel(level);
    }
}

module.exports = Chess;