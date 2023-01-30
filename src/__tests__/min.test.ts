import test from 'ava'
import {min, minBy} from '..'

const array = [1, 3, -4, 2]

test('min#should find the minimum value in a collection', (t) => {
  t.is(min(array), -4)
})

test('min#should return undefined for empty arrays', (t) => {
  t.is(min<unknown>([]), undefined)
})

test('minBy#should take a key function', (t) => {
  t.is(minBy(array, Math.abs), 1)
})

// Test('minBy#should return undefined for empty arrays', (t) => {
//   t.is(minBy<unknown>([], Math.abs), undefined);
// });

test('minBy#should find the minimum value in a collection with a key function', (t) => {
  t.is(minBy(array, Math.abs), 1)
})
