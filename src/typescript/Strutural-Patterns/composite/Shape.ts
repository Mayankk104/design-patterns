import Component from './Component';

class Shape implements Component {
    move() {
        console.log('moving shape');
    };

    render() {
        console.log('rendering shape');
    }
};

export default Shape;