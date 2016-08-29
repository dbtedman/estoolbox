
# ESToolbox `v0.0.1` [![Build Status](https://travis-ci.org/dbtedman/estoolbox.svg?branch=master)](https://travis-ci.org/dbtedman/estoolbox) [![NPM Version](https://img.shields.io/npm/v/estoolbox.svg)](https://www.npmjs.com/package/estoolbox)

A collection of libraries intended to augment the development of ES2015 targeted applications.

## Contributors

* [Daniel Tedman](http://danieltedman.com)

## Dependencies

* [Node (v6)](https://nodejs.org)
* [NPM (v3)](https://www.npmjs.com)
* Internet Access

## Getting Started

```bash
npm install
```

## Documentation

See the [docs](./docs/) directory.

## Testing

See [https://travis-ci.org/dbtedman/estoolbox](https://travis-ci.org/dbtedman/estoolbox) for CI results.

To run complete test suite:

```bash
npm run test
```

#### Lint

Linting support provided by [ESLint](http://eslint.org/) based on rules defined in `.eslintrc.yml`.

```bash
npm run test:lint
```

### Unit

BDD based testing provided by [Jasmine](http://jasmine.github.io), run using [Karma](http://karma-runner.github.io) based on specifications defined in `/spec`.

```bash
npm run test:unit
```
