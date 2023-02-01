import test from 'ava'
import {find, range} from '..'

test('should find values in an iterable', (t) => {
  t.is(
    find(range(10, 20), (x) => x % 3 === 0),
    12,
  )
})

test('should return undefined if not found', (t) => {
  t.is(
    find(range(10, 20), (x) => x < 3),
    undefined,
  )
})
