#include "headers/photoshop.hpp"
#include "headers/tool.hpp"
#include "headers/brush.hpp"
#include "headers/select.hpp"
#include <iostream>
using namespace std;

void Photoshop::select()
{
    int selection;
    cout << "Tools: 1. Brush   2. Select \t";
    cin >> selection;

    switch (selection)
    {
    case 1:
        currentTool = new Brush();
        canvas.selectTool(currentTool);
        break;
    case 2:
        currentTool = new Select();
        canvas.selectTool(currentTool);
        break;
    default:
        cout << "Choose right tool" << endl;
    }
};

void Photoshop::draw()
{
    currentTool->mouseDown();
    currentTool->mouseUp();
}

void Photoshop::implimentation()
{
    int choose = 1;
    while (choose == 1)
    {
        cout << "Choose: 1. Enter into Program  2. Exit" << endl;
        cin >> choose;
        cout << "\x1B[2J\x1B[H";

        if (choose != 1)
            break;

        select();
        draw();
    }
}