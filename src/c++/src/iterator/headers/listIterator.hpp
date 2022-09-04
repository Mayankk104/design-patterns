#include <list>
#include <iterator>
#include "iterator.hpp"

class ListIterator : public Iterator
{
    list<int> list;
    // list<int>::iterator currentItem;
    bool hasNext();
    Iterator *next();
    Iterator *current();
    ~ListIterator();
};