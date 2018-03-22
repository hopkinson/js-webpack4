
针对webpack4+babel来说明，怎么在工程里体现出来，尤其是vue-cli生成的代码，有些人光会用，而不知道其中。这里也不针对vue，而用最原始js来讲解。

## 1. 新建一个.js

在js文件里面新增一些ES6的内容

```js
let abc = 123
setTimeout(() => {
  console.log(this)
}, 200)
```

## 2. 安装 配置webpack4

1.安装： `npm install --save-dev webpack webpack-dev-server webpack-cli`
2.在package.json上加上script启动项目

```js
"scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "build": "webpack"
  },
```

start: 通过wepback.config.js.配置文件并结合webpack-dev-server启动实时查看动态变化。
build: 生成输出文件

3.配置webapck

```js
var path = require('path')
module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
```
生成的文件：/dist/index.bundle.js

## 3. 安装 配置babel
**简单来说就是：**
1. 装node
2. babel-cli 命令行转码
3. babel-preset-env babel-preset-es2015 安装语法插件
4. babel-core 要调用Babel的API转码
5. 配置文件.babelrc
6. babel-register 模块改写require命令
7. babel-polyfill 解决兼容性


1. 安装：`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-stage-2`
2. 配置.babelrc

```js
{
  "presets": [
    "env",
    "stage-2"
  ]
}

```
3.在webpack的moudle上加上babel-loader能处理.js文件

```js
module.exports={
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
}
```
