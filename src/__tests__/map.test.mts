import {describe, expect, it} from 'vitest'
import {map} from '../map.mjs'

describe('map', () => {
  it('should map values in `collection` to a new array', () => {
    expect([...map([1, 2], String)]).toEqual(['1', '2'])
  })
})
