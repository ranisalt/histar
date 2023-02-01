import test from 'ava'
import {last, map} from '..'

test('should return the last element', (t) => {
  t.is(last([1, 2, 3, 4]), 4)
})

test('should return `undefined` when querying empty arrays', (t) => {
  t.is(last<unknown>([]), undefined)
})

test('should work as an iteratee for methods like `map`', (t) => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual([...map(array, last)], [3, 6, 9])
})
