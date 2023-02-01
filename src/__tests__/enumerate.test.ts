import test from 'ava'
import {enumerate} from '..'

test('should combine elements with indices', (t) => {
  const array1 = [5, 7, 9]

  t.deepEqual(
    [...enumerate(array1)],
    [
      [0, 5],
      [1, 7],
      [2, 9],
    ],
  )
})

test('should accept a `start` parameter and index from that', (t) => {
  const array1 = [5, 7, 9]

  t.deepEqual(
    [...enumerate(array1, 5)],
    [
      [5, 5],
      [6, 7],
      [7, 9],
    ],
  )
})
