import test from 'ava'
import {zipWith} from '..'

test('should zip arrays combining grouped elements with `iteratee`', (t) => {
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  t.deepEqual([...zipWith(array1, array2, (a, b) => a + b)], [5, 7, 9])
})

test('should provide correct `iteratee` arguments', (t) => {
  let args: any

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  ;[
    ...zipWith([1, 2], [3, 4], (...iterArgs) => {
      args ||= iterArgs
    }),
  ]

  t.deepEqual(args, [1, 3])
})
