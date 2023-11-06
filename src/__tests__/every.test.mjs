import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {all, every} from '../every.mjs'

describe('every', () => {
  it('should return `true` if `predicate` returns truthy for all elements', () => {
    assert(every([true, 1, 'a'], Boolean))
  })

  it('should return `true` for empty collections', () => {
    assert(every([], Boolean))
    assert(every('', Boolean))
  })

  it('should return `false` as soon as `predicate` returns falsey', () => {
    let count = 0

    assert(
      !every([true, null, true], (value) => {
        count++
        return Boolean(value)
      }),
    )

    assert.equal(count, 2)
  })

  it('should work with collections of `undefined` values (test in IE < 9)', () => {
    assert(!every([undefined, undefined, undefined], Boolean))
  })
})

describe('all', () => {
  it('should be aliased to `every`', () => {
    assert.equal(all, every)
  })
})
