import {describe, expect, it} from 'vitest'
import {count} from '../count.mjs'

describe('count', () => {
  it('should count values by identity', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    expect(count('AAAABBBCCDAABBB')).toEqual({A: 6, B: 6, C: 2, D: 1})
  })
})
