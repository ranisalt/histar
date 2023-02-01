import test from 'ava'
import {countBy} from '..'

const array = [6.1, 4.2, 6.3]

test('should transform keys by `iteratee`', (t) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  t.deepEqual(countBy(array, Math.floor), {4: 1, 6: 2})
})
