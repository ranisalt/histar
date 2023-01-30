import test from 'ava'
import {enumerate, fill, map} from '..'

const array = [1, 2, 3]

test('fill#should use a default `start` of `0` and a default `end` of `length`', (t) => {
  t.deepEqual([...fill(array, 'a')], ['a', 'a', 'a'])
})

test('fill#should work with a positive `start`', (t) => {
  t.deepEqual([...fill(array, 'a', 1)], [1, 'a', 'a'])
})

test('fill#should work with a `start` >= `length`', (t) => {
  t.deepEqual([...fill(array, 'a', 3)], [1, 2, 3])
  t.deepEqual([...fill(array, 'a', 4)], [1, 2, 3])
  t.deepEqual([...fill(array, 'a', 2 ** 32)], [1, 2, 3])
  t.deepEqual([...fill(array, 'a', Number.POSITIVE_INFINITY)], [1, 2, 3])
})

test('fill#should work with `start` >= `end`', (t) => {
  t.deepEqual([...fill(array, 'a', 2, 2)], [1, 2, 3])
  t.deepEqual([...fill(array, 'a', 3, 2)], [1, 2, 3])
})

test('fill#should work with a positive `end`', (t) => {
  t.deepEqual([...fill(array, 'a', 0, 1)], ['a', 2, 3])
})

test('fill#should work with a `end` >= `length`', (t) => {
  t.deepEqual([...fill(array, 'a', 0, 3)], ['a', 'a', 'a'])
  t.deepEqual([...fill(array, 'a', 0, 4)], ['a', 'a', 'a'])
  t.deepEqual([...fill(array, 'a', 0, 2 ** 32)], ['a', 'a', 'a'])
  t.deepEqual(
    [...fill(array, 'a', 0, Number.POSITIVE_INFINITY)],
    ['a', 'a', 'a'],
  )
})

test('fill#should work as an iteratee for methods like `map`', (t) => {
  const array = [
    [1, 2],
    [3, 4],
  ]
  t.deepEqual(
    [...map(enumerate(array), ([index, value]) => [...fill(value, index)])],
    [
      [0, 0],
      [1, 1],
    ],
  )
})
