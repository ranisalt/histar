import test from 'ava'
import {findLast, range} from '..'

test('should find values in an iterable', (t) => {
  t.is(
    findLast(range(10, 20), (x) => x % 3 === 0),
    18,
  )
})

test('should return undefined if not found', (t) => {
  t.is(
    findLast(range(10, 20), (x) => x < 3),
    undefined,
  )
})
