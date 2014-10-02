# Restify logger
> Visit http://anyfetch.com for details about AnyFetch.

Customizable logger for Restify

# Usage

You can specify a function to the logger to add a small text at the beggining of your log line to identify the user which do the request. By default '???' is displayed.

And you can specify another function to filter logged request.

For example :
```
DELETE test@anyfetch.com:/user/542d5154d0db17c03ecd1499 25ms 204
```

```js

var logger = require('restify-logger');

/*
 * Some code
 */

app.use(logger(function(res, req) {
    // Don't log on test (return false)
    return process.env.NODE_ENV !== "test";
}, function(res, req) {
    // Display email
    return req.user.email;
}));

/*
 * Some other code
 */
```

Support: `support@anyfetch.com`.