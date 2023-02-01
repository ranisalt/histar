import test from 'ava'
import {indexOf} from '..'

test('should return the index of the first matched value', (t) => {
  t.is(indexOf([1, 2, 3, 1, 2, 3], 3), 2)
  t.is(indexOf('123123', '3'), 2)
})
