import {describe, expect, it} from 'vitest'
import {times} from '../times.mjs'

describe('times', () => {
  it('should provide correct `iteratee` arguments', () => {
    let args

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ;[
      ...times(1, (...iterArgs) => {
        args ||= iterArgs
      }),
    ]

    expect(args).toEqual([0])
  })

  it('should return an array of the results of each `iteratee` execution', () => {
    expect([...times(3, (x) => x * 2)]).toEqual([0, 2, 4])
  })

  it('should return an empty array for zero `n`', () => {
    expect([...times(0, (x) => x)]).toEqual([])
  })
})
