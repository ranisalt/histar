import {describe, expect, it} from 'vitest'
import {dropWhile} from '../drop-while.mjs'

const array = [1, 2, 3]

describe('dropWhile', () => {
  it('should drop the first two elements', () => {
    expect([...dropWhile(array, (x) => x <= 2)]).toEqual([3])
  })

  it('should return all elements when predicate always returns false', () => {
    expect([...dropWhile(array, () => false)]).toEqual([1, 2, 3])
  })

  it('should return an empty array when predicate always returns true', () => {
    expect([...dropWhile(array, () => true)]).toEqual([])
  })
})
