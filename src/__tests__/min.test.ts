import test from 'ava'
import {min} from '..'

const array = [1, 3, -4, 2]

test('min#should find the minimum value in a collection', (t) => {
  t.is(min(array), -4)
})

test('min#should return undefined for empty arrays', (t) => {
  t.is(min<unknown>([]), undefined)
})
