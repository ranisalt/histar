import test from 'ava'
import {maxBy} from '..'

const array = [1, 3, -4, 2]

test('should take a key function', (t) => {
  t.is(maxBy(array, Math.abs), -4)
})

test.todo('should return undefined for empty arrays')

test('should find the maximum value in a collection with a key function', (t) => {
  t.is(maxBy(array, Math.abs), -4)
})
