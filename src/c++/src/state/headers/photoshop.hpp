#pragma once
#include "canvas.hpp"

class Photoshop
{
    Canvas canvas;
    Tool *currentTool = nullptr;

public:
    void select();
    void implimentation();
    void draw();
};