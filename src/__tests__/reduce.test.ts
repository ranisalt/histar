import test from 'ava'
import {reduce} from '..'

const array = [1, 2, 3]

test('reduce#should use the first element of a collection as the default `accumulator`', (t) => {
  t.is(
    reduce(array, (x) => x),
    1,
  )
})

test('reduce#should return initial value for empty arrays', (t) => {
  t.is(
    reduce<unknown>([], (x) => x),
    undefined,
  )
})

test('reduce#should provide correct `iteratee` arguments when iterating an array', (t) => {
  let args: any

  reduce(
    array,
    (...iterArgs) => {
      args ||= iterArgs
      return 0
    },
    0,
  )

  t.deepEqual(args, [0, 1])

  args = undefined
  reduce(array, (...iterArgs) => {
    args ||= iterArgs
    return iterArgs[0]
  })

  t.deepEqual(args, [1, 2])
})
