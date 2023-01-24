import test from 'ava'
import {range, rangeRight} from '..'

test('range#should create an iterable of numbers', (t) => {
  t.deepEqual([...range(10)], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual([...range(10, 15)], [10, 11, 12, 13, 14])
  t.deepEqual([...range(10, 20, 3)], [10, 13, 16, 19])
})

test('range#should generate values on demand', (t) => {
  t.notThrows(() => {
    const r = range(Number.POSITIVE_INFINITY)
    t.is(r[0], 0)
  })
})

test('range#should be an array-like object#should have a length property', (t) => {
  t.is(range(10).length, 10)
  t.is(range(10, 15).length, 5)
  t.is(range(10, 20, 3).length, 4)
})

test('range#should be an array-like object#should work as a parameter to Array.from', (t) => {
  t.notThrows(() => Array.from(range(10)))
})

test('range#should adhere to the iterator protocol', (t) => {
  const r = range(10, 13)
  t.deepEqual(r.next(), {value: 10, done: false})
  t.deepEqual(r.next(), {value: 11, done: false})
  t.deepEqual(r.next(), {value: 12, done: false})
  t.deepEqual(r.next(), {value: undefined, done: true})
})

test('range#should infer the sign of `step` when only `end` is given', (t) => {
  t.deepEqual([...range(4)], [0, 1, 2, 3])
  t.deepEqual([...range(-4)], [0, -1, -2, -3])
})

test('range#should infer the sign of `step` when only `start` and `end` are given', (t) => {
  t.deepEqual([...range(1, 5)], [1, 2, 3, 4])
  t.deepEqual([...range(5, 1)], [5, 4, 3, 2])
})

test('range#should work with a `start`, `end`, and `step`', (t) => {
  t.deepEqual([...range(0, -4, -1)], [0, -1, -2, -3])
  t.deepEqual([...range(5, 1, -1)], [5, 4, 3, 2])
  t.deepEqual([...range(0, 20, 5)], [0, 5, 10, 15])
})

test('range#should work with a `step` larger than `end`', (t) => {
  t.deepEqual([...range(1, 5, 20)], [1])
})

test('range#should work with a negative `step`', (t) => {
  t.deepEqual([...range(0, -4, -1)], [0, -1, -2, -3])
  t.deepEqual([...range(21, 10, -3)], [21, 18, 15, 12])
})

test('range#should support `start` of `-0`', (t) => {
  const [actual] = range(-0, 1)

  t.is(1 / actual!, Number.NEGATIVE_INFINITY)
})

test('range#should be indexable', (t) => {
  t.is(range(10)[2], 2)
  t.is(range(10, 15)[2], 12)
  t.is(range(10, 20, 3)[2], 16)
  t.is(range(Number.POSITIVE_INFINITY)[1e3], 1e3)
  t.is(range(Number.NEGATIVE_INFINITY)[1e3], -1e3)
})

test('range#should be indexable from the end', (t) => {
  t.is(range(10)[-2], 8)
  t.is(range(10, 15)[-2], 13)
  t.is(range(10, 20, 3)[-2], 16)
})

test('range#should not be indexable from the end when the range is infinite', (t) => {
  t.is(range(Number.POSITIVE_INFINITY)[-1e3], undefined)
  t.is(range(Number.NEGATIVE_INFINITY)[-1e3], undefined)
})

test('range#should be reversible', (t) => {
  t.deepEqual([...range(10).reverse()], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  t.deepEqual([...range(10, 15).reverse()], [14, 13, 12, 11, 10])
  t.deepEqual([...range(10, 20, 3).reverse()], [19, 16, 13, 10])
  t.deepEqual([...range(-4).reverse()], [-3, -2, -1, 0])
})

test('rangeRight#should infer the sign of `step` when only `end` is given', (t) => {
  t.deepEqual([...rangeRight(4)], [3, 2, 1, 0])
  t.deepEqual([...rangeRight(-4)], [-3, -2, -1, 0])
})

test('rangeRight#should infer the sign of `step` when only `start` and `end` are given', (t) => {
  t.deepEqual([...rangeRight(1, 5)], [4, 3, 2, 1])
  t.deepEqual([...rangeRight(5, 1)], [2, 3, 4, 5])
})

test('rangeRight#should work with a `start`, `end`, and `step`', (t) => {
  t.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
  t.deepEqual([...rangeRight(5, 1, -1)], [2, 3, 4, 5])
  t.deepEqual([...rangeRight(0, 20, 5)], [15, 10, 5, 0])
})

test('rangeRight#should work with a `step` larger than `end`', (t) => {
  t.deepEqual([...rangeRight(1, 5, 20)], [1])
})

test('rangeRight#should work with a negative `step`', (t) => {
  t.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
  t.deepEqual([...rangeRight(21, 10, -3)], [12, 15, 18, 21])
})
