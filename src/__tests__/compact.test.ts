import test from 'ava'
import {compact} from '..'

/** Used to provide falsey values to methods. */
// eslint-disable-next-line no-sparse-arrays
export const falsey = [, null, undefined, false, 0, Number.NaN, '']

test('should filter falsey values', (t) => {
  const array = ['0', '1', '2']

  t.deepEqual([...compact([...falsey, ...array])], array)
})
