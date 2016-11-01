
# [ESToolbox](https://dbtedman.github.io/estoolbox/) `v0.0.5` [![Build Status](https://travis-ci.org/dbtedman/estoolbox.svg?branch=master)](https://travis-ci.org/dbtedman/estoolbox) [![NPM Version](https://img.shields.io/npm/v/estoolbox.svg)](https://www.npmjs.com/package/estoolbox)

A collection of libraries intended to augment the development of ES2015 targeted applications.

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

### Animated Transcript (preview)

Provides the ability to animate the display of a transcript alongside html5 videos.

### [Carousel](src/carousel.js) (preview)

Provides a responsive continuous image carousel. 

```html
<div class="my-carousel carousel">
  <button class="carousel-move-left"></button>
  <div class="carousel-fixed-container">
    <div class="carousel-flexible-content">
      <ul>
        <li>
          <!-- Your carousel item content here. -->
        </li>
        <!-- ... -->
      </ul>
    </div>
  </div>
  <button class="carousel-move-right"></button>
</div>
```

```javascript
import {Carousel} from "estoolbox";

Carousel.run(".my-carousel");
```

```scss
@import "estoolbox/carousel";

.my-carousel {
  @include carousel();
}

```

### Highlight Words (preview)

Provides the ability to highlight words in a given block of text.

### Media Upload (preview)

Provides the ability to handle drag and drop media uploads.

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

