// Checks that a value is an array-like object, i.e. has a length property with a valid number.
export function isArrayLike<T>(object: any): object is T[] {
  return (
    object !== undefined &&
    object !== null &&
    typeof object !== 'function' &&
    typeof object.length === 'number' &&
    object.length >= 0 &&
    object.length <= Number.MAX_SAFE_INTEGER
  )
}

// Checks that a value is an iterable object, i.e. has a Symbol.iterator property.
export function isIterable<T>(object: any): object is Iterable<T> {
  return (
    object !== undefined &&
    object !== null &&
    typeof object[Symbol.iterator] === 'function'
  )
}

// Calculates the modulo of n by m, given that % in Javascript is remainder, not modulo.
// Additionaly, make it work for d = +- Infinity, because that results in NaN.
export function modulo(n: number, d: number) {
  return Number.isFinite(d) ? ((n % d) + d) % d : n
}
