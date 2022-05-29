#include <string>
#include "headers/memento.hpp"
using namespace std;

string Memento::getState()
{
    return content;
}

void Memento::setState(string content)
{
    this->content = content;
}