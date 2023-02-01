import test from 'ava'
import {sum} from '..'

const array = [1, 2, 3, 4]

test('should find the sum of values in a collection', (t) => {
  t.is(sum(array), 10)
})

test('should return undefined for empty arrays', (t) => {
  t.is(sum([]), undefined)
})
