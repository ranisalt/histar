import test from 'ava'
import {findIndex, includes, indexOf, range} from '..'

test('findIndex#should find indices in an iterable', (t) => {
  t.is(
    findIndex(range(10, 20), (x) => x % 3 === 0),
    2,
  )
})

test('findIndex#should return -1 if not found', (t) => {
  t.is(
    findIndex(range(10, 20), (x) => x < 3),
    -1,
  )
})

test('indexOf#should return the index of the first matched value', (t) => {
  t.is(indexOf([1, 2, 3, 1, 2, 3], 3), 2)
  t.is(indexOf('123123', '3'), 2)
})

test('includes#should return `true` for matched values', (t) => {
  t.true(includes([1, 2, 3, 4], 3))
  t.true(includes('1234', '3'))
})

test('includes#should return `false` for unmatched values', (t) => {
  t.false(includes([1, 2, 3, 4], 5))
  t.false(includes('1234', '5'))
})
