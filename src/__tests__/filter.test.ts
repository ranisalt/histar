import test from 'ava'
import {filter} from '..'

const array = [1, 2, 3, 4, 5]

test('should return elements `predicate` returns truthy for', (t) => {
  t.deepEqual([...filter(array, (n) => n % 2 === 0)], [2, 4])
})

test('should return an empty array when predicate always returns false', (t) => {
  t.deepEqual([...filter(array, () => false)], [])
})

test('should return all elements when predicate always returns true', (t) => {
  t.deepEqual([...filter(array, () => true)], [1, 2, 3, 4, 5])
})
