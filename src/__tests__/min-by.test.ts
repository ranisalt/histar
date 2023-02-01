import test from 'ava'
import {minBy} from '..'

const array = [1, 3, -4, 2]

test('should take a key function', (t) => {
  t.is(minBy(array, Math.abs), 1)
})

test.todo('should return undefined for empty arrays')

test('should find the minimum value in a collection with a key function', (t) => {
  t.is(minBy(array, Math.abs), 1)
})
