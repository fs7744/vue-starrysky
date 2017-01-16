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

## vue-starrysky's Rules

* Main module is the app boot, the code add in main which should be use by all module

  > Main 模块是引导模块，只有会被所有模块使用的代码才能被加入main中

* Every module should have **app.js**，

  and should **register a vue component** which has **same name** with the **module directory name**

  This is because of we do not have really module, actually we use vue component to be a module and just use directory to differentiate of module
  > 每个模块必须有app.js， 并且在其中有代码注册和模块文件夹名字一样的vue组件

  like the code in ```module1/app.js``` ：
  ```
import Vue from 'vue'
import module1 from './components/main.vue'

Vue.component('module1', module1)
  ```
* Module name will show in the url, like : ```/[ModuleName]/xxx/xx?xx=xx```, so change the ```[ModuleName]``` will change the module

  > 模块名会体现在url中，改变```[ModuleName]```会导致模块切换 