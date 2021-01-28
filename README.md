#Folder structure

- lib: the output folder which contains minify bookmarklet file
- src: the source code file
- bookmarklet.html: generate bookmarklet HTML template
  - p tag
  - a tag

#Utile tool

```
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "eslint": "^7.18.0",
    "uglify-js": "^3.12.5",
    "uglifyjs-folder": "^2.0.0"
```

- babel transform code to es5
- eslint to alter error
- uglify-js to minify the js
- uglifyjs-folder to minify all js in the folder

#Run

- yarn install
- open bookmarket.html
- drag the link to the browser bookmark bar.
