/* eslint-disable prefer-rest-params */
import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {isArrayLike, isIterable} from '../utils.mjs'

describe('isArrayLike', () => {
  it('should return true for arrays', () => {
    assert(isArrayLike([1, 2, 3]))
  })

  it('should return true for strings', () => {
    assert(isArrayLike('abc'))
  })

  it('should return true for arguments', function (_, ...args) {
    assert(isArrayLike(arguments))
    assert(isArrayLike(args))
  })

  it('should return false for objects with invalid length', () => {
    assert(!isArrayLike({length: 'abc'}))
    assert(!isArrayLike({length: -1}))
    assert(!isArrayLike({length: Number.MAX_SAFE_INTEGER + 1}))
  })

  it('should return false for non-array-like objects', () => {
    assert(!isArrayLike({}))
    assert(!isArrayLike(null))
    assert(!isArrayLike(undefined))
    assert(!isArrayLike(1))
    assert(!isArrayLike(true))
    assert(!isArrayLike(false))
    assert(!isArrayLike(() => {}))
    assert(!isArrayLike(/regex/))
    assert(!isArrayLike(new Date()))
    assert(!isArrayLike(new Error('hello')))
    assert(!isArrayLike(new Map()))
    assert(!isArrayLike(new Set()))
    assert(!isArrayLike(new WeakMap()))
    assert(!isArrayLike(new WeakSet()))
    assert(!isArrayLike(new Promise(() => {})))
  })
})

describe('isIterable', () => {
  it('should return true for array-like objects', function (_, ...args) {
    assert(isIterable([1, 2, 3]))
    assert(isIterable('abc'))
    assert(isIterable(arguments))
    assert(isIterable(args))
  })

  it('should return true for generators', () => {
    function* generator() {
      yield 1
    }

    assert(isIterable(generator()))
  })

  it('should return false for non-iterable objects', () => {
    assert(!isIterable({}))
    assert(!isIterable(null))
    assert(!isIterable(undefined))
    assert(!isIterable(1))
    assert(!isIterable(true))
    assert(!isIterable(false))
    assert(!isIterable(() => {}))
    assert(!isIterable(/regex/))
    assert(!isIterable(new Date()))
    assert(!isIterable(new Error('hello')))
    assert(!isIterable(new WeakMap()))
    assert(!isIterable(new WeakSet()))
    assert(!isIterable(new Promise(() => {})))
  })
})
