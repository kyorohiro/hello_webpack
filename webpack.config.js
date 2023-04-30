const path = require('path');  //path モジュールの読み込み
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  //エントリポン
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            //CSS 用のローダー
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // Babel 用のローダー
            {
                // 拡張子 .js を対象
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            },
            //Asset Modules の設定
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //対象とする画像ファイルの拡張子
                type: 'asset/resource',  // 画像をコピーして出力
                //generator: {
                //    //出力先を指定（images フォルダにファイル名と拡張子で出力）
                //    filename: 'images/[name][ext][query]'
                //}
            },
        ]
    },
    mode: 'development', // 追加
    devtool: 'source-map', // 追加
    devServer: {
        static: './dist',  //静的ファイルの場所
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};