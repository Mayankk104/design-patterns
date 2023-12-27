const AbstractMoveStratergy = require("./MoveStratergy");

class EasyLevel extends AbstractMoveStratergy {
    
    /**
     * @override
     */
    makeMove() {
        console.log("making a easy move");
    }
}

module.exports = EasyLevel;