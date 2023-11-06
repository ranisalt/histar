import {describe, expect, it} from 'vitest'
import {all, every} from '../every.mjs'

describe('every', () => {
  it('should return `true` if `predicate` returns truthy for all elements', () => {
    expect(every([true, 1, 'a'], Boolean)).toBeTruthy()
  })

  it('should return `true` for empty collections', () => {
    expect(every([], Boolean)).toBeTruthy()
    expect(every('', Boolean)).toBeTruthy()
  })

  it('should return `false` as soon as `predicate` returns falsey', () => {
    let count = 0

    expect(
      every([true, null, true], (value) => {
        count++
        return Boolean(value)
      }),
    ).toBeFalsy()

    expect(count).toBe(2)
  })

  it('should work with collections of `undefined` values (test in IE < 9)', () => {
    expect(every([undefined, undefined, undefined], Boolean)).toBeFalsy()
  })
})

describe('all', () => {
  it('should be aliased to `every`', () => {
    expect(all).toBe(every)
  })
})
