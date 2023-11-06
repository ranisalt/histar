import {describe, expect, it} from 'vitest'
import {takeWhile} from '../take-while.mjs'

describe('takeWhile', () => {
  it('should take the first two elements', () => {
    expect([...takeWhile([1, 2, 3], (x) => x <= 2)]).toEqual([1, 2])
  })

  it('should return an empty array when predicate always returns false', () => {
    expect([...takeWhile([1, 2, 3], () => false)]).toEqual([])
  })

  it('should return all elements when predicate always returns true', () => {
    expect([...takeWhile([1, 2, 3], () => true)]).toEqual([1, 2, 3])
  })
})
