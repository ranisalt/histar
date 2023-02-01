import test from 'ava'
import {includes} from '..'

test('should return `true` for matched values', (t) => {
  t.true(includes([1, 2, 3, 4], 3))
  t.true(includes('1234', '3'))
})

test('should return `false` for unmatched values', (t) => {
  t.false(includes([1, 2, 3, 4], 5))
  t.false(includes('1234', '5'))
})
