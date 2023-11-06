import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {any, some} from '../some.mjs'

describe('some', () => {
  it('should return `true` if `predicate` returns truthy for any element', () => {
    assert(some([false, 1, ''], Boolean))
    assert(some([null, 'a', 0], Boolean))
  })

  it('should return `false` for empty collections', () => {
    assert(!some([], (x) => x))
  })

  it('should return `true` as soon as `predicate` returns truthy', () => {
    let count = 0

    assert(
      some([null, true, null], (value) => {
        count++
        return Boolean(value)
      }),
    )

    assert.equal(count, 2)
  })

  it('should return `false` if `predicate` returns falsey for all elements', () => {
    assert(!some([false, false, false], Boolean))
    assert(!some([null, 0, ''], Boolean))
  })
})

describe('any', () => {
  it('should be aliased to `some', () => {
    assert.equal(any, some)
  })
})
