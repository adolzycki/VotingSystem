const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('public',express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/Main.html')));
app.get('/public/contractLogic.js', (req, res) => res.sendFile(path.join(__dirname+'/public/contractLogic.js')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
