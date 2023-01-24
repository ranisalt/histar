import test from 'ava'
import {initial, map} from '..'

test('initial#should exclude last element', (t) => {
  t.deepEqual([...initial([1, 2, 3])], [1, 2])
})

test('initial#should return an empty when querying empty arrays', (t) => {
  t.deepEqual([...initial([])], [])
})

test('initial#should work as an iteratee for methods like `map`', (t) => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual(
    [...map(array, (value) => [...initial(value)])],
    [
      [1, 2],
      [4, 5],
      [7, 8],
    ],
  )
})
