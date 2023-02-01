import test from 'ava'
import {take} from '..'

test('should take the first two elements', (t) => {
  t.deepEqual([...take([1, 2, 3], 2)], [1, 2])
})

test('should return an empty array when `n` < `1`', (t) => {
  t.deepEqual([...take([1, 2, 3], 0)], [])
  t.deepEqual([...take([1, 2, 3], -1)], [])
  t.deepEqual([...take([1, 2, 3], Number.NEGATIVE_INFINITY)], [])
})

test('should return all elements when `n` >= `length`', (t) => {
  t.deepEqual([...take([1, 2, 3], 3)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], 4)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], 2 ** 32)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], Number.POSITIVE_INFINITY)], [1, 2, 3])
})
