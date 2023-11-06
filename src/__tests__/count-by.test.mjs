import {describe, expect, it} from 'vitest'
import {countBy} from '../count-by.mjs'

const array = [6.1, 4.2, 6.3]

describe('countBy', () => {
  it('should transform keys by `iteratee`', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    expect(countBy(array, Math.floor)).toEqual({4: 1, 6: 2})
  })
})
