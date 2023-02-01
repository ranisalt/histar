import test from 'ava'
import {zip} from '..'

test('should work with 2-tuples', (t) => {
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

test('should work with tuples of different lengths', (t) => {
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
