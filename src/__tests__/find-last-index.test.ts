import test from 'ava'
import {findLastIndex, range} from '..'

test('should return the index of the last matched value', (t) => {
  t.is(
    findLastIndex(range(10, 20), (x) => x % 3 === 0),
    8,
  )
})

test('should return -1 if not found', (t) => {
  t.is(
    findLastIndex(range(10, 20), (x) => x < 3),
    -1,
  )
})
