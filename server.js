const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const proxyTarget = process.env.PROXY_TARGET || 'http://localhost:8080';
const changeOriginForProxy = process.env.CHANGE_ORIGIN || 'false';
const staticPath = path.join(__dirname, 'dist', 'pet-adoption-angular', 'browser');

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: proxyTarget,
    secure: false,
    changeOrigin: changeOriginForProxy === 'true',
    pathRewrite: {
        '^/api': ''
    }
}));
app.use(express.static(staticPath));
app.get("*", function(__req, res){
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, function(){
    console.log("Server listening on port " + port);
});