#include "headers/caretaker.hpp"
#include "headers/memento.hpp"
// #include <bits/stdc++.h>
using namespace std;

void CareTaker::push(Memento memento)
{
    history.push(memento);
}

Memento CareTaker::pop()
{
    if (this->history.size() > 1)
        history.pop();

    return history.top();
}