import test from 'ava'
import {repeat} from '..'

test('should repeat the given element the specified number of times', (t) => {
  t.deepEqual([...repeat('a', 3)], ['a', 'a', 'a'])
})

test('should return an empty array for zero `n`', (t) => {
  t.deepEqual([...repeat('a', 0)], [])
})
