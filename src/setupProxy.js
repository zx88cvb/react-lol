const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000/mock',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    })
  );
};