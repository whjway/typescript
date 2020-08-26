const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 自动清空dist目录

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}