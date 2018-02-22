'use strict';

function* randomIterator(array) {
  if (array == null) return;
  const keys = Object.keys(array);
  shuffle(keys);
  for (let i = 0; i < keys.length; ++i) {
    yield array[keys[i]];
  }
}

function shuffle(array) {
  let index;
  let counter = array.length;
  while (counter) {
    index = (Math.random() * counter--) | 0;
    swap(array, index, counter);
  }
}

function swap(array, a, b) {
  const tmp = array[b];
  array[b] = array[a];
  array[a] = tmp;
}

module.exports = randomIterator;
