import {describe, expect, it} from 'vitest'
import {filter} from '../filter.mjs'

const array = [1, 2, 3, 4, 5]

describe('filter', () => {
  it('should return elements `predicate` returns truthy for', () => {
    expect([...filter(array, (n) => n % 2 === 0)]).toEqual([2, 4])
  })

  it('should return an empty array when predicate always returns false', () => {
    expect([...filter(array, () => false)]).toEqual([])
  })

  it('should return all elements when predicate always returns true', () => {
    expect([...filter(array, () => true)]).toEqual([1, 2, 3, 4, 5])
  })
})
