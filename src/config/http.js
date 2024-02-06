const { createServer } = require('http');
const expressApp = require('#Config/express.js')


const httpServer = createServer(expressApp);

module.exports = httpServer;