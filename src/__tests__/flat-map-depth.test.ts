import test from 'ava'
import {flatMapDepth} from '..'

const duplicate = <T>(n: T): [T, T] => [n, n]

test('should support flattening of nested arrays#with a depth of 1', (t) => {
  const array = [1, [2, [3, [4]], 5]]
  // Const expected = [1, 1, 2, 2, [3, [4]], [3, [4]], 5, 5];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 1)],
    array.flatMap((value) => duplicate(value)),
  )
})

test('should support flattening of nested arrays#with a depth of 2', (t) => {
  const array = [1, [2, [3, [4]], 5]]
  // Const expected = [1, 1, 2, 2, 3, 3, [4], [4], 5, 5];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 2)],
    array.map((value) => duplicate(value)).flat(2),
  )
})

test('should work with empty arrays#with a depth of 1', (t) => {
  const array = [[], [[]], [[], [[[]]]]]
  // Const expected = [[], [], [], [], [[[]]], [[[]]]];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 1)],
    array.flatMap((value) => duplicate(value)),
  )
})

test('should work with empty arrays#with a depth of 2', (t) => {
  const array = [[], [[]], [[], [[[]]]]]
  // Const expected = [[[]], [[]], [[]], [[]]];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 2)],
    array.map((value) => duplicate(value)).flat(2),
  )
})

test('should treat a `depth` of < `1` as a shallow clone', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual(
    [...flatMapDepth(array, duplicate, -1)],
    array.map((value) => duplicate(value)),
  )
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 0)],
    array.map((value) => duplicate(value)),
  )
})
