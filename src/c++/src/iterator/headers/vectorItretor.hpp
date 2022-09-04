#pragma once
#include "iterator.hpp"
#include <vector>
using namespace std;

class VectorIterator : public Iterator
{
    vector<int>::iterator currentItem;
    Iterator *current();
    Iterator *next();
    bool hasNext();
};
