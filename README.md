# geocode-distance-client

> frontend webapp and UI for [geocode-distance
> backend](https://github.com/jafow/geocode-distance)

## Install & setup
This app depends on a Node.js([download here](https://nodejs.org/en/)).

``` bash
# install dependencies
npm install
```

For a production build do:
```bash
npm run build

# now can serve a static app from the /dist directory
cd dist/ && python3 -m http.server
```

For a dev build do:

```bash
npm run dev
```

This will start an instance of webpack dev server on `localhost:8080`.

# LICENSE
MIT
