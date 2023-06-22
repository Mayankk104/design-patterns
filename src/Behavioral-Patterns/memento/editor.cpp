#include "headers/editor.hpp"
#include <iostream>

using namespace std;

void NotePad::write(string content)
{
    this->content = content;
    Memento memento;
    memento.setState(content);
    this->caretaker.push(memento);
}

string NotePad::getMessage()
{
    return content;
}

void NotePad::undo()
{
    content = caretaker.pop().getState();
}

void NotePad::implimentation()
{
    NotePad notepad;
    notepad.write("Google");
    notepad.write("Facebook");
    notepad.write("Microsoft");
    cout << notepad.getMessage() << endl;
    notepad.undo();
    cout << notepad.getMessage() << endl;
    notepad.undo();
    notepad.undo();
    notepad.undo();
    cout << notepad.getMessage() << endl;
}