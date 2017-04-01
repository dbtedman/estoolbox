
# [ESToolbox](https://dbtedman.github.io/estoolbox/) `v0.2.0` [![Build Status](https://travis-ci.org/dbtedman/estoolbox.svg?branch=master)](https://travis-ci.org/dbtedman/estoolbox) [![NPM Version](https://img.shields.io/npm/v/estoolbox.svg)](https://www.npmjs.com/package/estoolbox)

A collection of libraries intended to augment the development of Modern JS (ES6+) targeted applications.

## Is it open?

Yes, it is released under the MIT License, See [LICENSE.md](LICENSE.md).

## Where do I start?

1\. Install the NPM module.

```bash
npm install --save-dev estoolbox
```

2\. Import and use the desired component.

### [Affix](src/affix.js)

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

### [Router](src/router.js)

Provides the ability to perform actions based on changes in the URL hash.

```javascript
import {Router} from "estoolbox";

Router.when("/about", () => {
  // Show the about route content.
});
```

## Want to learn more?

See our [CONTRIBUTING.md](CONTRIBUTING.md) guide for information regarding:

* project contributors
* dependencies
* testing
* releasing

