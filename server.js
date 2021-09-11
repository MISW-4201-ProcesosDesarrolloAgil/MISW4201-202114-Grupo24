const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + './tutorial-canciones/src'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + './tutorial-canciones/src/index.html'));
});

app.listen(process.env.PORT || 5000);