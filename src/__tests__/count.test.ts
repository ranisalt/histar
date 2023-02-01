import test from 'ava'
import {count} from '..'

test('should count values by identity', (t) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  t.deepEqual(count('AAAABBBCCDAABBB'), {A: 6, B: 6, C: 2, D: 1})
})
