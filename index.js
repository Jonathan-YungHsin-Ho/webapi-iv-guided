require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.port || 5000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
