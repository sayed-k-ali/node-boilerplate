const http = require('http');
const server = require('./server');

const app = http.createServer(server);

const port = process.env.SERVER_PORT || 3000

app.listen(port, () => console.log('Server run on port: ', port))