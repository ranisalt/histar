/* eslint-disable @typescript-eslint/no-empty-function */
import test from 'ava'
import {isArrayLike, isIterable} from '../utils'

test('isArrayLike#should return true for arrays', (t) => {
  t.true(isArrayLike([1, 2, 3]))
})

test('isArrayLike#should return true for strings', (t) => {
  t.true(isArrayLike('abc'))
})

test('isArrayLike#should return true for arguments', function (t, ...args: any[]) {
  t.true(isArrayLike(arguments))
  t.true(isArrayLike(args))
})

test('isArrayLike#should return false for objects with invalid length', (t) => {
  t.false(isArrayLike({length: 'abc'}))
  t.false(isArrayLike({length: -1}))
  t.false(isArrayLike({length: Number.MAX_SAFE_INTEGER + 1}))
})

test('isArrayLike#should return false for non-array-like objects', (t) => {
  t.false(isArrayLike({}))
  t.false(isArrayLike(null))
  t.false(isArrayLike(undefined))
  t.false(isArrayLike(1))
  t.false(isArrayLike(true))
  t.false(isArrayLike(false))
  t.false(isArrayLike(() => {}))
  t.false(isArrayLike(/regex/))
  t.false(isArrayLike(new Date()))
  t.false(isArrayLike(new Error('hello')))
  t.false(isArrayLike(new Map()))
  t.false(isArrayLike(new Set()))
  t.false(isArrayLike(new WeakMap()))
  t.false(isArrayLike(new WeakSet()))
  t.false(isArrayLike(new Promise(() => {})))
})

test('isIterable#should return true for array-like objects', function (t, ...args: any[]) {
  t.true(isIterable([1, 2, 3]))
  t.true(isIterable('abc'))
  t.true(isIterable(arguments))
  t.true(isIterable(args))
})

test('isIterable#should return true for generators', (t) => {
  function* generator() {
    yield 1
  }

  t.true(isIterable(generator()))
})

test('isIterable#should return false for non-iterable objects', (t) => {
  t.false(isIterable({}))
  t.false(isIterable(null))
  t.false(isIterable(undefined))
  t.false(isIterable(1))
  t.false(isIterable(true))
  t.false(isIterable(false))
  t.false(isIterable(() => {}))
  t.false(isIterable(/regex/))
  t.false(isIterable(new Date()))
  t.false(isIterable(new Error('hello')))
  t.false(isIterable(new WeakMap()))
  t.false(isIterable(new WeakSet()))
  t.false(isIterable(new Promise(() => {})))
})
