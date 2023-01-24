import test from 'ava'
import {zip, zipWith} from '..'

test('zipWith#should zip arrays combining grouped elements with `iteratee`', (t) => {
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  t.deepEqual([...zipWith(array1, array2, (a, b) => a + b)], [5, 7, 9])
})

test('zipWith#should provide correct `iteratee` arguments', (t) => {
  let args: any

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  ;[
    ...zipWith([1, 2], [3, 4], (...iterArgs) => {
      args ||= iterArgs
    }),
  ]

  t.deepEqual(args, [1, 3])
})

test('zip#should work with 2-tuples', (t) => {
  const pair1 = ['barney', 'fred']
  const pair2 = [36, 40]

  t.deepEqual(
    [...zip(pair1, pair2)],
    [
      ['barney', 36],
      ['fred', 40],
    ],
  )

  const actual = [...zip(pair1, pair2)]

  t.deepEqual(
    [...zip(actual[0] as typeof pair1, actual[1] as typeof pair2)],
    [pair1, pair2],
  )
})

test('zip#should work with tuples of different lengths', (t) => {
  const pair1 = ['barney', 36]
  const pair2 = ['fred', 40, false]

  t.deepEqual(
    [...zip(pair1, pair2)],
    [
      ['barney', 'fred'],
      [36, 40],
    ],
  )
})
