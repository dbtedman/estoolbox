
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

Based on [Publishing a Package](https://yarnpkg.com/lang/en/docs/publishing-a-package/) guide.

1\. Update `CHANGELOG.md` with release details, specifying a new release number using [Semantic Versioning Format](http://semver.org/).

2\. Update `package.json` with new release number.

3\. Commit these changes and add new release number tag to this commit.

4\. Create a [pull request](https://help.github.com/articles/about-pull-requests/) to merge these changes into master branch.

5\. Checkout new release number tag locally from master branch.

6\. Login to npm.

```bash
yarn login
```

7\. Publish new package version, specifying the version number.

```bash
yarn publish
```
