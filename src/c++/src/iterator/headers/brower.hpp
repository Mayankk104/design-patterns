#pragma once
#include "iterator.hpp"

class Browser
{
    Iterator *urlHistory;
    void createIterator();
    void triverseUrls();
    ~Browser();
};