import test from 'ava'
import {flatMap} from '..'

const array = [1, 2, 3, 4]

const duplicate = <T>(n: T): [T, T] => [n, n]

test('should map values in `array` to a new flattened array', (t) => {
  t.deepEqual(
    [...flatMap(array, duplicate)],
    array.flatMap((value) => duplicate(value)),
  )
})
