import test from 'ava'
import {flatten} from '..'

test('should treat sparse arrays as dense', (t) => {
  const array = [[1, 2, 3], Array.from({length: 3})]
  const expected: any[] = [1, 2, 3]

  expected.push(undefined, undefined, undefined)

  t.deepEqual([...flatten(array)], expected)
})

test('should work with empty arrays', (t) => {
  t.deepEqual([...flatten([[], [[]], [[], [[[]]]]])], [[], [], [[[]]]])
})

test('should support flattening of nested arrays', (t) => {
  t.deepEqual([...flatten([1, [2, [3, [4]], 5]])], [1, 2, [3, [4]], 5])
})
