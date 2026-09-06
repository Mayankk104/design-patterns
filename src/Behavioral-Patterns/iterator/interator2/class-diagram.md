# Iterator Pattern - Class Diagram (WordsCollections)

```mermaid
classDiagram
    class Iterator~T~ {
        <<interface>>
        +hasNext() boolean
        +current() T or null
        +next() T or null
    }

    class Aggregator~T~ {
        <<interface>>
        +getIterator() Iterator~T~
    }

    class WordsCollections {
        -string[] _items
        +getIterator() Iterator~string~
        +getReverseIterator() Iterator~string~
        +addItem(string item) void
        +getCount() number
        +items string[]
    }

    class AlphabeticalOrderIterator {
        -number position
        -WordsCollections collection
        -boolean reverse
        +AlphabeticalOrderIterator(WordsCollections collection, boolean reverse)
        +hasNext() boolean
        +current() string or null
        +next() string or null
    }

    Aggregator~T~ <|.. WordsCollections : implements
    Iterator~T~ <|.. AlphabeticalOrderIterator : implements
    WordsCollections --> AlphabeticalOrderIterator : creates
    AlphabeticalOrderIterator --> WordsCollections : iterates over
```

## Relationships

- **WordsCollections** implements **Aggregator&lt;string&gt;** interface
- **AlphabeticalOrderIterator** implements **Iterator&lt;string&gt;** interface
- **WordsCollections** creates and returns **AlphabeticalOrderIterator** instances
- **AlphabeticalOrderIterator** holds a reference to **WordsCollections** to traverse its items

## Pattern Flow

1. Client creates a `WordsCollections` instance
2. Client adds items using `addItem()`
3. Client requests an iterator via `getIterator()` or `getReverseIterator()`
4. WordsCollections instantiates and returns an `AlphabeticalOrderIterator`
5. Client uses iterator methods (`hasNext()`, `next()`) to traverse the collection
6. The iterator maintains its own position state independently of the collection
