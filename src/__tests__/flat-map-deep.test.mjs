import {describe, expect, it} from 'vitest'
import {flatMapDeep} from '../flat-map-deep.mjs'

const duplicate = (n) => [n, n]

describe('flatMapDeep', () => {
  it('should map values in `array` to a new flattened array', () => {
    const array = [1, 2, 3, 4]

    expect([...flatMapDeep(array, duplicate)]).toEqual(
      array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY)
    )
  })

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]]

    expect([...flatMapDeep(array, duplicate)]).toEqual([])
  })

  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]]

    expect([...flatMapDeep(array, duplicate)]).toEqual(
      array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY)
    )
  })
})
