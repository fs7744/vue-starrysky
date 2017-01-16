# vue-starrysky

> Author：Victor.X.Qu

> Email:  fs7744@hotmail.com

## What's this ?

A simple project template for do add some function can just deploy add-in module, not deploy all vue website

这是一个为使用vue开发类似功能能像插件模块随意添加的网站的简单项目模板

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init fs7744/vue-starrysky my-project
$ cd my-project
$ npm install
$ npm run dev
$ npm run build  // build production
```

## Project Structure

``` js
project-dir
    |---build               // webpack config js
    |---src 
        |---main            // app start module
            |---components  // vue components dir
            |---app.js      // module start js
        |---module1         // a example add-in module
            |---components  // vue components dir
            |---app.js      // module start js
        |---index.html      // app start template html
    |---test                // ut 
    |---config.js           // some config will be use for webpack 
```

## 