import test from 'ava'
import {without} from '..'

test('should return the difference of values', (t) => {
  t.deepEqual([...without([2, 1, 2, 3], 1, 2)], [3])
})

test('should remove all occurrences of each value from an array', (t) => {
  t.deepEqual([...without([1, 2, 3, 1, 2, 3], 1, 2)], [3, 3])
})
