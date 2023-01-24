import test from 'ava'
import {map, nth} from '..'

test('nth#should get the nth element of `array`', (t) => {
  t.deepEqual(
    [
      ...map(['a', 'b', 'c', 'd'], (_, index) =>
        nth(['a', 'b', 'c', 'd'], index),
      ),
    ],
    ['a', 'b', 'c', 'd'],
  )
})

test('nth#should return `undefined` for empty arrays', (t) => {
  t.is(nth<unknown>([], 1), undefined)
})

test('nth#should return `undefined` for non-indexes', (t) => {
  const array = [1, 2]
  const values = [Number.POSITIVE_INFINITY, array.length]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const expected = [...map(values, () => {})]

  array[-1] = 3

  t.deepEqual([...map(values, (n) => nth(array, n))], expected)
})
