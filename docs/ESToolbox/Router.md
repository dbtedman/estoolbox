
# Router

Provides interaction controlled by changes in the browsers URL hash.

```javascript
import Router from "estoolbox/router";

Router.bind({ to: "hash" });

Router.when("/academic/:email").do((request) => {
  const email = request.get("email");
  // ...
});

Router.start();
```

## Router.bind

*Content to come.*

## Router.when

*Content to come.*

## Router.do

*Content to come.*

## Router.start

*Content to come.*
