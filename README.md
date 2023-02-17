Histar
======

**Histar** is a lightweight JavaScript utility library that provides a collection of functions for working with [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). It is designed as an alternative to libraries like Lodash and Ramda, and it focuses on using iterators to simplify common programming tasks.

Why iterators?
--------------

Iterators are a powerful and flexible way to iterate over collections of data in JavaScript. Unlike arrays, iterators can be used to work with any iterable data structure, including [sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator), [maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator), and more. This allows for more flexibility and reduces the need for array manipulation. By working with iterators, Histar can avoid creating intermediate arrays, which can lead to improved performance and reduced memory usage.

Features
--------

- *Works with iterators, not arrays*: Histar functions are designed to work with any iterable data structure, including arrays, sets, maps, and more. This allows for more flexibility and reduces the need for array manipulation.

- *Efficient and performant*: By working with iterators, Histar can avoid creating intermediate arrays, which can lead to improved performance and reduced memory usage.

- *Simple and easy to use*: Histar provides a consistent and intuitive API that is easy to learn and use. It includes functions for filtering, mapping, reducing, and more.

Installation
------------

You can install Histar using npm or yarn:

```sh
npm install histar
```

or

```sh
yarn add histar
```

Usage
-----

Here are a few examples of how to use Histar:

```js
import { filter, map, reduce } from 'Histar';

const numbers = range(1, 6);

// Filter even numbers
const evens = filter(numbers, (num) => num % 2 === 0);
// evens: [2, 4]

// Double all numbers
const doubled = map(numbers, (num) => num * 2);
// doubled: [2, 4, 6, 8, 10]

// Sum all numbers
const sum = reduce(numbers, (acc, num) => acc + num, 0);
// sum: 15
```

Typescript
----------

Histar includes TypeScript types, providing reliable and robust type safety in your code. The types are included out of the box, with definitions for all functions and options. Using Histar with TypeScript can make your code more reliable, easier to maintain, and less prone to errors.

License
-------

Histar is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more information.
