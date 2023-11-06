import {describe, expect, it} from 'vitest'
import {repeat} from '../repeat.mjs'

describe('repeat', () => {
  it('should repeat the given element the specified number of times', () => {
    expect([...repeat('a', 3)]).toEqual(['a', 'a', 'a'])
  })

  it('should return an empty array for zero `n`', () => {
    expect([...repeat('a', 0)]).toEqual([])
  })
})
