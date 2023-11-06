import {describe, expect, it} from 'vitest'
import {range} from '../range.mjs'

describe('range', () => {
  it('should create an iterable of numbers', () => {
    expect([...range(10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect([...range(10, 15)]).toEqual([10, 11, 12, 13, 14])
    expect([...range(10, 20, 3)]).toEqual([10, 13, 16, 19])
  })

  it('should generate values on demand', () => {
    expect(() => {
      const r = range(Number.POSITIVE_INFINITY)
      expect(r[0]).toBe(0)
    }).not.toThrow()
  })

  it('should be an array-like object#should have a length property', () => {
    expect(range(10).length).toBe(10)
    expect(range(10, 15).length).toBe(5)
    expect(range(10, 20, 3).length).toBe(4)
  })

  it('should be an array-like object#should work as a parameter to Array.from', () => {
    expect(() => [...range(10)]).not.toThrow()
  })

  it('should adhere to the iterator protocol', () => {
    const r = range(10, 13)
    expect(r.next()).toEqual({value: 10, done: false})
    expect(r.next()).toEqual({value: 11, done: false})
    expect(r.next()).toEqual({value: 12, done: false})
    expect(r.next()).toEqual({value: undefined, done: true})
  })

  it('should infer the sign of `step` when only `end` is given', () => {
    expect([...range(4)]).toEqual([0, 1, 2, 3])
    expect([...range(-4)]).toEqual([0, -1, -2, -3])
  })

  it('should infer the sign of `step` when only `start` and `end` are given', () => {
    expect([...range(1, 5)]).toEqual([1, 2, 3, 4])
    expect([...range(5, 1)]).toEqual([5, 4, 3, 2])
  })

  it('should work with a `start`, `end`, and `step`', () => {
    expect([...range(0, -4, -1)]).toEqual([0, -1, -2, -3])
    expect([...range(5, 1, -1)]).toEqual([5, 4, 3, 2])
    expect([...range(0, 20, 5)]).toEqual([0, 5, 10, 15])
  })

  it('should work with a `step` larger than `end`', () => {
    expect([...range(1, 5, 20)]).toEqual([1])
  })

  it('should work with a negative `step`', () => {
    expect([...range(0, -4, -1)]).toEqual([0, -1, -2, -3])
    expect([...range(21, 10, -3)]).toEqual([21, 18, 15, 12])
  })

  it('should support `start` of `-0`', () => {
    const [actual] = range(-0, 1)

    expect(1 / actual!).toBe(Number.NEGATIVE_INFINITY)
  })

  it('should be indexable', () => {
    expect(range(10)[2]).toBe(2)
    expect(range(10, 15)[2]).toBe(12)
    expect(range(10, 20, 3)[2]).toBe(16)
    expect(range(Number.POSITIVE_INFINITY)[1e3]).toBe(1e3)
    expect(range(Number.NEGATIVE_INFINITY)[1e3]).toBe(-1e3)
  })

  it('should be indexable from the end', () => {
    expect(range(10)[-2]).toBe(8)
    expect(range(10, 15)[-2]).toBe(13)
    expect(range(10, 20, 3)[-2]).toBe(16)
  })

  it('should not be indexable from the end when the range is infinite', () => {
    expect(range(Number.POSITIVE_INFINITY)[-1e3]).toBeUndefined()
    expect(range(Number.NEGATIVE_INFINITY)[-1e3]).toBeUndefined()
  })

  it('should be reversible', () => {
    expect([...range(10).reverse()]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
    expect([...range(10, 15).reverse()]).toEqual([14, 13, 12, 11, 10])
    expect([...range(10, 20, 3).reverse()]).toEqual([19, 16, 13, 10])
    expect([...range(-4).reverse()]).toEqual([-3, -2, -1, 0])
  })
})
