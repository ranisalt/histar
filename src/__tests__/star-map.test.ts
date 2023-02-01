import test from 'ava'
import {chunk, starMap} from '..'

test("should map values in 'collection' to a new array", (t) => {
  t.deepEqual(
    [...starMap(chunk([1, 2, 3, 4], 2), (a, b) => `${a},${b}`)],
    ['1,2', '3,4'],
  )
})
