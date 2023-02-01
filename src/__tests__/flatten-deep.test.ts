import test from 'ava'
import {flattenDeep} from '..'

test('should treat sparse arrays as dense', (t) => {
  const array = [[1, 2, 3], Array.from({length: 3})]
  const expected: any[] = [1, 2, 3]

  expected.push(undefined, undefined, undefined)

  t.deepEqual([...flattenDeep(array)], expected)
})

test('should work with empty arrays', (t) => {
  t.deepEqual([...flattenDeep([[], [[]], [[], [[[]]]]])], [])
})

test('should support flattening of nested arrays', (t) => {
  t.deepEqual([...flattenDeep([1, [2, [3, [4]], 5]])], [1, 2, 3, 4, 5])
})
