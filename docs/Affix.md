
# [Affix](src/js/affix.js)

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
