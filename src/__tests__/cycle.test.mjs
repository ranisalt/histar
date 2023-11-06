import {describe, expect, it} from 'vitest'
import {cycle} from '../cycle.mjs'
import {range} from '../range.mjs'
import {take} from '../take.mjs'

describe('cycle', () => {
  it('should cycle through the values of an array', () => {
    expect([...take(cycle([1, 2]), 6)]).toEqual([1, 2, 1, 2, 1, 2])
  })

  it('should cycle through the values of a string', () => {
    expect([...take(cycle('ab'), 6)]).toEqual(['a', 'b', 'a', 'b', 'a', 'b'])
  })

  it('should cycle through the values of an iterable', () => {
    expect([...take(cycle(range(3)), 6)]).toEqual([0, 1, 2, 0, 1, 2])
  })
})
