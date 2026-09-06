import WordsCollections from "./WordsCollection";

const collection = new WordsCollections();
const itr = collection.getIterator();
const revItr = collection.getReverseIterator();

collection.addItem("akash");
collection.addItem("bhargav");
collection.addItem("chaitanya");
collection.addItem("dinesh");

while (itr.hasNext()) {
    console.log(itr.next());
}
console.log("=== Reverse Iterator ===");
while (revItr.hasNext()) {
    console.log(revItr.next());
}
