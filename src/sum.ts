import {reduce} from './reduce'

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
export const sum: {
  (iterable: Iterable<bigint>): bigint | undefined
  (iterable: Iterable<bigint>, start: bigint): bigint
  (iterable: Iterable<number>): number | undefined
  (iterable: Iterable<number>, start: number): number
  (iterable: Iterable<string>): string | undefined
  (iterable: Iterable<string>, start: string): string
} = <T extends bigint | number | string>(iterable: Iterable<T>, start?: T) =>
  reduce(
    iterable,
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (accumulator: any, value: any) => (accumulator + value) as T,
    start,
  )
