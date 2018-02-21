# random-iterator
> Iterate values in a list in random order using ES6 Generator


## Install

```
$ npm install random-iterator
```


## Usage

### Simple Array
```js
const randomIterator = require('./lib/index');

const it = randomIterator([1, 2, 3]);

it.next(); // => { value: 3, done: false }
it.next(); // => { value: 1, done: false }
it.next(); // => { value: 2, done: false }
it.next(); // => { value: undefined, done: true }
```

### Objects
```js
const quotesIterable = randomIterator({
  'a': 'hi',
  'b': 'hello',
  'c': 'good morning'
});

// Randomly pick a quote
quotesIterable.next().value; // => hello
```

### Deck of cards
```js
const generateDeck = () => {
  const suits = ['♣', '♦', '♥', '♠'];
  const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = [];

  for (let su = 0; su < suits.length; ++su) {
    for (let sy = 0; sy < symbols.length; ++sy) {
      const suit = suits[su];
      const symbol = symbols[sy];
      deck.push(`${symbol} ${suit}`);
    }
  }

  return deck;
}

// Create a deck of cards
const myDeck = generateDeck();

// Randomly draw a card inside the deck
const deckIterable = randomIterator(myDeck);
deckIterable.next().value; // => Q ♥
deckIterable.next().value; // => 4 ♣
deckIterable.next().value; // => 7 ♣
```


## License

MIT © Thibaut Vieux
