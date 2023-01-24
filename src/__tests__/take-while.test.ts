import test from 'ava'
import {take, takeWhile} from '..'

test('takeWhile#should take the first two elements', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], (x) => x <= 2)], [1, 2])
})

test('takeWhile#should return an empty array when predicate always returns false', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], () => false)], [])
})

test('takeWhile#should return all elements when predicate always returns true', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], () => true)], [1, 2, 3])
})

test('take#should take the first two elements', (t) => {
  t.deepEqual([...take([1, 2, 3], 2)], [1, 2])
})

test('take#should return an empty array when `n` < `1`', (t) => {
  t.deepEqual([...take([1, 2, 3], 0)], [])
  t.deepEqual([...take([1, 2, 3], -1)], [])
  t.deepEqual([...take([1, 2, 3], Number.NEGATIVE_INFINITY)], [])
})

test('take#should return all elements when `n` >= `length`', (t) => {
  t.deepEqual([...take([1, 2, 3], 3)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], 4)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], 2 ** 32)], [1, 2, 3])
  t.deepEqual([...take([1, 2, 3], Number.POSITIVE_INFINITY)], [1, 2, 3])
})
