import test from 'ava'
import {lastIndexOf} from '..'

test('lastIndexOf#should return the index of the first matched value', (t) => {
  t.is(lastIndexOf([1, 2, 3, 1, 2, 3], 3), 5)
})
