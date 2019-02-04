// Import the library
const server = require('server');
const { get, post } = server.router;
const { render, json } = server.reply;


// Answers to any request
server([
    get('/', ctx => render('index.html')),
    post('/', ctx => json(ctx.data)),
    get(ctx => status(404))
  ]);