import test from 'ava'
import {enumerate, map, nth} from '..'

test('should get the nth element of `array`', (t) => {
  t.deepEqual(
    [
      ...map(enumerate(['a', 'b', 'c', 'd']), ([index]) =>
        nth(['a', 'b', 'c', 'd'], index),
      ),
    ],
    ['a', 'b', 'c', 'd'],
  )
})

test('should return `undefined` for empty arrays', (t) => {
  t.is(nth<unknown>([], 1), undefined)
})

test('should return `undefined` for non-indexes', (t) => {
  const array = [1, 2]
  const values = [Number.POSITIVE_INFINITY, array.length]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const expected = [...map(values, () => {})]

  array[-1] = 3

  t.deepEqual([...map(values, (n) => nth(array, n))], expected)
})
