import test from 'ava'
import {takeWhile} from '..'

test('should take the first two elements', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], (x) => x <= 2)], [1, 2])
})

test('should return an empty array when predicate always returns false', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], () => false)], [])
})

test('should return all elements when predicate always returns true', (t) => {
  t.deepEqual([...takeWhile([1, 2, 3], () => true)], [1, 2, 3])
})
