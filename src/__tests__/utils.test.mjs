/* eslint-disable prefer-rest-params */
import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {assertIterable} from '../utils.mjs'

describe('assertIterable', () => {
  it('should not throw for array-like objects', function (_, ...args) {
    assert.doesNotThrow(() => assertIterable([1, 2, 3]))
    assert.doesNotThrow(() => assertIterable('abc'))
    assert.doesNotThrow(() => assertIterable(arguments))
    assert.doesNotThrow(() => assertIterable(args))
  })

  it('should not throw for generators', () => {
    function* generator() {
      yield 1
    }

    assert.doesNotThrow(() => assertIterable(generator()))
  })

  it('should throw for non-iterable objects', () => {
    assert.throws(() => assertIterable({}))
    assert.throws(() => assertIterable(null))
    assert.throws(() => assertIterable(undefined))
    assert.throws(() => assertIterable(1))
    assert.throws(() => assertIterable(true))
    assert.throws(() => assertIterable(false))
    assert.throws(() => assertIterable(() => {}))
    assert.throws(() => assertIterable(/regex/))
    assert.throws(() => assertIterable(new Date()))
    assert.throws(() => assertIterable(new Error('hello')))
    assert.throws(() => assertIterable(new WeakMap()))
    assert.throws(() => assertIterable(new WeakSet()))
    assert.throws(() => assertIterable(new Promise(() => {})))
  })
})
