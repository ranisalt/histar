import test from 'ava'
import {flattenDepth} from '..'

test('should support flattening of nested arrays', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual([...flattenDepth(array, 1)], [1, 2, [3, [4]], 5])
  t.deepEqual([...flattenDepth(array, 2)], [1, 2, 3, [4], 5])
})

test('should work with empty arrays', (t) => {
  const array = [[], [[]], [[], [[[]]]]]

  t.deepEqual([...flattenDepth(array, 1)], [[], [], [[[]]]])
  t.deepEqual([...flattenDepth(array, 2)], [[[]]])
})

test('should treat a `depth` of < `1` as a shallow clone', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual([...flattenDepth(array, -1)], [1, [2, [3, [4]], 5]])
  t.deepEqual([...flattenDepth(array, 0)], [1, [2, [3, [4]], 5]])
})
