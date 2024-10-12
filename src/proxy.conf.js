const PROXY_CONFIG = {
    '/api': {
        target: 'http://localhost:8080',
        secure: false,
        pathRewrite: {
            '^/api': ''
        }
    },
    '/oauth': {
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite: {
            '^/oauth': ''
        }
    }
}

module.exports = PROXY_CONFIG;