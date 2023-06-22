#pragma once
#include "./memento.hpp"
#include "./caretaker.hpp"
#include <string>
#include <stack>
using namespace std;

class NotePad
{
    string content;
    CareTaker caretaker;

public:
    void write(string content);
    string getMessage();
    void undo();
    void implimentation();
};
