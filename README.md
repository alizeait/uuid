# @alizeait/uuid ![Check](https://github.com/alizeait/uuid/workflows/Check/badge.svg)

> A tiny (~260B) and super [super fast](#benchmarks) RFC complaiant v4 UUID generator.

## Usage

```js
import { v4 } from "@alizeait/uuid";

v4(); //  '9c77776a-6ac7-47d4-94b7-b73c3cecec4b'
```

## Benchmarks

```
uuid/v4               x 1,006,107 ops/sec ±1.04% (82 runs sampled)

@alizeait/uuid        x 4,262,898 ops/sec ±0.98% (87 runs sampled)

nanoid                x 1,779,066 ops/sec ±1.58% (91 runs sampled)


RFC UUID v4 validation:

uuid/v4               ✔

@alizeait/uuid        ✔

nanoid                ✘

```

> Running on Node.js v12.13.0, 64-bit OS, Intel(R) Core(TM) i5-6600K CPU @ 3.50GHz, 16.0 GB RAM
