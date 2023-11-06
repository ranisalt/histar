import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {zip} from '../zip.mjs'

describe('zip', () => {
  it('should work with 2-tuples', () => {
    const pair1 = ['barney', 'fred']
    const pair2 = [36, 40]

    assert.deepEqual(
      [...zip(pair1, pair2)],
      [
        ['barney', 36],
        ['fred', 40],
      ],
    )

    const actual = [...zip(pair1, pair2)]

    assert.deepEqual([...zip(actual[0], actual[1])], [pair1, pair2])
  })

  it('should work with tuples of different lengths', () => {
    const pair1 = ['barney', 36]
    const pair2 = ['fred', 40, false]

    assert.deepEqual(
      [...zip(pair1, pair2)],
      [
        ['barney', 'fred'],
        [36, 40],
      ],
    )
  })
})
