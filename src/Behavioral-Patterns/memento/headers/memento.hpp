#pragma once
#include <string>
using namespace std;

class Memento
{
protected:
    string content;

public:
    string getState();
    void setState(string str);
};