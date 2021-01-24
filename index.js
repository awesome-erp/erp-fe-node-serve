const express = require('express');
const path = require('path');
const app = express();

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.gif',
    '.GIF'
];
app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.join(__dirname, `${req.url}`));
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(process.env.PORT || 3000)