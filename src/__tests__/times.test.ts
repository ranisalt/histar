import test from 'ava'
import {times} from '..'

test('should provide correct `iteratee` arguments', (t) => {
  let args: any

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  ;[
    ...times(1, (...iterArgs) => {
      args ||= iterArgs
    }),
  ]

  t.deepEqual(args, [0])
})

test('should return an array of the results of each `iteratee` execution', (t) => {
  t.deepEqual([...times(3, (x) => x * 2)], [0, 2, 4])
})

test('should return an empty array for zero `n`', (t) => {
  t.deepEqual([...times(0, (x) => x)], [])
})
