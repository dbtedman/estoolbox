
# Analytics

Create custom Google Analytics events via Google Tag Manager.

```javascript
import {Analytics} from "estoolbox";

Analytics.sendEvent({
  category: "Home Page",
  action: "Search",
  label: "A search query",
  then: () => {
    // TODO: Do something now.
  }
});
```

> To make this functionality work, you will need to first setup Tag Manager to correctly proxy event data to Google Analytics.
