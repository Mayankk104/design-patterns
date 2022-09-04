#include "headers/vectorIterator.hpp"

Iterator* vectorIterator::next() {
	this->currentItem ++;
	return this->currentItem;
}

Iterator*
