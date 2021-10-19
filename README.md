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

#online packing tools
- https://rollupjs.org/repl/?version=2.58.0&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMiUyMiUyQyUyMmlzRW50cnklMjIlM0F0cnVlJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZvcm1hdCUyMiUzQSUyMmlpZmUlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlMkMlMjJhbWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMiUyMiU3RCUyQyUyMmdsb2JhbHMlMjIlM0ElN0IlN0QlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==
- https://mrcoles.com/bookmarklet/

#Run

- yarn install
- open bookmarket.html
- drag the link to the browser bookmark bar.
