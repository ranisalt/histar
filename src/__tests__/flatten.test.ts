import test from 'ava'
import {flatten, flattenDeep, flattenDepth} from '..'

test('flatten#should treat sparse arrays as dense', (t) => {
  const array = [[1, 2, 3], Array.from({length: 3})]
  const expected: any[] = [1, 2, 3]

  expected.push(undefined, undefined, undefined)

  t.deepEqual([...flatten(array)], expected)
})

test('flatten#should work with empty arrays', (t) => {
  t.deepEqual([...flatten([[], [[]], [[], [[[]]]]])], [[], [], [[[]]]])
})

test('flatten#should support flattening of nested arrays', (t) => {
  t.deepEqual([...flatten([1, [2, [3, [4]], 5]])], [1, 2, [3, [4]], 5])
})

test('flattenDeep#should treat sparse arrays as dense', (t) => {
  const array = [[1, 2, 3], Array.from({length: 3})]
  const expected: any[] = [1, 2, 3]

  expected.push(undefined, undefined, undefined)

  t.deepEqual([...flattenDeep(array)], expected)
})

test('flattenDeep#should work with empty arrays', (t) => {
  t.deepEqual([...flattenDeep([[], [[]], [[], [[[]]]]])], [])
})

test('flattenDeep#should support flattening of nested arrays', (t) => {
  t.deepEqual([...flattenDeep([1, [2, [3, [4]], 5]])], [1, 2, 3, 4, 5])
})

test('flattenDepth#should support flattening of nested arrays', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual([...flattenDepth(array, 1)], [1, 2, [3, [4]], 5])
  t.deepEqual([...flattenDepth(array, 2)], [1, 2, 3, [4], 5])
})

test('flattenDepth#should work with empty arrays', (t) => {
  const array = [[], [[]], [[], [[[]]]]]

  t.deepEqual([...flattenDepth(array, 1)], [[], [], [[[]]]])
  t.deepEqual([...flattenDepth(array, 2)], [[[]]])
})

test('flattenDepth#should treat a `depth` of < `1` as a shallow clone', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual([...flattenDepth(array, -1)], [1, [2, [3, [4]], 5]])
  t.deepEqual([...flattenDepth(array, 0)], [1, [2, [3, [4]], 5]])
})
