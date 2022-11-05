import Component from "./Component";

class Group implements Component {
    private components: Component[] = [];

    move() {
        for (let component of this.components)
            component.move();
    };

    render() {
        for (let component of this.components)
            component.render();
    }

    add(component: Component) {
        this.components.push(component);
    }

}

export default Group;