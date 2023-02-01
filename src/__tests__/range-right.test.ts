import test from 'ava'
import {rangeRight} from '..'

test('should infer the sign of `step` when only `end` is given', (t) => {
  t.deepEqual([...rangeRight(4)], [3, 2, 1, 0])
  t.deepEqual([...rangeRight(-4)], [-3, -2, -1, 0])
})

test('should infer the sign of `step` when only `start` and `end` are given', (t) => {
  t.deepEqual([...rangeRight(1, 5)], [4, 3, 2, 1])
  t.deepEqual([...rangeRight(5, 1)], [2, 3, 4, 5])
})

test('should work with a `start`, `end`, and `step`', (t) => {
  t.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
  t.deepEqual([...rangeRight(5, 1, -1)], [2, 3, 4, 5])
  t.deepEqual([...rangeRight(0, 20, 5)], [15, 10, 5, 0])
})

test('should work with a `step` larger than `end`', (t) => {
  t.deepEqual([...rangeRight(1, 5, 20)], [1])
})

test('should work with a negative `step`', (t) => {
  t.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
  t.deepEqual([...rangeRight(21, 10, -3)], [12, 15, 18, 21])
})
