const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const date = Date.now();
let conf = {
    entry:{
        'js/main.js':path.resolve('src','js','main.js'), // точка входа - основной файл с зависимостями для сборки
        //'js/other.js':path.resolve('src','js','other.js'), // точка входа для дополнительного JS файла если нужно разделять JS, а не грузить все через главный JS файл на страницу (будет добавлена на стрраницу дополнительным скриптом)
        //'css/main.css':path.resolve('src','css','main.scss'), // точка входа scss
   },
    output:{
        path: path.resolve(__dirname, 'dist'), // путь назначения
        filename: '[name]' // название итогового файла по умолчанию (как на входе)
    },

    /*devtool: "source-map",*/

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader', // перегонка новых стандартов JS для старых браузеров.
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {// это чтобы работали  урлы бэкграундов из css
                            publicPath: '../'
                        }
                    },
                    //помещает css в отдельный файл (часть настроек еще в plugins)
                    "css-loader", // translates CSS into CommonJS
                    "postcss-loader", // add prefixes - поддержка версий указана в package.json в параметре "browserslist"
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },

            {
                test: /\.(html|php)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true // ${require('./header.html')}
                    }
                }
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader', // дает возможность при бандле пропускать в url (например в css) указанные форматы файлов, но при этом изменяет название файла и в опциях лучше указывать путь для картинки иначе она упадет в корень
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true, // использует тот же путь, что и в src, но с css не помогает
                            //outputPath: 'img/',
                            //publicPath: './img'
                        },
                    }
                ]
            },

            /*
            {// работает аналогично file-loader, но сохраняет пути, например путь со страницы и путь из css файла к изображению не одинаковы и url-loader учитывает это (но добавляет код к пути и это проблема)
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
            */
        ]
    },

    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),

        new HtmlWebpackPlugin({
            template:path.resolve('src', 'index.php'),
            filename: 'index.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/doska_duba.php',
            filename: 'doska_duba.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/dub.php',
            filename: 'dub.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/contacts.php',
            filename: 'contacts.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/catalog.php',
            filename: 'catalog.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/404.php',
            filename: '404.php'
        }),
        new HtmlWebpackPlugin({
            template: './src/sitemap.php',
            filename: 'sitemap.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_sleby_dub.php'),
            filename: 'category_sleby_dub.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_doska_duba.php'),
            filename: 'category_doska_duba.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_doska_yasenya.php'),
            filename: 'category_doska_yasenya.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_doska_dub_moreny.php'),
            filename: 'category_doska_dub_moreny.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_sleby_dub_moreny.php'),
            filename: 'category_sleby_dub_moreny.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_sleby_grusha.php'),
            filename: 'category_sleby_grusha.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'category_kapovy_topol.php'),
            filename: 'category_kapovy_topol.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'doska_dub_moreny.php'),
            filename: 'doska_dub_moreny.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'loft.php'),
            filename: 'loft.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'stol_loft.php'),
            filename: 'stol_loft.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src', 'stol_reka.php'),
            filename: 'stol_reka.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src','blog.php'),
            filename: 'blog.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src' ,'article_01.php'),
            filename: 'article_01.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src' ,'article_02.php'),
            filename: 'article_02.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src' ,'article_03.php'),
            filename: 'article_03.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src' ,'article_04_doska_duba_suhaya.php'),
            filename: 'article_04_doska_duba_suhaya.php'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve('src' ,'article_05_shirokie_sleby.php'),
            filename: 'article_05_shirokie_sleby.php'
        }),

        new CopyWebpackPlugin([
            {
                from: 'src/img', // путь откуда берем
                to: 'img' // путь в папке dist (в данном случае все переместится в dist/img)
            }
        ]),

        new MiniCssExtractPlugin({filename: 'css/main.css', }), // в параметрах путь и название файла, как они попадут в dist

    ],

};


// подобным образом можно кастомизировать
/*
module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap'; // а еще лучше, чтобы в продакшене не был виден (например, после конечной отладки)код толком через карту кода написать так:  conf.devtool = production ? 'false' : 'eval-sourcemap';
    return conf;
}
*/

module.exports = conf;