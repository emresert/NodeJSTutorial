//  USING WEBPACK IN LOCAL
// We need to write ' node ./node_modules/webpack/bin/webpack ' on Terminal
// webpack-cli inform will come to set. We have to set it to use webpack-cli
// npm i webpack-cli
// node ./node_modules/webpack-cli (for working)

 var path = require("path");
module.exports = {
    entry : './index.js',
    output : {
        path : path.resolve(__dirname,'./'),
        filename:"myBundle.js"
    },
    mode : "development"
    
}
// node  ./node_modules/webpack-cli --config=webpack-config.js after writing up codes.