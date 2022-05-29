#include "headers/canvas.hpp"
#include "headers/tool.hpp"
#include <iostream>
using namespace std;

void Canvas::selectTool(Tool *tool)
{
    currentTool = tool;
}