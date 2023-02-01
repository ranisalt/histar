import test from 'ava'
import {map, tail} from '..'

test('should exclude the first element', (t) => {
  t.deepEqual([...tail([1, 2, 3])], [2, 3])
})

test('should return an empty when querying empty arrays', (t) => {
  t.deepEqual([...tail([])], [])
})

test('should work as an iteratee for methods like `map`', (t) => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual(
    [...map(array, (value) => [...tail(value)])],
    [
      [2, 3],
      [5, 6],
      [8, 9],
    ],
  )
})
