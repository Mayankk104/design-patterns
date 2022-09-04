#include <iostream>
#include "headers/listIterator.hpp"
using namespace std;

ListIterator::~ListIterator()
{
    cout << "list space is free" << endl;
}

bool ListIterator::hasNext()
{
    return false;
}