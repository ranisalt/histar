import test from 'ava'
import {chunk} from '..'

const array = [0, 1, 2, 3, 4, 5]

test('should return chunked arrays', (t) => {
  t.deepEqual(
    [...chunk(array, 3)],
    [
      [0, 1, 2],
      [3, 4, 5],
    ],
  )
})

test('should return the last chunk as remaining elements', (t) => {
  t.deepEqual(
    [...chunk(array, 4)],
    [
      [0, 1, 2, 3],
      [4, 5],
    ],
  )
})
