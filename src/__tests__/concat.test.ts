import test from 'ava'
import {concat} from '..'

test('should shallow clone `array`', (t) => {
  const array = [1, 2, 3]

  t.deepEqual([...concat(array)], array)
})

test('should concat arrays', (t) => {
  const array = [1]

  t.deepEqual([...concat<any>(array, [3], [[4]])], [1, 3, [4]])
})

test('should treat sparse arrays as dense', (t) => {
  const expected = []

  expected.push(undefined, undefined)

  t.deepEqual(
    [...concat(Array.from({length: 1}), Array.from({length: 1}))],
    expected,
  )
})
