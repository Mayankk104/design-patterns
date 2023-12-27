const EasyMove = require("./EasyMove");
const AbstractMoveStratergy = require("./MoveStratergy");

class MediumLevel extends AbstractMoveStratergy {

    /**
     * @override
     */
    makeMove() {
        console.log('making a medium move');
    }
}

module.exports = MediumLevel;