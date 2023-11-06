import {describe, expect, it} from 'vitest'
import {zip} from '../zip.mjs'

describe('zip', () => {
  it('should work with 2-tuples', () => {
    const pair1 = ['barney', 'fred']
    const pair2 = [36, 40]

    expect([...zip(pair1, pair2)]).toEqual([
      ['barney', 36],
      ['fred', 40],
    ])

    const actual = [...zip(pair1, pair2)]

    expect([...zip(actual[0], actual[1])]).toEqual([pair1, pair2])
  })

  it('should work with tuples of different lengths', () => {
    const pair1 = ['barney', 36]
    const pair2 = ['fred', 40, false]

    expect([...zip(pair1, pair2)]).toEqual([
      ['barney', 'fred'],
      [36, 40],
    ])
  })
})
