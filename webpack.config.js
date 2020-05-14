//서버 코드와 연관시키지 않는다.
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
    // webpack이 파일을 다루는 규칙을 알려준다.
    // 정규표현식을 사용한다.
    // 코드를 아래에서 위로 읽는다.
        rules: [{
            test: /\.(scss|sass)$/,
            use: ExtractCSS.extract([
                {
                    loader: "css-loader"
            },{ //sass 파일에 대한 호완성 지원.
                    loader: "postcss-loader"
            },
            {
                    loader: "sass-loader"
            }])
        }],
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    }
};

module.exports = config
