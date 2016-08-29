
# Router

Provides interaction controlled by changes in the browsers URL hash.

```javascript
import router from "estoolbox/router";

router.when("/academic/:email", (request) => {
  const email = request.get("email");
  // ...
});

router.start();
```
