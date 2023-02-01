import test from 'ava'
import {drop} from '..'

const array = [1, 2, 3]

test('should drop the first two elements', (t) => {
  t.deepEqual([...drop(array, 2)], [3])
})

test('should return all elements when `n` < `1`', (t) => {
  t.deepEqual([...drop(array, 0)], [1, 2, 3])
  t.deepEqual([...drop(array, -1)], [1, 2, 3])
  t.deepEqual([...drop(array, Number.NEGATIVE_INFINITY)], [1, 2, 3])
})

test('should return an empty array when `n` >= `length`', (t) => {
  t.deepEqual([...drop(array, 3)], [])
  t.deepEqual([...drop(array, 4)], [])
  t.deepEqual([...drop(array, 2 ** 32)], [])
  t.deepEqual([...drop(array, Number.POSITIVE_INFINITY)], [])
})
