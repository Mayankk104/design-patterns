#include <iostream>
#include <vector>
using namespace std;

struct GraphicShape {
    virtual void draw() = 0;
};

struct Circle : GraphicShape {
    void draw() override {
        cout << "drawing circle\n";
    }
};

struct GraphicalShapeGroup : GraphicShape {
    string name;
    vector<GraphicShape*> shapes;

    GraphicalShapeGroup(string name) {
        this->name = name;
    }

    void draw() override {
        cout << "Group: " << this->name << "\n";
        for (auto shape : shapes) {
            shape->draw();
        }
    }
};

int main() {
    Circle c1;
    Circle c2;

    GraphicalShapeGroup group("root");
    GraphicalShapeGroup group2("child1");

    group2.shapes.push_back(&c1);
    group2.shapes.push_back(&c2);
    group.shapes.push_back(&group2);
    group.draw();
}