import {describe, expect, it} from 'vitest'
import {concat} from '../concat.mjs'

describe('concat', () => {
  it('should shallow clone `array`', () => {
    const array = [1, 2, 3]

    expect([...concat(array)]).toEqual(array)
  })

  it('should concat arrays', () => {
    const array = [1]

    expect([...concat(array, [3], [[4]])]).toEqual([1, 3, [4]])
  })

  it('should treat sparse arrays as dense', () => {
    const expected = []

    expected.push(undefined, undefined)

    expect([
      ...concat(Array.from({length: 1}), Array.from({length: 1})),
    ]).toEqual(expected)
  })
})
