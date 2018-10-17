
# [ESToolbox](https://github.com/dbtedman/estoolbox)

[![Build Status](https://img.shields.io/travis/dbtedman/estoolbox.svg?label=tests)](https://travis-ci.org/dbtedman/estoolbox)
[![NPM Version](https://img.shields.io/npm/v/estoolbox.svg?label=npm&colorB=ff803a)](https://www.npmjs.com/package/estoolbox)
[![NPM Version](https://img.shields.io/npm/v/estoolbox.svg?label=yarn&colorB=ff803a)](https://yarnpkg.com/en/package/estoolbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-ff803a.svg)](LICENSE.md)

A collection of tools intended to augment the development of Modern JS targeted applications.

## Where do I start?

1\. Install the package.

```bash
# NPM
npm install estoolbox --save-dev --save-exact

# Yarn
yarn add estoolbox --dev --exact
```

2\. Import and use the desired component.

### [Affix](src/js/affix.js)

Provides the ability to affix content to the top of the window on scroll.

```javascript
import {Affix} from "estoolbox";

Affix.top(".top-nav", ".content");
```

```scss
@import "estoolbox/affix";

.my-nav {
  @include affix();
  height: 300px;
}

.my-content {
  @include affix-buffer(300px);
}
```

> This scss example assumes you have added estoolbox to your load path, such that estoolbox maps to associated the node_modules directory.

### [Router](src/js/router.js)

Provides the ability to perform actions based on changes in the URL hash.

```javascript
import {Router} from "estoolbox";

Router.when("/about", () => {
  // Show the about route content.
});

Router.when("/person/:username", (route) => {
  const username = route.variables.username;
  // Show the person content for this user.
});
```

## Want to lean more?

* See our [Contributing Guide](CONTRIBUTING.md) for details on how this repository is developed.
* See our [Changelog](CHANGELOG.md) for details on which features, improvements, and bug fixes have been implemented
* See our [License](LICENSE.md) for details on how you can use the code in this repository.

