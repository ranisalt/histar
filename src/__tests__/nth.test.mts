import {describe, expect, it} from 'vitest'
import {enumerate} from '../enumerate.mjs'
import {map} from '../map.mjs'
import {nth} from '../nth.mjs'

describe('nth', () => {
  it('should get the nth element of `array`', () => {
    expect([
      ...map(enumerate(['a', 'b', 'c', 'd']), ([index]) =>
        nth(['a', 'b', 'c', 'd'], index),
      ),
    ]).toEqual(['a', 'b', 'c', 'd'])
  })

  it('should return `undefined` for empty arrays', () => {
    expect(nth<unknown>([], 1)).toBeUndefined()
  })

  it('should return `undefined` for non-indexes', () => {
    const array = [1, 2]
    const values = [Number.POSITIVE_INFINITY, array.length]
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const expected = [...map(values, () => {})]

    array[-1] = 3

    expect([...map(values, (n) => nth(array, n))]).toEqual(expected)
  })
})
