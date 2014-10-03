# Restify logger
> Visit http://anyfetch.com for details about AnyFetch.

Customizable logger for Restify based on [mogan](https://github.com/expressjs/morgan).

# Usage

```js
var logger = require('restify-logger');

// You can use the skip parameter to skip some requests
app.use(logger('custom', {
  skip: function (req) {
    return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
  }
}));
```

This will display:
```
DELETE ???:/user/542d5154d0db17c03ecd1499 25ms 204
```

## Overriding tokens
You can specify a function to be used by the `user` token:
```js
// Overwrite the default user function, that only writes '???:'
logger.token('user', function(req) {
  return (req.user && req.user.email || '???') + ':';
});
```

This will display:
```
DELETE test@anyfetch.com:/user/542d5154d0db17c03ecd1499 25ms 204
```

## Overriding formats
```js
var logger = require('restify-logger');

// morgan syntax
logger.format('my-simple-format', ':method :url :status')
app.use(logger('my-simple-format'));
```

This will display:
```
DELETE /user/542d5154d0db17c03ecd1499 204
```


Support: `support@anyfetch.com`.
