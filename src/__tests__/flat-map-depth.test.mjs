import {describe, expect, it} from 'vitest'
import {flatMapDepth} from '../flat-map-depth.mjs'

const duplicate = (n) => [n, n]

describe('flatMapDepth', () => {
  it('should support flattening of nested arrays#with a depth of 1', () => {
    const array = [1, [2, [3, [4]], 5]]
    // Const expected = [1, 1, 2, 2, [3, [4]], [3, [4]], 5, 5];
    expect([...flatMapDepth(array, duplicate, 1)]).toEqual(
      array.flatMap((value) => duplicate(value))
    )
  })

  it('should support flattening of nested arrays#with a depth of 2', () => {
    const array = [1, [2, [3, [4]], 5]]
    // Const expected = [1, 1, 2, 2, 3, 3, [4], [4], 5, 5];
    expect([...flatMapDepth(array, duplicate, 2)]).toEqual(
      array.map((value) => duplicate(value)).flat(2)
    )
  })

  it('should work with empty arrays#with a depth of 1', () => {
    const array = [[], [[]], [[], [[[]]]]]
    // Const expected = [[], [], [], [], [[[]]], [[[]]]];
    expect([...flatMapDepth(array, duplicate, 1)]).toEqual(
      array.flatMap((value) => duplicate(value))
    )
  })

  it('should work with empty arrays#with a depth of 2', () => {
    const array = [[], [[]], [[], [[[]]]]]
    // Const expected = [[[]], [[]], [[]], [[]]];
    expect([...flatMapDepth(array, duplicate, 2)]).toEqual(
      array.map((value) => duplicate(value)).flat(2)
    )
  })

  it('should treat a `depth` of < `1` as a shallow clone', () => {
    const array = [1, [2, [3, [4]], 5]]

    expect([...flatMapDepth(array, duplicate, -1)]).toEqual(
      array.map((value) => duplicate(value))
    )
    expect([...flatMapDepth(array, duplicate, 0)]).toEqual(
      array.map((value) => duplicate(value))
    )
  })
})
