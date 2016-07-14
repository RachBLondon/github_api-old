const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const router = require('./router');

const cors = require('cors');

const app = express();

//TODO ADD Stormpath auth here
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server listening on :", port);
