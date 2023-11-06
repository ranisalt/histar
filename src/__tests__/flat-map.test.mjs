import {describe, expect, it} from 'vitest'
import {flatMap} from '../flat-map.mjs'

const array = [1, 2, 3, 4]

const duplicate = (n) => [n, n]

describe('flatMap', () => {
  it('should map values in `array` to a new flattened array', () => {
    expect([...flatMap(array, duplicate)]).toEqual(
      array.flatMap((value) => duplicate(value))
    )
  })
})
