require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const { Client } = require('pg')
const client = new Client({
  user: 'cbr',
  host: '192.168.122.169',
  database: 'tet',
  password: 'cbr250rr',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(port, () => {
    // logger.info(`cli-nodejs-api listening at ${port}`);
    console.log(`cli-nodejs-api listening at ${port}`)
});
