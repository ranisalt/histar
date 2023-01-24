import test from 'ava'
import {max, maxBy} from '..'

const array = [1, 3, -4, 2]

test('max#should find the maximum value in a collection', (t) => {
  t.is(max(array), 3)
})

test('max#should return undefined for empty arrays', (t) => {
  t.is(max<unknown>([]), undefined)
})

test('max#should take a key function', (t) => {
  t.is(max(array, Math.abs), -4)
})

// Test('maxBy#should return undefined for empty arrays', (t) => {
//   t.is(maxBy<unknown>([], Math.abs), undefined);
// });

test('maxBy#should find the maximum value in a collection with a key function', (t) => {
  t.is(maxBy(array, Math.abs), -4)
})
