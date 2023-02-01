import test from 'ava'
import {groupBy} from '..'

test('should group values by `key`', (t) => {
  t.deepEqual(
    [...groupBy([1.2, 2.1, 2.3], Math.floor)],
    [
      [1, [1.2]],
      [2, [2.1, 2.3]],
    ],
  )
})
