import test from 'ava'
import {all, every} from '..'

test('should return `true` if `predicate` returns truthy for all elements', (t) => {
  t.true(every([true, 1, 'a'], Boolean))
})

test('should return `true` for empty collections', (t) => {
  t.true(every([], Boolean))
  t.true(every('', Boolean))
})

test('should return `false` as soon as `predicate` returns falsey', (t) => {
  let count = 0

  t.false(
    every([true, null, true], (value) => {
      count++
      return Boolean(value)
    }),
  )

  t.is(count, 2)
})

test('should work with collections of `undefined` values (test in IE < 9)', (t) => {
  t.false(every([undefined, undefined, undefined], Boolean))
})

test('should be aliased to `all`', (t) => {
  t.is(every, all)
})
