import test from 'ava'
import {compact, filter, reject} from '..'

const array = [1, 2, 3, 4, 5]

test('filter#should return elements `predicate` returns truthy for', (t) => {
  t.deepEqual([...filter(array, (n) => n % 2 === 0)], [2, 4])
})

test('filter#should return an empty array when predicate always returns false', (t) => {
  t.deepEqual([...filter(array, () => false)], [])
})

test('filter#should return all elements when predicate always returns true', (t) => {
  t.deepEqual([...filter(array, () => true)], [1, 2, 3, 4, 5])
})

/** Used to provide falsey values to methods. */
// eslint-disable-next-line no-sparse-arrays
export const falsey = [, null, undefined, false, 0, Number.NaN, '']

test('compact#should filter falsey values', (t) => {
  const array = ['0', '1', '2']

  t.deepEqual([...compact([...falsey, ...array])], array)
})

test('reject#should return elements the `predicate` returns falsey for', (t) => {
  t.deepEqual([...reject([1, 2, 3], (n) => n % 2 === 0)], [1, 3])
})
