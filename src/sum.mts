import {reduce} from './reduce.mjs'

/**
 * Computes the sum of the values in `iterable`.
 *
 * @param iterable - The iterable to iterate over.
 * @returns Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
export function sum(iterable: Iterable<bigint>): bigint | undefined
export function sum(iterable: Iterable<bigint>, start: bigint): bigint
export function sum(iterable: Iterable<number>): number | undefined
export function sum(iterable: Iterable<number>, start: number): number
export function sum(iterable: Iterable<string>): string | undefined
export function sum(iterable: Iterable<string>, start: string): string

export function sum<T extends bigint | number | string>(
  iterable: Iterable<T>,
  start?: T,
) {
  return reduce(
    iterable,
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (accumulator: any, value: any) => (accumulator + value) as T,
    start,
  )
}
