
# Contributing

A guide for contributing to this repository which extends the [README.md](README.md) file. 

## Contributors

* [Daniel Tedman](https://danieltedman.com)

## Dependencies

* [Node (v6)](https://nodejs.org)
* [NPM (v3)](https://www.npmjs.com)

## Testing

See [https://travis-ci.org/dbtedman/estoolbox](https://travis-ci.org/dbtedman/estoolbox) for CI results, run on each commit.

### Static Analysis

Javascript linting support provided by [ESLint](http://eslint.org/) based on rules defined in `.eslintrc.yml` and Sass linting support provided by [Sass Lint](https://www.npmjs.com/package/sass-lint) based on rules defined in `.sass-lint.yml`

```bash
npm run test:lint
```

### Unit

BDD based testing provided by [Jasmine](http://jasmine.github.io), run using [Karma](http://karma-runner.github.io) based on specifications defined in `/spec`.

```bash
npm run test:unit
```

## Releasing

Based on the [NPM Publishing Guide](https://docs.npmjs.com/getting-started/publishing-npm-packages), after updating the current version, run the following command:

```
npm publish
```

See [npm-developers](https://docs.npmjs.com/misc/developers) for a comprehensive developer guide to NPM.
