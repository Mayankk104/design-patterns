#include "headers/brower.hpp"
#include "headers/iterator.hpp"
#include "headers/listIterator.hpp"
#include <iostream>

using namespace std;

void Browser::createIterator()
{
    ListIterator *list = new ListIterator();
    urlHistory = list;
}

void Browser::triverseUrls()
{
    while (urlHistory->hasNext())
    {
        cout << urlHistory->current() << endl;
        urlHistory = urlHistory->next();
    }
}

Browser::~Browser()
{
    delete this->urlHistory;
}