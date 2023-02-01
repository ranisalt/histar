import test from 'ava'
import {cycle, range, take} from '..'

test('should cycle through the values of an array', (t) => {
  t.deepEqual([...take(cycle([1, 2]), 6)], [1, 2, 1, 2, 1, 2])
})

test('should cycle through the values of a string', (t) => {
  t.deepEqual([...take(cycle('ab'), 6)], ['a', 'b', 'a', 'b', 'a', 'b'])
})

test('should cycle through the values of an iterable', (t) => {
  t.deepEqual([...take(cycle(range(3)), 6)], [0, 1, 2, 0, 1, 2])
})
