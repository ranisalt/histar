import test from 'ava'
import {dropWhile} from '..'

const array = [1, 2, 3]

test('should drop the first two elements', (t) => {
  t.deepEqual([...dropWhile(array, (x) => x <= 2)], [3])
})

test('should return all elements when predicate always returns false', (t) => {
  t.deepEqual([...dropWhile(array, () => false)], [1, 2, 3])
})

test('should return an empty array when predicate always returns true', (t) => {
  t.deepEqual([...dropWhile(array, () => true)], [])
})
