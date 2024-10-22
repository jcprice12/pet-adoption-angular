const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3001;
const apiProxyTarget = process.env.API_PROXY_TARGET || 'http://localhost:8080';
const oauthProxyTarget =
  process.env.OAUTH_PROXY_TARGET || 'http://localhost:3000';
const staticPath = path.join(
  __dirname,
  'dist',
  'pet-adoption-angular',
  'browser'
);

function myPathRewrite(prefix) {
  return (path) => {
    if (Array.from(path)[0] === '/') {
      path = path.slice(1);
    }
    return `${prefix}${path}`;
  };
}

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: apiProxyTarget,
    pathRewrite: {
      '^/api': '',
    },
  })
);
app.use(
  '/authorize',
  createProxyMiddleware({
    logger: console,
    target: oauthProxyTarget,
    on: {
      proxyRes: (proxyRes, _req, res) => {
        if (proxyRes.statusCode === 302) {
          res.redirect(proxyRes.headers.location);
        } else {
          res.statusCode = proxyRes.statusCode;
          Object.keys(proxyRes.headers).forEach((key) => {
            res.setHeader(key, proxyRes.headers[key]);
          });
          proxyRes.pipe(res);
        }
      },
    },
    pathRewrite: myPathRewrite('/authorize'),
  })
);
app.use(
  '/token',
  createProxyMiddleware({
    target: oauthProxyTarget,
    pathRewrite: myPathRewrite('/token'),
  })
);
app.use(
  '/keys',
  createProxyMiddleware({
    target: oauthProxyTarget,
    pathRewrite: myPathRewrite('/keys'),
  })
);
app.use(express.static(staticPath));
app.get('*', function (__req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
});
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
