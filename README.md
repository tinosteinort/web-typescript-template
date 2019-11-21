# Web Frontend Template With Plain Typescript

This should be a minimalistic example for a web page with typescript.


## Development

The typescript source is located in the `src` folder. The HTML source is in the
 `web-frontend` folder.

 __Attention: the `web-frontent/js` folder will be genereated. Dont't modify code manually.__

To develop execute these command in different terminals:
```
npm run dev
npm run pack
npm run serve
```

The local test webserver is reachable at `http://localhost:8000/`.


## Distributing

The distributable folder is `web-frontend`. To get a clean `js` folder, execute:
`npm run clean`.


## Open Points / Problems
1. `npm run clean` does not clear the files
2. `npm run pack` does not run in watch mode. Also not with the `--watch` option
