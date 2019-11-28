# Web Frontend Template With Plain Typescript

This is a example for a web page with typescript, but without angular.


## Development

The typescript source is located in the `src` folder. The HTML source is in the
 `web-frontend` folder.

To start development execute:
```
npm run dev
```
Now you can modify the `*.ts` files. They will be transpiled automatically.

The local test webserver is reachable at `http://localhost:8000/`. You have to refresh
 the browser by your own to execute the new transpiled code.

 __Attention: the `web-frontent/js` and `build` folders will be genereated. Dont't modify code within manually.__


## Distributing

The distributable folder is `web-frontend`. Before using, run:
```
npm run build
```
