import test from 'ava'
import {drop, dropWhile, map, tail} from '..'

const array = [1, 2, 3]

test('dropWhile#should drop the first two elements', (t) => {
  t.deepEqual([...dropWhile(array, (x) => x <= 2)], [3])
})

test('dropWhile#should return all elements when predicate always returns false', (t) => {
  t.deepEqual([...dropWhile(array, () => false)], [1, 2, 3])
})

test('dropWhile#should return an empty array when predicate always returns true', (t) => {
  t.deepEqual([...dropWhile(array, () => true)], [])
})

test('drop#should drop the first two elements', (t) => {
  t.deepEqual([...drop(array, 2)], [3])
})

test('drop#should return all elements when `n` < `1`', (t) => {
  t.deepEqual([...drop(array, 0)], [1, 2, 3])
  t.deepEqual([...drop(array, -1)], [1, 2, 3])
  t.deepEqual([...drop(array, Number.NEGATIVE_INFINITY)], [1, 2, 3])
})

test('drop#should return an empty array when `n` >= `length`', (t) => {
  t.deepEqual([...drop(array, 3)], [])
  t.deepEqual([...drop(array, 4)], [])
  t.deepEqual([...drop(array, 2 ** 32)], [])
  t.deepEqual([...drop(array, Number.POSITIVE_INFINITY)], [])
})

test('tail#should exclude the first element', (t) => {
  t.deepEqual([...tail([1, 2, 3])], [2, 3])
})

test('tail#should return an empty when querying empty arrays', (t) => {
  t.deepEqual([...tail([])], [])
})

test('tail#should work as an iteratee for methods like `map`', (t) => {
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  t.deepEqual(
    [...map(array, (value) => [...tail(value)])],
    [
      [2, 3],
      [5, 6],
      [8, 9],
    ],
  )
})
