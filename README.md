
# [ESToolbox](https://dbtedman.github.io/estoolbox/)

[![Build Status](https://travis-ci.org/dbtedman/estoolbox.svg?branch=master)](https://travis-ci.org/dbtedman/estoolbox) [![NPM Version](https://img.shields.io/npm/v/estoolbox.svg)](https://www.npmjs.com/package/estoolbox) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

A collection of tools intended to augment the development of [ES2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015) targeted applications.

## Where do I start?

1\. Install the package.

```bash
# NPM
npm install estoolbox --save-dev

# Yarn
yarn add estoolbox --dev
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

---

Created [Down Under](https://en.wikipedia.org/wiki/Australia) by [Daniel Tedman](https://danieltedman.com).

[![Australia](https://danieltedman.com/images/Australia.png)](https://en.wikipedia.org/wiki/Australia)
