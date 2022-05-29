#pragma once
#include "./memento.hpp"
#include <string>
#include <stack>
using namespace std;

class CareTaker
{
    stack<Memento> history;

public:
    void push(Memento memento);
    Memento pop();
};