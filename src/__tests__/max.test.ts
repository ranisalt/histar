import test from 'ava'
import {max} from '..'

const array = [1, 3, -4, 2]

test('should find the maximum value in a collection', (t) => {
  t.is(max(array), 3)
})

test('should return undefined for empty arrays', (t) => {
  t.is(max<unknown>([]), undefined)
})
