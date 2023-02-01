import test from 'ava'
import {findIndex, range} from '..'

test('should find indices in an iterable', (t) => {
  t.is(
    findIndex(range(10, 20), (x) => x % 3 === 0),
    2,
  )
})

test('should return -1 if not found', (t) => {
  t.is(
    findIndex(range(10, 20), (x) => x < 3),
    -1,
  )
})
