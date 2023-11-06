import {describe, expect, it} from 'vitest'
import {zipWith} from '../zip-with.mjs'

describe('zipWith', () => {
  it('should zip arrays combining grouped elements with `iteratee`', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]

    expect([...zipWith(array1, array2, (a, b) => a + b)]).toEqual([5, 7, 9])
  })

  it('should provide correct `iteratee` arguments', () => {
    let args: any

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ;[
      ...zipWith([1, 2], [3, 4], (...iterArgs) => {
        args ||= iterArgs
      }),
    ]

    expect(args).toEqual([1, 3])
  })
})
