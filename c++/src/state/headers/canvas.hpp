#pragma once
#include "tool.hpp"

class Canvas
{
protected:
    Tool *currentTool;

public:
    void selectTool(Tool *tool);
};