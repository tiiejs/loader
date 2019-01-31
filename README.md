## Tiiejs loader
Extension to display loader for Tiiejs framework.

## Install

Extensions need `tiiejs-frames`.

### Webpack

First we need to define alias for Webpack.

```js
// webpack.config.js

const path = require('path');

module.exports = (environment) => {
    return {
        // ...
        resolve : {
            alias : {
                // ...
                "Tiie/Loader" : "tiiejs-loader/src",
                "Tiie" : "tiiejs/src",
            }
        }
    }
};
```

Then plug extension and define component.

```js
import App from "Tiie/App";
import extensionLoader from "Tiie/Loader/extension"

// ...
let app = new App(jQuery("body"));

app.plugin(extensionLoader);
app.run();
```

**The documentation is being created ...**