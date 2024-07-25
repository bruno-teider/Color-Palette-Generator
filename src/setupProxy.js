const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://colormind.io/api/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/',
            },
        })
    )
}