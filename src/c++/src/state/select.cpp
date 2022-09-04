#include "headers/select.hpp"
#include <iostream>
using namespace std;

void Select::mouseUp()
{
    cout << endl
         << "Selection Complete 😄 " << endl;
}

void Select::mouseDown()
{
    cout << endl
         << "select tool is droped on canvas..." << endl;
    cout << "selecting area" << endl;
}