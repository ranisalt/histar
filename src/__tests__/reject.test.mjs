import {describe, expect, it} from 'vitest'
import {reject} from '../reject.mjs'

describe('reject', () => {
  it('should return elements the `predicate` returns falsey for', () => {
    expect([...reject([1, 2, 3], (n) => n % 2 === 0)]).toEqual([1, 3])
  })
})
