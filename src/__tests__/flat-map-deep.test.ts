import test from 'ava'
import {flatMapDeep} from '..'

const duplicate = <T>(n: T): [T, T] => [n, n]

test('should map values in `array` to a new flattened array', (t) => {
  const array = [1, 2, 3, 4]

  t.deepEqual(
    [...flatMapDeep(array, duplicate)],
    array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
  )
})

test('should work with empty arrays', (t) => {
  const array = [[], [[]], [[], [[[]]]]]

  t.deepEqual([...flatMapDeep(array, duplicate)], [])
})

test('should support flattening of nested arrays', (t) => {
  const array = [1, [2, [3, [4]], 5]]

  t.deepEqual(
    [...flatMapDeep(array, duplicate)],
    array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
  )
})
