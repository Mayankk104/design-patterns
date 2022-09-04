#include "headers/brush.hpp"
#include <iostream>
using namespace std;

void Brush::mouseUp()
{
    cout << "brush lifted" << endl;
    cout << "drawing COMPLETED 😄" << endl;
}

void Brush::mouseDown()
{
    cout << "brush is droped on canvas..." << endl;
    cout << "started drawing" << endl;
}