const PROXY_CONFIG = {
    '/api': {
        target: 'http://localhost:8080',
        secure: false,
        pathRewrite: {
            '^/api': ''
        }
    },
    '/authorize': {
        target: 'http://localhost:3000',
        secure: false,
    },
    '/token': {
        target: 'http://localhost:3000',
        secure: false,
    },
    '/keys': {
        target: 'http://localhost:3000',
        secure: false,
    }
}

module.exports = PROXY_CONFIG;