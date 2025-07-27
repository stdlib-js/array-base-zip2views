<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zip2views

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Zip one or more arrays to an array of composite views.



<section class="usage">

## Usage

To use in Observable,

```javascript
zip2views = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zip2views@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var zip2views = require( 'path/to/vendor/umd/array-base-zip2views/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zip2views@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.zip2views;
})();
</script>
```

#### zip2views( arrays, labels )

Zips one or more arrays to an array of composite views.

```javascript
var x = [ 1, 2, 3 ];
var y = [ 'a', 'b', 'c' ];

var labels = [ 'x', 'y' ];

var z = zip2views( [ x, y ], labels );
// returns [ <Object>, <Object>, <Object> ]

var v0 = z[ 0 ].toJSON();
// returns { 'x': 1, 'y': 'a' }

var v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'b' }

var v2 = z[ 2 ].toJSON();
// returns { 'x': 3, 'y': 'c' }

// Mutate one of the input arrays:
x[ 0 ] = 5;

v0 = z[ 0 ].toJSON();
// returns { 'x': 5, 'y': 'a' }

// Set a view property:
z[ 1 ].y = 'beep';

v1 = z[ 1 ].toJSON();
// returns { 'x': 2, 'y': 'beep' }

var y1 = y.slice();
// returns [ 'a', 'beep', 'c' ]
```

The function supports the following parameters:

-   **arrays**: list of arrays to zip.
-   **labels**: list of array labels.

Each element in the returned array is a class instance having prototype properties corresponding to the list of array labels. As demonstrated in the example above, to convert an element to a regular object, invoke an element's `toJSON` method. Note, however, that the object returned by an element's `toJSON` method no longer shares the same memory as the provided input arrays.

</section>

<!-- /.usage -->

<section class="notes">

-   The function assumes that the list of arrays to be zipped all have the same length.
-   The number of provided array labels should equal the number of arrays to be zipped.
-   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an input array or a view will mutate the other.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zip2views@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = zeroTo( 10 );
var y = discreteUniform( x.length, -100, 100 );

var labels = [ 'x', 'y' ];

var out = zip2views( [ x, y ], labels );
// returns [...]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-zip2views.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-zip2views

[test-image]: https://github.com/stdlib-js/array-base-zip2views/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-zip2views/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-zip2views/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-zip2views?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-zip2views.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-zip2views/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-zip2views/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-zip2views/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-zip2views/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-zip2views/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-zip2views/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-zip2views/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-zip2views/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-zip2views/main/LICENSE

</section>

<!-- /.links -->
