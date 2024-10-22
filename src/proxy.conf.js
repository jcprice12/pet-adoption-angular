const PROXY_CONFIG = {
    '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/api': ''
        }
    },
    '/authorize': {
        target: 'http://localhost:3000',
    },
    '/token': {
        target: 'http://localhost:3000',
    },
    '/keys': {
        target: 'http://localhost:3000',
    }
}

module.exports = PROXY_CONFIG;