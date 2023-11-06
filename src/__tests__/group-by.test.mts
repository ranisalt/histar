import {describe, expect, it} from 'vitest'
import {groupBy} from '../group-by.mjs'

describe('groupBy', () => {
  it('should group values by `key`', () => {
    expect([...groupBy([1.2, 2.1, 2.3], Math.floor)]).toEqual([
      [1, [1.2]],
      [2, [2.1, 2.3]],
    ])
  })
})
