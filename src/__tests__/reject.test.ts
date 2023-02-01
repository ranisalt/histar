import test from 'ava'
import {reject} from '..'

test('should return elements the `predicate` returns falsey for', (t) => {
  t.deepEqual([...reject([1, 2, 3], (n) => n % 2 === 0)], [1, 3])
})
