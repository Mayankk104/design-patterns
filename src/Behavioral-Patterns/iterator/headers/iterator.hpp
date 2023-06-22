#pragma once
class Iterator
{
public:
    virtual Iterator *current() = 0;
    virtual Iterator *next() = 0;
    virtual bool hasNext() = 0;
};