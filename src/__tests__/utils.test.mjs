/* eslint-disable @typescript-eslint/no-empty-function,prefer-rest-params */
import {describe, expect, it} from 'vitest'
import {isArrayLike, isIterable} from '../utils.mjs'

describe('utils', () => {
  it('isArrayLike#should return true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).toBeTruthy()
  })

  it('isArrayLike#should return true for strings', () => {
    expect(isArrayLike('abc')).toBeTruthy()
  })

  it('isArrayLike#should return true for arguments', function (_, ...args) {
    expect(isArrayLike(arguments)).toBeTruthy()
    expect(isArrayLike(args)).toBeTruthy()
  })

  it('isArrayLike#should return false for objects with invalid length', () => {
    expect(isArrayLike({length: 'abc'})).toBeFalsy()
    expect(isArrayLike({length: -1})).toBeFalsy()
    expect(isArrayLike({length: Number.MAX_SAFE_INTEGER + 1})).toBeFalsy()
  })

  it('isArrayLike#should return false for non-array-like objects', () => {
    expect(isArrayLike({})).toBeFalsy()
    expect(isArrayLike(null)).toBeFalsy()
    expect(isArrayLike(undefined)).toBeFalsy()
    expect(isArrayLike(1)).toBeFalsy()
    expect(isArrayLike(true)).toBeFalsy()
    expect(isArrayLike(false)).toBeFalsy()
    expect(isArrayLike(() => {})).toBeFalsy()
    expect(isArrayLike(/regex/)).toBeFalsy()
    expect(isArrayLike(new Date())).toBeFalsy()
    expect(isArrayLike(new Error('hello'))).toBeFalsy()
    expect(isArrayLike(new Map())).toBeFalsy()
    expect(isArrayLike(new Set())).toBeFalsy()
    expect(isArrayLike(new WeakMap())).toBeFalsy()
    expect(isArrayLike(new WeakSet())).toBeFalsy()
    expect(isArrayLike(new Promise(() => {}))).toBeFalsy()
  })

  it('isIterable#should return true for array-like objects', function (_, ...args) {
    expect(isIterable([1, 2, 3])).toBeTruthy()
    expect(isIterable('abc')).toBeTruthy()
    expect(isIterable(arguments)).toBeTruthy()
    expect(isIterable(args)).toBeTruthy()
  })

  it('isIterable#should return true for generators', () => {
    function* generator() {
      yield 1
    }

    expect(isIterable(generator())).toBeTruthy()
  })

  it('isIterable#should return false for non-iterable objects', () => {
    expect(isIterable({})).toBeFalsy()
    expect(isIterable(null)).toBeFalsy()
    expect(isIterable(undefined)).toBeFalsy()
    expect(isIterable(1)).toBeFalsy()
    expect(isIterable(true)).toBeFalsy()
    expect(isIterable(false)).toBeFalsy()
    expect(isIterable(() => {})).toBeFalsy()
    expect(isIterable(/regex/)).toBeFalsy()
    expect(isIterable(new Date())).toBeFalsy()
    expect(isIterable(new Error('hello'))).toBeFalsy()
    expect(isIterable(new WeakMap())).toBeFalsy()
    expect(isIterable(new WeakSet())).toBeFalsy()
    expect(isIterable(new Promise(() => {}))).toBeFalsy()
  })
})
