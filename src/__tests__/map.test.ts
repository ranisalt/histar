import test from 'ava'
import {map} from '..'

test('map#should map values in `collection` to a new array', (t) => {
  t.deepEqual([...map([1, 2], String)], ['1', '2'])
})
