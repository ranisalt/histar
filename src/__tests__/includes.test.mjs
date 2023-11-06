import {describe, expect, it} from 'vitest'
import {includes} from '../includes.mjs'

describe('includes', () => {
  it('should return `true` for matched values', () => {
    expect(includes([1, 2, 3, 4], 3)).toBeTruthy()
    expect(includes('1234', '3')).toBeTruthy()
  })

  it('should return `false` for unmatched values', () => {
    expect(includes([1, 2, 3, 4], 5)).toBeFalsy()
    expect(includes('1234', '5')).toBeFalsy()
  })
})
