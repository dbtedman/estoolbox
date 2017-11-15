
# Contributing

## Testing

See [https://travis-ci.org/dbtedman/estoolbox](https://travis-ci.org/dbtedman/estoolbox) for CI results, run on each commit.

### Static Analysis

Javascript linting support provided by [ESLint](http://eslint.org/) based on rules defined in `.eslintrc.yml` and Sass linting support provided by [Sass Lint](https://www.npmjs.com/package/sass-lint) based on rules defined in `.sass-lint.yml`

```bash
yarn test:lint
```

### Unit

BDD based testing provided by [Jasmine](http://jasmine.github.io), run using [Karma](http://karma-runner.github.io) based on specifications defined in `/spec`.

```bash
yarn test:unit
```

## Releasing

Based on the [NPM Publishing Guide](https://docs.npmjs.com/getting-started/publishing-npm-packages), after updating the current version, run the following command:

```
yarn publish
```

See [Publishing a Package](https://yarnpkg.com/lang/en/docs/publishing-a-package/) for more information.
