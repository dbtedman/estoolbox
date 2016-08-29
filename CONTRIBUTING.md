
# Contributing

A guide for contributing to this repository which extends the [README.md](README.md) file. 

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

## Updating Docs

```bash
gem install github-pages

cd docs/

jekyll build

jekyll serve
```

## Releasing

Based on the [NPM Publishing Guide](https://docs.npmjs.com/getting-started/publishing-npm-packages), after updating the current version, run the following command:

```
npm publish
```
