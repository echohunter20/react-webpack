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