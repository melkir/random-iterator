import test from 'ava';
import randomIterable from '.';

test.beforeEach(t => {
  const data = 'abcdefghijklmnopqrstuvwxyz'.split('');
  t.context = { data, it: randomIterable(data) };
});

test('main', t => {
  const { data, it } = t.context;
  t.is(data.length, 26);
  t.deepEqual([...it].sort(), data.sort());
});

test('iterates all', t => {
  const m = new Map();
  const { data, it } = t.context;

  for (let i = 0; i < data.length; i++) {
    const { value, done } = it.next();
    t.false(value === undefined || m.has(value) || done);
    m.set(value, true);
  }

  t.true(it.next().done);
});

test('shuffled randomly', t => {
  const cards = [1, 2, 3, 4];
  const counts = new Map();

  for (let i = 0; i < 600000; i++) {
    const it = randomIterable(cards);
    const shuffled = [...it].toString();
    const count = counts.get(shuffled) || 0;
    counts.set(shuffled, count + 1);
  }

  for (const [, value] of counts) {
    t.true(value >= 23000 && value <= 26000);
  }
});

test('objects', t => {
  const quotes = {
    a: 'hi',
    b: 'hello',
    c: 'good morning',
  };

  const quotesIterable = randomIterable(quotes);
  const quote = quotesIterable.next().value;
  const quotesValues = Object.keys(quotes).map(key => quotes[key]);
  t.true(quotesValues.includes(quote));
});
