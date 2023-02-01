import test from 'ava'
import {first, head, map} from '..'

test('should return the first element', (t) => {
  t.is(head([1, 2, 3, 4]), 1)
})

test('should return `undefined` when querying empty arrays', (t) => {
  t.is(head<unknown>([]), undefined)
})

test('should work as an iteratee for methods like `_.map`', (t) => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual([...map(array, head)], [1, 4, 7])
})

test('should be aliased to `first`', (t) => {
  t.is(first, head)
})
