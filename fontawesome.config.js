module.exports = {
    rules: [
        {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]',
                },
            },
        },
        {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff2',
                    name: './fonts/[name].[ext]',
                },
            },
        },
        {
            test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/octet-stream',
                    name: './fonts/[name].[ext]',
                },
            },
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]',
                },
            },
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'image/svg+xml',
                    name: './fonts/[name].[ext]',
                },
            },
        },
    ],
};
