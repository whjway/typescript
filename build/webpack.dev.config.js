module.exports = {
    devtool: 'cheap-module-eval-source-map', // cheap:source-map忽略文件的列信息，列信息是无用的 module: 定位到TS源码,不是经过转义的js代码
    devServer: {
        port: 5000,
    }
}