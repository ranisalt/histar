import {describe, expect, it} from 'vitest'
import {any, some} from '../some.mjs'

describe('some', () => {
  it('should return `true` if `predicate` returns truthy for any element', () => {
    expect(some([false, 1, ''], Boolean)).toBeTruthy()
    expect(some([null, 'a', 0], Boolean)).toBeTruthy()
  })

  it('should return `false` for empty collections', () => {
    expect(some([], (x) => x)).toBeFalsy()
  })

  it('should return `true` as soon as `predicate` returns truthy', () => {
    let count = 0

    expect(
      some([null, true, null], (value) => {
        count++
        return Boolean(value)
      }),
    )

    expect(count).toBe(2)
  })

  it('should return `false` if `predicate` returns falsey for all elements', () => {
    expect(some([false, false, false], Boolean)).toBeFalsy()
    expect(some([null, 0, ''], Boolean)).toBeFalsy()
  })
})

describe('any', () => {
  it('should be aliased to `some', () => {
    expect(any).toBe(some)
  })
})
