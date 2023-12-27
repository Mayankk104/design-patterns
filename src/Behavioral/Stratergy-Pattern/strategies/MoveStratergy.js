
/**
 * @class
 * @abstract
 */
class AbstractMoveStratergy {

    /**
     * @method
     * @throws {Error}
     */
    makeMove() {
        throw new Error("It is an absract class, it's  object should not created directly extend this class");
    }
}

module.exports = AbstractMoveStratergy;