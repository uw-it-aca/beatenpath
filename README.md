# beatenpath
AXDD Beaten Path


## Initial Setup
```
$ git clone https://github.com/uw-it-aca/beatenpath
$ cd beatenpath
$ npm install
```

## Development
```
$ npm run serve --watch
```

View your app: http://localhost:8080


## Deployment

Note: edit publicPath value on vue.config.js if deploying to subfolder: https://cli.vuejs.org/config/#publicpath 

```
$ npm run build
```

FTP the contents of the 'dist' directory to your desired Staff page subfolder (i.e. 'beatenpath')
