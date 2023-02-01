import test from 'ava'
import {compress} from '..'

test('should return an array of elements corresponding to the true values in `selectors`', (t) => {
  t.deepEqual(
    [...compress([1, 2, 3, 4, 5], [true, false, true, false, true])],
    [1, 3, 5],
  )
})

test('should return an empty array for empty `collection`', (t) => {
  t.deepEqual([...compress([], [])], [])
})
