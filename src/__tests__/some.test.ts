import test from 'ava'
import {any, some} from '..'

test('should return `true` if `predicate` returns truthy for any element', (t) => {
  t.true(some([false, 1, ''], Boolean))
  t.true(some([null, 'a', 0], Boolean))
})

test('should return `false` for empty collections', (t) => {
  t.false(some([], (x) => x))
})

test('should return `true` as soon as `predicate` returns truthy', (t) => {
  let count = 0

  t.true(
    some([null, true, null], (value) => {
      count++
      return Boolean(value)
    }),
  )

  t.is(count, 2)
})

test('should return `false` if `predicate` returns falsey for all elements', (t) => {
  t.false(some([false, false, false], Boolean))
  t.false(some([null, 0, ''], Boolean))
})

test('should be aliased to `any', (t) => {
  t.is(some, any)
})
