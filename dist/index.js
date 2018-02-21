'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(randomIterator);

function randomIterator(array) {
  var keys, i;
  return _regenerator2.default.wrap(function randomIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keys = Object.keys(array);

          shuffle(keys);
          i = 0;

        case 3:
          if (!(i < keys.length)) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return array[keys[i]];

        case 6:
          ++i;
          _context.next = 3;
          break;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function shuffle(array) {
  var index = void 0;
  var counter = array.length;
  while (counter) {
    index = Math.random() * counter-- | 0;
    swap(array, index, counter);
  }
}

function swap(array, a, b) {
  var tmp = array[b];
  array[b] = array[a];
  array[a] = tmp;
}

module.exports = randomIterator;