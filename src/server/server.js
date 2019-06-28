
const server = require('server');
const {get, post} = server.router;
const {render, json} = server.reply;

server([
   get('/', ctx => render('Main.html')),

]);

