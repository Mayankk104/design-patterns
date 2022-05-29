import { Tool } from './Tool';
class Canvas {
    public mouseEvent(tool: Tool): void {
        console.log('\n');
        tool.mouseDown();
        tool.mouseUp();
    }
}

class Brush implements Tool {
    mouseUp(): void {
        console.log('brush is lifted');
    }
    mouseDown(): void {
        console.log('stared drwaing');
    }
}

class Select implements Tool {
    mouseUp(): void {
        console.log('area selected')
    }
    mouseDown(): void {
        console.log('selecting area');
    }
}

export function stateImplementation() {
    const canvas = new Canvas();
    const brush = new Brush();
    const select = new Select();

    canvas.mouseEvent(brush);
    canvas.mouseEvent(select);

}