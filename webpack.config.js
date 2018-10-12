const path = require('path');

module.exports = {
    entry: {
        section2: path.join(__dirname, '/Section2/index.ts'),
        section3: path.join(__dirname, '/Section3/index.ts'),
        section5: path.join(__dirname, '/Section5/index.ts')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}