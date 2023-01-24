import {filter} from './filter'
import {map} from './map'
import {times} from './times'

export function* chunk<T>(
  iterable: Iterable<T>,
  size: number,
): Generator<Iterable<T>> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done) {
    // FIXME: yield generators instead of arrays
    yield [
      ...map(
        filter(
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          times(size, () => {
            const previousResult = result
            result = iterator.next()
            return previousResult
          }),
          (result) => !result.done,
        ),
        ({value}) => value as T,
      ),
    ]
  }
}
