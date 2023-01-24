import test from 'ava'
import {flatMap, flatMapDeep, flatMapDepth} from '..'

const array = [1, 2, 3, 4]

const duplicate = <T>(n: T): [T, T] => [n, n]

test('flatMap#should map values in `array` to a new flattened array', (t) => {
  t.deepEqual(
    [...flatMap(array, duplicate)],
    array.flatMap((value) => duplicate(value)),
  )
})

test('flatMapDeep#should map values in `array` to a new flattened array', (t) => {
  const array = [1, 2, 3, 4]

  t.deepEqual(
    [...flatMapDeep(array, duplicate)],
    array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
  )
})

test('flatMapDeep#should work with empty arrays', (t) => {
  const array = [[], [[]], [[], [[[]]]]]

  t.deepEqual([...flatMapDeep(array, duplicate)], [])
})

test('flatMapDeep#should support flattening of nested arrays', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual(
    [...flatMapDeep(array, duplicate)],
    array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
  )
})

test('flatMapDepth#should support flattening of nested arrays#with a depth of 1', (t) => {
  const array = [1, [2, [3, [4]], 5]]
  // Const expected = [1, 1, 2, 2, [3, [4]], [3, [4]], 5, 5];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 1)],
    array.flatMap((value) => duplicate(value)),
  )
})

test('flatMapDepth#should support flattening of nested arrays#with a depth of 2', (t) => {
  const array = [1, [2, [3, [4]], 5]]
  // Const expected = [1, 1, 2, 2, 3, 3, [4], [4], 5, 5];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 2)],
    array.map((value) => duplicate(value)).flat(2),
  )
})

test('flatMapDepth#should work with empty arrays#with a depth of 1', (t) => {
  const array = [[], [[]], [[], [[[]]]]]
  // Const expected = [[], [], [], [], [[[]]], [[[]]]];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 1)],
    array.flatMap((value) => duplicate(value)),
  )
})

test('flatMapDepth#should work with empty arrays#with a depth of 2', (t) => {
  const array = [[], [[]], [[], [[[]]]]]
  // Const expected = [[[]], [[]], [[]], [[]]];
  t.deepEqual(
    [...flatMapDepth(array, duplicate, 2)],
    array.map((value) => duplicate(value)).flat(2),
  )
})

test('flatMapDepth#should treat a `depth` of < `1` as a shallow clone', (t) => {
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
