# webpack4 react babel7环境搭建

## 项目初始化
通过npm init初始化项目，一路yes，生成package.json文件

## 安装webpack4
```
npm i -g webpack webpack-cli
npm i -D webpack webpack-cli
```

## 项目安装@babel/core @babel/preset-env @babel/preset-react
```
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
```
不要忘了配置Babel！创建一个名为.babelrc 文件在项目文件夹中：
```
{

  "presets": ["@babel/preset-env", "@babel/preset-react"]

}
```


## 安装webpack各种常用加载器、插件和工具
```
npm i -D html-webpack-plugin
npm i -D file-loader url-loader style-loader css-loader babel-loader
npm i -D webpack-dev-server
```

## 安装React依赖
```
npm i -D react react-dom react-router-dom
```

## 创建 webpack.config.js 文件，编写相关配置
```
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                 loader: "babel-loader"
                }
            },
            {
              test: /\.css$/,
              use: ['style-loader','css-loader']
            }
          ]
    },
    resolve: {
        extensions: ['.js', '*', '.css']  
    },
    // 开发服务器
    devServer: {
      contentBase: false,// 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
      historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      compress: true,// 启用gzip压缩
      inline: true,// 设置为true，当源文件改变时会自动刷新页面
      hot: true,// 模块热更新，取决于HotModuleReplacementPlugin
      host: '127.0.0.1',// 设置默认监听域名，如果省略，默认为“localhost”
      port: 8081// 设置默认监听端口，如果省略，默认为“8080”
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
      })
    ]
}
```

## run

1.生产阶段

```
npm run build
```

2.开发阶段

```
npm run server
```